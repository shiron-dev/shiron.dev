import { NextResponse } from "next/server";

const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY ?? "";
const EMAIL_MAIN = process.env.EMAIL_MAIN ?? "";
const ENAIL_DEV = process.env.EMAIL_DEV ?? "";

export type EmailType = "main" | "dev";

export async function POST(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const emailType = searchParams.get("type") as EmailType | null;
  if (token === null || emailType === null) return NextResponse.error();

  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`;
  const response = await fetch(url, { method: "POST" });
  const data = await response.json();
  const emailAddress = ((): string => {
    if (!(data.success as boolean)) return "";
    switch (emailType) {
      case "main":
        return EMAIL_MAIN;
      case "dev":
        return ENAIL_DEV;
    }
    return "";
  })();
  return NextResponse.json({ success: data.success, email: emailAddress });
}
