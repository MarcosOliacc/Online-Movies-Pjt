import { Header } from '@/components/common/header'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import '@/styles/globals.scss'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Online Movies',
  description: 'um site de filmes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
