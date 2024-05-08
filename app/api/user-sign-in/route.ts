import User from "@/models/User";
import db from "@/database/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await db();
  try {
    const { email, password } = await req.json();
    const Existuser = await User.findOne({ email });
    if (!Existuser) {
      return NextResponse.json(
        {
          message: "User does not exist",
        },
        {
          status: 400,
        }
      );
    }
    if (password !== Existuser.password) {
      return NextResponse.json(
        {
          message: "password is wrong",
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        message: "Logged In",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
