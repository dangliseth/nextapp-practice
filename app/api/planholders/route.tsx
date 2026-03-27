import prisma from "@/app/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const users = await prisma.planHolders.findMany();

  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const {
    LPANumber,
    firstName,
    middleName,
    lastName,
    effectivityDate,
    planType,
  } = body;

  const holder = await prisma.planHolders.findUnique({
    where: { LPANumber: LPANumber },
  });

  if (holder)
    return NextResponse.json(
      { error: "Planholder already exists." },
      { status: 401 },
    );

  await prisma.planHolders.create({
    data: {
      LPANumber: LPANumber,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      effectivityDate: effectivityDate,
      planType: planType,
    },
  });

  return NextResponse.json({ status: 201 });
}
