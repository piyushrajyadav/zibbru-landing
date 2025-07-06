import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zibbru',
  description: 'A Next.js app with a custom layout for dog bed',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
