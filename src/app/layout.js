import Navbar from '@/component/Navbar'
import './globals.css'
import { Inter, Nabla } from 'next/font/google'
import Footer from '@/component/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MEM INSPECT',
  description: 'Get professional vehicle inspection reports with our certified inspectors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="select-none min-h-screen">
          
          {children}
        </main>
      </body>
    </html>
  )
}