import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET ALL COMMENTS OF A POST
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return NextResponse.json(comments);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Something went wrong!", status: 500 });
  }
};

// CREATE A COMMENT
export const POST = async (req: Request) => {
  const session = await getAuthSession();

  if (!session || !session.user) {
    return NextResponse.json({ message: "Not Authenticated!", status: 401 });
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });

    return NextResponse.json(comment);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Something went wrong!", status: 500 });
  }
};
