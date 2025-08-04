import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProAuto Serwis - Profesjonalny Warsztat Samochodowy",
  description: "Ekspercki serwis i naprawa samochodów. Profesjonalni mechanicy, wysokiej jakości części, konkurencyjne ceny. Twój zaufany lokalny warsztat.",
  keywords: "naprawa samochodów, mechanik samochodowy, serwis hamulców, wymiana oleju, naprawa silnika, serwis skrzyni biegów, lokalny mechanik",
  authors: [{ name: "ProAuto Serwis" }],
  openGraph: {
    title: "ProAuto Serwis - Profesjonalny Warsztat Samochodowy",
    description: "Ekspercki serwis i naprawa samochodów. Profesjonalni mechanicy, wysokiej jakości części, konkurencyjne ceny.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
