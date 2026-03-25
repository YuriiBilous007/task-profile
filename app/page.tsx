import Image from "next/image";

const contact = {
  fullName: "Юрій Білоус",
  title: "Frontend Developer",
  phoneDisplay: "+38 (099) 123-45-67",
  phoneRaw: "+380991234567",
  email: "hello@example.com",
  telegram: "yurii_bilous",
  website: "https://your-domain.com",
  company: "Your Brand",
  address: "Chicago, IL",
  note: "Відскануйте QR або натисніть кнопку, щоб зберегти контакт у телефон."
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://your-domain.com";
const profileUrl = siteUrl;
const saveContactUrl = `${siteUrl}/api/contact`;
const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=560x560&data=${encodeURIComponent(
  profileUrl
)}`;

const actions = [
  {
    href: `tel:${contact.phoneRaw}`,
    label: "Подзвонити"
  },
  {
    href: `sms:${contact.phoneRaw}`,
    label: "SMS"
  },
  {
    href: `mailto:${contact.email}`,
    label: "Email"
  },
  {
    href: `https://t.me/${contact.telegram}`,
    label: "Telegram"
  }
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="identity">
          <p className="eyebrow">Digital Contact Card</p>
          <h1>{contact.fullName}</h1>
          <p className="role">{contact.title}</p>
          <p className="description">{contact.note}</p>

          <div className="primary-actions">
            <a className="button button-solid" href={saveContactUrl}>
              Зберегти контакт
            </a>
            <a className="button button-ghost" href={profileUrl}>
              Відкрити сторінку
            </a>
          </div>

          <div className="contact-grid">
            <article>
              <span>Телефон</span>
              <a href={`tel:${contact.phoneRaw}`}>{contact.phoneDisplay}</a>
            </article>
            <article>
              <span>Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </article>
            <article>
              <span>Telegram</span>
              <a href={`https://t.me/${contact.telegram}`}>@{contact.telegram}</a>
            </article>
            <article>
              <span>Сайт</span>
              <a href={contact.website}>{contact.website.replace(/^https?:\/\//, "")}</a>
            </article>
          </div>
        </div>

        <div className="qr-panel">
          <div className="qr-frame">
            <Image
              src={qrUrl}
              alt="QR code to open contact page"
              width={280}
              height={280}
              priority
            />
          </div>
          <p className="qr-caption">Наведіть камеру iPhone або Android на QR-код</p>
        </div>
      </section>

      <section className="actions-strip">
        {actions.map((action) => (
          <a key={action.label} className="chip" href={action.href}>
            {action.label}
          </a>
        ))}
      </section>
    </main>
  );
}
