import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Viha Lily Care Inc. - Professional Nursing Staffing Agency',
  description: 'Compassionate Staffing. Professional Care. Trusted healthcare staffing solutions in Ontario.',
  icons: {
    icon: '/logo',
    shortcut: '/logo',
    apple: '/logo',
  },
  openGraph: {
    title: 'Viha Lily Care Inc. - Professional Nursing Staffing Agency',
    description: 'Compassionate Staffing. Professional Care. Trusted healthcare staffing solutions in Ontario.',
    images: ['/logo'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

