import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Project',
  description: 'Next.js Example by Kristin Hargrove',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='text-2xl text-primary'>Navbar</nav>
        {children}
        </body>
    </html>
  )
}
