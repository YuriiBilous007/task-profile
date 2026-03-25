import Image from "next/image";
import { contact, getSiteUrl } from "@/lib/contact";

const siteUrl = getSiteUrl();
const saveContactUrl = `${siteUrl}/api/contact`;
const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=560x560&data=${encodeURIComponent(
  saveContactUrl
)}`;

export default function Home() {
  return (
    <main className="page-shell">
      <section className="card">
        <p className="label">Contact QR</p>
        <h1>{contact.fullName}</h1>
        <div className="qr-frame">
          <Image
            src={qrUrl}
            alt="QR code to save contact"
            width={320}
            height={320}
            priority
          />
        </div>
      </section>
    </main>
  );
}
