import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import "./globals.css";

const namu = localFont({
  src: [
    {
      path: "./fonts/NAMU-1990.woff",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-namu",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "KP Template",
  description: "Коммерческое предложение",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${namu.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}