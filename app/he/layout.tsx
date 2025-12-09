import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'BiYé - פתרון FemTech ו-IoT לנגישות היגיינה נשית',
  description: 'חיזוק רווחת הנשים באמצעות גישה דיסקרטית ומהימנה במרחב הציבורי.',
}

export default function HebrewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className="font-sans">{children}</body>
    </html>
  )
}
