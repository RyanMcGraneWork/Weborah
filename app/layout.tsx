import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Weborah',
    default: 'Weborah - Modern Web Agency',
  },
  description: 'Weborah is a cutting-edge web agency specializing in modern, scalable web applications. We create stunning digital experiences that drive results.',
  keywords: ['web agency', 'web development', 'next.js', 'react', 'typescript', 'modern design'],
  authors: [{ name: 'Weborah Team' }],
  creator: 'Weborah',
  publisher: 'Weborah',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },  metadataBase: new URL('https://weborah.com'),
  openGraph: {
    title: 'Weborah - Modern Web Agency',
    description: 'We create stunning digital experiences that drive results. Modern web development with cutting-edge technologies.',
    url: 'https://weborah.com',
    siteName: 'Weborah',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Weborah - Modern Web Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weborah - Modern Web Agency',
    description: 'We create stunning digital experiences that drive results.',
    images: ['/og-image.jpg'],
    creator: '@weborah_dev',
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
  },  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn(
        "min-h-screen bg-slate-950 font-sans antialiased",
        inter.variable
      )}>
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
