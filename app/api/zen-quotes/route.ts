import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import axios from "axios";

const zenquotesMode = "random"

export async function GET(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const response = await axios.get(`https://zenquotes.io/api/${zenquotesMode}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}