import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./themeProvider";
import Script from "next/script";
import SiteHeader from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajab Muzaffarov – Frontend Developer",
  description:
    "Personal website of Rajab Muzaffarov – a frontend developer specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Rajab",
    "Muzaffarov",
    "Rajab Muzaffarov",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Web Developer",
    "Tashkent",
    "Uzbekistan",
  ],
  authors: [{ name: "Rajab Muzaffarov", url: "https://muzaffarov.uz" }],
  creator: "Rajab Muzaffarov",
  openGraph: {
    title: "Rajab Muzaffarov – Frontend Developer",
    description:
      "Portfolio and blog of Rajab Muzaffarov, a web developer from Uzbekistan.",
    url: "https://muzaffarov.uz",
    siteName: "Rajab Muzaffarov",
    images: [
      {
        url: "https://muzaffarov.uz/og-image.jpg", // Create a good preview image
        width: 1200,
        height: 630,
        alt: "Rajab Muzaffarov Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajab Muzaffarov – Frontend Developer",
    description:
      "Explore the work and blog of Rajab Muzaffarov, frontend developer from Uzbekistan.",
    creator: "@mr_rajabb", // optional
    images: ["https://muzaffarov.uz/og-image.jpg"],
  },
  metadataBase: new URL("https://muzaffarov.uz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cmp.gatekeeperconsent.com/min.js"
          strategy="afterInteractive"
          data-cfasync="false"
        />

        <Script
          src="https://the.gatekeeperconsent.com/cmp.min.js"
          strategy="afterInteractive"
          data-cfasync="false"
        />

        <script async src="//www.ezojs.com/ezoic/sa.min.js"></script>
        <script>
          window.ezstandalone = window.ezstandalone || {}; ezstandalone.cmd =
          ezstandalone.cmd || [];
        </script>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Rajab Muzaffarov" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen mx-auto`}
      >
        <Providers>
          <SiteHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
