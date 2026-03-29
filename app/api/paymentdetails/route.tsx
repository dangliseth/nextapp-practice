import prisma from "@/app/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const payments = await prisma.paymentDetails.findMany();

  return NextResponse.json(payments);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    
}