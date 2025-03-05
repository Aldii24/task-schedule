"use server";

import { prisma } from "@/lib/prisma";
import { getDbUserId } from "./user.action";
import { revalidatePath } from "next/cache";

export async function createTask(
  title: string,
  categoryName: string,
  description: string,
  dueDate: Date | null
) {
  try {
    const userId = await getDbUserId();
    if (!userId) return;

    if (!categoryName.trim()) {
      throw new Error("Category name is required");
    }

    let category = await prisma.category.findFirst({
      where: { name: categoryName, userId },
    });

    if (!category) {
      category = await prisma.category.create({
        data: {
          name: categoryName,
          userId,
        },
      });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        dueDate,
        userId,
        categoryId: category.id,
      },
    });

    revalidatePath("/");
    return { success: true, task };
  } catch (error) {
    console.error("Error creating task:", error);
    throw new Error("Failed to create task");
  }
}

export async function getTasksCategory() {
  try {
    const userId = await getDbUserId();

    if (!userId) return;

    const category = await prisma.category.findMany({
      where: { userId },
      include: {
        task: {
          include: {
            category: true,
          },
        },
        _count: {
          select: {
            task: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    revalidatePath("/");
    if (!category) return [];

    return category;
  } catch (error) {
    return [];
  }
}

export async function getAllTasksCategory() {
  try {
    const userId = await getDbUserId();
    if (!userId) return;

    const category = await prisma.task.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!category) return [];

    revalidatePath("/");

    return category;
  } catch (error) {
    return [];
  }
}
