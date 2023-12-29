import { type Emails } from "@/app/_components/RecaptchaContext";
import { NextResponse } from "next/server";

const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY ?? "";
const EMAIL_MAIN = process.env.EMAIL_MAIN ?? "";
const ENAIL_DEV = process.env.EMAIL_DEV ?? "";

export async function POST(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  if (token === null) return new Response("Missing token", { status: 400 });
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`;
  const response = await fetch(url, { method: "POST" });
  const data = await response.json();
  const emails: Emails = { main: EMAIL_MAIN, dev: ENAIL_DEV };
  return NextResponse.json({
    success: data.success,
    emails,
  });
}
