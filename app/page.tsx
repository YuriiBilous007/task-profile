import { ContactQrCard } from "@/components/contact-qr-card";
import { contact, getSiteUrl } from "@/lib/contact";

const siteUrl = getSiteUrl();
const saveContactUrl = `${siteUrl}/api/contact`;

export default function Home() {
  return <ContactQrCard name={contact.fullName} saveContactUrl={saveContactUrl} />;
}
