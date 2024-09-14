import './globals.css';
import { Header } from './_components/Header';
import { Footer } from './_components/Footer';
import { ContextProvider } from './_context/ContextProvider';
import SessionWrapper from './_context/SessionWrapper';
import ReactQueryProvider from './_context/ReactQueryProvider';

export const metadata = {
  title: 'Digital Money House',
  description: 'App de pagos',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <ContextProvider>
            <ReactQueryProvider>
              <Header />
              {children}
              <Footer />
            </ReactQueryProvider>
          </ContextProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
