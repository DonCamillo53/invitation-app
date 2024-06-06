import { Resend } from "resend";
import HTMLtemplate from "../../../../components/emails/HTMLtemplate";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  console.log("api key", process.env.RESEND_API_KEY);
  try {
    const data = await resend.emails.send({
      from: "info@brandsandgoods.de",
      to: "csmuellkippe@gmail.com",
      subject: "hello world",
      react: <HTMLtemplate />,
    });
    return NextResponse.json({ data: data });
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}
