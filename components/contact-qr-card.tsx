import Image from "next/image";

type ContactQrCardProps = {
  name: string;
  saveContactUrl: string;
};

export function ContactQrCard({ name, saveContactUrl }: ContactQrCardProps) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=560x560&data=${encodeURIComponent(
    saveContactUrl
  )}`;

  return (
    <main className="page-shell">
      <section className="card">
        <p className="label">Contact QR</p>
        <h1>{name}</h1>
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
