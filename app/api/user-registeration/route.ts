import { NextRequest, NextResponse } from "next/server";
import db from "@/database/db";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  await db();
  try {
    const { name, email, password } = await req.json();
    const Existuser = await User.findOne({ email });
    if (Existuser) {
      return NextResponse.json(
        {
          message: "user is already exists",
        },
        { status: 400 }
      );
    }
    const user = await User.create({ name, email, password });
    return NextResponse.json(
      {
        message: "User created",
        response: user,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
