import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Viveka Kannan | Full Stack Developer',
    template: '%s | Viveka Kannan',
  },
  description:
    'Full Stack Developer with 7+ years of experience building enterprise-grade web applications. Expertise in Java, Spring Boot, Angular, React, and cloud technologies.',
  keywords: [
    'Full Stack Developer',
    'Java Developer',
    'Spring Boot',
    'Angular',
    'React',
    'TypeScript',
    'Microservices',
    'Cloud',
    'AWS',
    'DevOps',
    'Enterprise Applications',
  ],
  authors: [{ name: 'Viveka Kannan' }],
  creator: 'Viveka Kannan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vivekakannan.dev',
    title: 'Viveka Kannan | Full Stack Developer',
    description:
      'Full Stack Developer with 7+ years of experience building enterprise-grade web applications.',
    siteName: 'Viveka Kannan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Viveka Kannan | Full Stack Developer',
    description:
      'Full Stack Developer with 7+ years of experience building enterprise-grade web applications.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-mono bg-dark-950 text-dark-100 min-h-screen flex flex-col antialiased`}
      >
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
