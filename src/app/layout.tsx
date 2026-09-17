import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "CTBT | Arena Beach Tennis & Bar em Matão, SP",
  description: "A melhor arena de Beach Tennis de Matão. Quadras profissionais, aulas, locações e um bar pé na areia incrível.",
  keywords: ["Beach Tennis", "Matão", "CTBT", "Arena de Areia", "Bar", "Gastronomia", "Esportes"],
  openGraph: {
    title: "CTBT | Arena Beach Tennis & Bar",
    description: "Sua experiência pé na areia em Matão! Quadras, aulas e gastronomia artesanal.",
    type: "website",
    locale: "pt_BR",
  }
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
