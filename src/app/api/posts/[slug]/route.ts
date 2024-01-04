import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

interface Props {
  params: any;
}

// GET SINGLE POST
export const GET = async (req: Request, { params }: Props) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Something went wrong!", status: 500 });
  }
};
