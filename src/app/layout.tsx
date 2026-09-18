import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ctbt.com.br"),
  title: "CTBT | Centro de Treinamento de Beach Tennis em Matão",
  description:
    "Arena premium de Beach Tennis em Matão com quadras profissionais, aulas, locação, bar e gastronomia para viver experiências esportivas e sociais.",
  keywords: [
    "Beach Tennis Matão",
    "CTBT",
    "Arena de Beach Tennis",
    "Quadras em Matão",
    "Aulas de Beach Tennis",
    "Bar e Gastronomia Matão",
    "Esporte e lazer Matão",
  ],
  applicationName: "CTBT",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "CTBT | Centro de Treinamento de Beach Tennis em Matão",
    description:
      "Sua experiência pé na areia em Matão! Quadras profissionais, aulas, bar e gastronomia em um ambiente premium.",
    type: "website",
    locale: "pt_BR",
    siteName: "CTBT",
    url: "https://ctbt.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "CTBT | Beach Tennis em Matão",
    description:
      "Quadras, aulas, locação e bar em um ambiente premium para esporte e lazer.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={outfit.variable}>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
