import { NextResponse } from "next/server";
import { orlegContact } from "@/lib/contact";

export async function GET() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${orlegContact.lastName};${orlegContact.firstName};;;`,
    `FN:${orlegContact.fullName}`,
    `TEL;TYPE=CELL:${orlegContact.phoneRaw}`,
    "END:VCARD"
  ].join("\n");

  return new NextResponse(vcard, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="orleg-mounting-services.vcf"'
    }
  });
}
