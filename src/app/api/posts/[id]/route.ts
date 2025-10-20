import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
  return NextResponse.json(post);
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  await prisma.post.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json({ message: "Post deleted" });
}
