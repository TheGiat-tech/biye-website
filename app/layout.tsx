import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageContext";

export const metadata: Metadata = {
  title: "BiYé - Smart FemTech & IoT Solution for Women's Hygiene Accessibility",
  description: "BiYé is a next-generation FemTech and IoT initiative redefining women's hygiene accessibility in public environments. Enhancing women's wellbeing through discreet, reliable access.",
  keywords: "FemTech, IoT, women's health, hygiene accessibility, smart technology, HealthTech, public infrastructure",
  authors: [{ name: "BiYé" }],
  openGraph: {
    title: "BiYé - Smart FemTech & IoT Solution for Women's Hygiene Accessibility",
    description: "BiYé is a next-generation FemTech and IoT initiative redefining women's hygiene accessibility in public environments.",
    type: "website",
    locale: "en_US",
    alternateLocale: "he_IL",
    siteName: "BiYé",
  },
  twitter: {
    card: "summary_large_image",
    title: "BiYé - Smart FemTech & IoT Solution",
    description: "Revolutionizing women's hygiene accessibility through smart FemTech and IoT solutions.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
