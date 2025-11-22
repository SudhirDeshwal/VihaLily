import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import './globals.css';

export const metadata: Metadata = {
  title: 'Viha Lily Care Inc. - Professional Nursing Staffing Agency',
  description: 'Compassionate Staffing. Professional Care. Trusted healthcare staffing solutions for every care setting.',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Viha Lily Care Inc. - Professional Nursing Staffing Agency',
    description: 'Compassionate Staffing. Professional Care. Trusted healthcare staffing solutions for every care setting.',
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
        <ScrollReveal />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}



