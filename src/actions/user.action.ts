"use server";

import { prisma } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function syncUser() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) return;

    const existingUser = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (existingUser) return existingUser;

    const dbUser = await prisma.user.create({
      data: {
        clerkId: userId,
        name: `${user.firstName || ""} ${user.lastName || ""}`,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return dbUser;
  } catch (error) {
    console.log("Error to sync user", error);
  }
}

export async function getDbUserId() {
  try {
    const { userId: clerkId } = await auth();

    if (!clerkId) return null;

    const user = await prisma.user.findUnique({
      where: {
        clerkId,
      },
    });

    return user?.id;
  } catch (error) {
    throw new Error("Unauthorized");
  }
}
