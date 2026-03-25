import { NextResponse } from "next/server";

const contact = {
  fullName: "Юрій Білоус",
  firstName: "Юрій",
  lastName: "Білоус",
  title: "Frontend Developer",
  company: "Your Brand",
  phone: "+380991234567",
  email: "hello@example.com",
  website: "https://your-domain.com",
  telegram: "https://t.me/yurii_bilous",
  address: "Chicago, IL",
  note: "Контакт додано з digital business card."
};

export async function GET() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${contact.lastName};${contact.firstName};;;`,
    `FN:${contact.fullName}`,
    `ORG:${contact.company}`,
    `TITLE:${contact.title}`,
    `TEL;TYPE=CELL:${contact.phone}`,
    `EMAIL;TYPE=INTERNET:${contact.email}`,
    `URL:${contact.website}`,
    `URL;TYPE=Telegram:${contact.telegram}`,
    `ADR;TYPE=WORK:;;${contact.address};;;;`,
    `NOTE:${contact.note}`,
    "END:VCARD"
  ].join("\n");

  return new NextResponse(vcard, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="contact.vcf"'
    }
  });
}
