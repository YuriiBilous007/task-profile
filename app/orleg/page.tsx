import Image from "next/image";
import { getSiteUrl, orlegContact } from "@/lib/contact";

const siteUrl = getSiteUrl();
const saveContactUrl = `${siteUrl}/api/contact/orleg`;
const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=560x560&data=${encodeURIComponent(
  saveContactUrl
)}`;

export default function OrlegPage() {
  return (
    <main className="page-shell">
      <section className="card">
        <p className="label">Contact QR</p>
        <h1>{orlegContact.fullName}</h1>
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
