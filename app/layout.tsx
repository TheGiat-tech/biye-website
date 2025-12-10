import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageContext";

export const metadata: Metadata = {
  title: "BiYé - Smart FemTech & IoT Solution for Women's Hygiene Accessibility",
  description: "BiYé is a next-generation FemTech and IoT initiative redefining women's hygiene accessibility in public environments. Enhancing women's wellbeing through discreet, reliable access.",
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
