import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers/NextUiProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Duhans Zaika - Food Delivery',
  description: 'Duhans Zaika Food Delivery Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
          <body className={inter.className}>
              <Providers>{children}</Providers>
          </body>
      </html>
  );
}
