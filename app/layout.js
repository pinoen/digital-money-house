import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './_components/Header';
import { Footer } from './_components/Footer';
import { ContextProvider } from './_context/ContextProvider';
import SessionWrapper from './_context/SessionWrapper';
import ReactQueryProvider from './_context/ReactQueryProvider';
import { ToastContainer } from 'react-toastify';
import { ResponsiveLayout } from './_components/ResposiveLayout';

export const metadata = {
  title: 'Digital Money House',
  description: 'App de pagos',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='min-h-screen flex flex-col'>
        <SessionWrapper>
          <ContextProvider>
            <ReactQueryProvider>
              <ToastContainer />
              <Header />
              <div className='flex-1 pt-16 max-w-full overflow-hidden'>
                <ResponsiveLayout>
                  {children}
                </ResponsiveLayout>
              </div>
              <Footer />
            </ReactQueryProvider>
          </ContextProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
