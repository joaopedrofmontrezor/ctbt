import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ctbt-six.vercel.app"),
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
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "CTBT | Centro de Treinamento de Beach Tennis em Matão",
    description:
      "Sua experiência pé na areia em Matão! Quadras profissionais, aulas, bar e gastronomia em um ambiente premium.",
    type: "website",
    locale: "pt_BR",
    siteName: "CTBT",
    url: "https://ctbt-six.vercel.app",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "CTBT - Centro de Treinamento de Beach Tennis",
  description:
    "Arena premium de Beach Tennis em Matão com 6 quadras profissionais de areia tratada, aulas para todos os níveis, locação, bar e gastronomia.",
  url: "https://ctbt-six.vercel.app",
  logo: "https://ctbt-six.vercel.app/images/logo.png",
  image: "https://ctbt-six.vercel.app/images/arena.png",
  telephone: "+55-16-99716-8587",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Antônio Gorgatti, 1807 - Imperador",
    addressLocality: "Matão",
    addressRegion: "SP",
    postalCode: "15990-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -21.6033,
    longitude: -48.3653,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  priceRange: "$$",
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Quadras de Areia Tratada",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Bar e Gastronomia Completa",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Iluminação Noturna Profissional",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Vestiários com Duchas",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Estacionamento",
      value: true,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
