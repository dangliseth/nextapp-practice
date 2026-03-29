import prisma from "@/app/prisma";
import { NextRequest, NextResponse } from "next/server";
import { planholderSchema } from "@/app/components/ZodSchemas";

export async function GET(request: NextRequest) {
  const users = await prisma.planHolders.findMany();

  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = planholderSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.format() },
      { status: 400 },
    );
  }

  const { firstName, middleName, lastName } = validation.data;

  try {
    // Use a transaction to ensure creating the user and generating the ID is an atomic operation
    const newPlanholder = await prisma.$transaction(async (tx) => {
      // 1. Create the planholder. LPANumber can be a placeholder or empty.
      //    The database will assign a unique, auto-incrementing `id`.
      const holder = await tx.planHolders.create({
        data: {
          firstName,
          middleName,
          lastName,
          LPANumber: "PENDING", // Temporary placeholder
        },
      });

      // 2. Generate the custom LPANumber using the new unique `id`.
      const year = new Date().getFullYear().toString();
      // We can pad the ID for consistent length and sorting, e.g., LPA20260001
      const paddedId = holder.id.toString().padStart(4, "0");
      const LPANumber = `LPA${year}${paddedId}`;

      // 3. Update the new record with its final, unique LPANumber.
      const updatedHolder = await tx.planHolders.update({
        where: { id: holder.id },
        data: { LPANumber: LPANumber },
      });

      return updatedHolder;
    });
    return NextResponse.json(newPlanholder, { status: 201 });
  } catch (error) {
    console.error("Failed to create planholder:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}
