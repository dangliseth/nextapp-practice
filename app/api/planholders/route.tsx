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

    const newPlanholder = await prisma.$transaction(async (tx) => {

      const holder = await tx.planHolders.create({
        data: {
          firstName,
          middleName,
          lastName,
          LPANumber: "PENDING", 
        },
      });


      const year = new Date().getFullYear().toString();

      const paddedId = holder.id.toString().padStart(4, "0");
      const LPANumber = `LPA${year}${paddedId}`;

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
