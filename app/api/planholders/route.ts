import prisma from "@/app/prisma";

export async function GET() {
    const users = await prisma.planHolders.findMany()

    return users;
}