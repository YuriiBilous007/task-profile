export const contact = {
  fullName: "Юрій Білоус",
  firstName: "Юрій",
  lastName: "Білоус",
  title: "Frontend Developer",
  company: "Your Brand",
  phoneDisplay: "+38 (099) 123-45-67",
  phoneRaw: "+380991234567",
  email: "hello@example.com",
  telegram: "yurii_bilous",
  website: "https://your-domain.com",
  address: "Chicago, IL",
  note: "Відскануйте QR або натисніть кнопку, щоб зберегти контакт у телефон."
} as const;

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? contact.website;
}
