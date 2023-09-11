import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const { id } = params;
  const taskById = await prisma.task.findUnique({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json(taskById);
}

export async function PUT(request, { params }) {
  const { id } = params;
  const data = await request.json()
  const putTask = await prisma.task.update({
    where: {
      id: Number(id),
    },
    data: data
  })
  return NextResponse.json(putTask)
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const deletedTask = await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(deletedTask);
  } catch (error) {
    return NextResponse.json(error.message);

  }
}
