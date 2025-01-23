import { Inter } from 'next/font/google'
import '../resources/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sherchub',
  description: "It's simple and dynamic"
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
