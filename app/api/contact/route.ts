import { NextResponse } from "next/server";
import { contact } from "@/lib/contact";

export async function GET() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${contact.lastName};${contact.firstName};;;`,
    `FN:${contact.fullName}`,
    `TEL;TYPE=CELL:${contact.phoneRaw}`,
    "END:VCARD"
  ].join("\n");

  return new NextResponse(vcard, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="contact.vcf"'
    }
  });
}
