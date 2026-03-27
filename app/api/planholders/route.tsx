import prisma from "@/app/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const users = await prisma.planHolders.findMany();

  return NextResponse.json(users);
}
