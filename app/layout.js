export const metadata = {
  title: 'Digital Money House',
  description: 'App de pagos',
}

import '@/app/globals.css'
import { Header } from './_components/Header'
import { Footer } from './_components/Footer'
import ReduxProvider from './_redux/ReduxProvider'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}