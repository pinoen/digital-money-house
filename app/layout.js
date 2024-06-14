export const metadata = {
  title: 'Digital Money House',
  description: 'App de pagos',
}

import '@/app/globals.css'
import { LandingHeader } from './_components/LandingHeader'
import { Footer } from './_components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LandingHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
