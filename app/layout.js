export const metadata = {
  title: 'Digital Money House',
  description: 'App de pagos',
}

import '@/app/globals.css'
import { Header } from './_components/Header'
import { Footer } from './_components/Footer'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}