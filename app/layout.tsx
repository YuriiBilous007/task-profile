import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Contact Card",
  description: "Сторінка-візитка для швидкого збереження контактів на iPhone та Android."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
