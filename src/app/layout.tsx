import type { Metadata } from "next";
import { Cabin_Condensed } from "next/font/google";
import "./globals.css";

const cabinFont = Cabin_Condensed({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Iron Flame",
  description: "Steakhouse Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cabinFont.className} antialiased`}>{children}</body>
    </html>
  );
}
