import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from './components/layout/Navbar';
// import { Footer } from '@/components/layout/Footer';
// import { TextMaskReveal } from '@/components/effects/TextMaskReveal';
// import { PageTransition } from '@/components/effects/PageTransition';
// import { SmoothScroll } from '@/components/effects/SmoothScroll';
import { ScrollDirectionSync } from './components/effects/ScrollDirectionSync';
// import { CookieBanner } from '@/components/ui/CookieBanner';
// import { ThemeProvider } from '@/components/providers/ThemeProvider';
// import { BottomFade } from '@/components/ui/BottomFade'

const namu = localFont({
  src: [
    {
      path: "../public/fonts/Namu/NAMU-1990.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Предложение для Илоны, Литрес",
  description: "Коммерческое предложение на разработку сайта для партнерского проекта Литрес",
};

const themeInitScript = `
  (function () {
    try {
      var root = document.documentElement;
      var stored = window.localStorage.getItem('theme');
      var theme;
      if (stored === 'dark' || stored === 'light') {
        theme = stored;
      } else {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      root.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head />
      <body className={`${namu.variable} ${manrope.variable}`}>
          <ScrollDirectionSync />
          {/* <Navbar /> */}
          <main>{children}</main>
      </body>
    </html>
  )
}
