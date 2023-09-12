
import Navbar from '@/components/navebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import Providers from '@/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FUTURE TEKNI',
  description: 'Created by M.Daniyal.Qasmi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-mywhite text-myblue`}>
        <div className='max-w-[90%] mx-auto'></div>
        <Providers>
        <Navbar/>
        {children}
        <Footer/>
        </Providers>
        </body>
    </html>
  )
}
