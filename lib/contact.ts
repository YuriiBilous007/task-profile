export const contact = {
  fullName: "Yurii Handyman",
  firstName: "Yurii",
  lastName: "Handyman",
  title: "Frontend Developer",
  company: "Your Brand",
  phoneDisplay: "+1-224-301-6417",
  phoneRaw: "+12243016417",
  email: "hello@example.com",
  telegram: "yurii_bilous",
  website: "https://task-profile-ten.vercel.app",
  address: "Chicago, IL",
  note: "Відскануйте QR або натисніть кнопку, щоб зберегти контакт у телефон."
} as const;

export const orlegContact = {
  fullName: "ORLEG MOUNTING SERVICES",
  firstName: "ORLEG",
  lastName: "MOUNTING SERVICES",
  phoneDisplay: "630-939-0000",
  phoneRaw: "+16309390000"
} as const;

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? contact.website;
}
