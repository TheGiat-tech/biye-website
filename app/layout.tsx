import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BiYé - FemTech & IoT Accessibility Solutions",
  description: "Professional medical device solutions for women's health and accessibility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
