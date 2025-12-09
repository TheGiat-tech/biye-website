import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BiYé - FemTech & IoT Solution for Women\'s Hygiene Accessibility',
  description: 'Enhancing women\'s wellbeing through discreet, reliable access in public spaces.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
