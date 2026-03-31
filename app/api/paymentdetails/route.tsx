import { paymentDetailsSchema } from "@/app/components/ZodSchemas";
import prisma from "@/app/prisma";
import { NextRequest, NextResponse } from "next/server";
import z, { date } from "zod";

export async function GET(request: NextRequest) {
  const payments = await prisma.paymentDetails.findMany();

  return NextResponse.json(payments);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = paymentDetailsSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: z.treeifyError(validation.error) },
      { status: 400 },
    );
  }

  const { LPANumber, ORAmount, planType, effectivityDate } = validation.data;

  try {
    const newPayment = await prisma.$transaction(async (tx) => {
      const details = await tx.paymentDetails.create({
        data: {
          LPANumber,
          ORNumber: "wait",
          ORAmount: Number(ORAmount),
          ORDate: "wait",
        },
      });

      const year = new Date().getFullYear().toString();
      const newId = details.id.toString().padStart(4, "0");

      const currentDate = new Date().toLocaleDateString();

      const updated = await tx.paymentDetails.update({
        where: { id: details.id },
        data: { ORNumber: `OR${year}${newId}`, ORDate: `${currentDate}` },
      });

      return updated;
    });
    const updatedPH = await prisma.planHolders.update({
      where: { LPANumber: LPANumber },
      data: {
        effectivityDate: effectivityDate,
        planType: planType,
      },
    });
    return NextResponse.json({ newPayment, updatedPH }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create payment." },
      { status: 500 },
    );
  }
}
