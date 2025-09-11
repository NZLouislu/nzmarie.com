import "./globals.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NZ Marie - Licensed Real Estate Consultant | Southern Star Realty",
  description:
    "Professional real estate services in New Zealand. Marie Nian offers expert property consultation, market analysis, and personalized service for buying and selling homes.",
  keywords:
    "real estate, New Zealand, property consultant, Southern Star Realty, Marie Nian, Wellington real estate, buy home, sell property",
  authors: [{ name: "Marie Nian" }],
  openGraph: {
    title: "NZ Marie - Licensed Real Estate Consultant",
    description:
      "Expert real estate services in New Zealand with personalized approach and market insights.",
    url: "https://nzmarie.com",
    siteName: "NZ Marie",
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NZ Marie - Licensed Real Estate Consultant",
    description:
      "Expert real estate services in New Zealand with personalized approach and market insights.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/img/m1.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="author" content="Marie Nian" />
        <meta charSet="UTF-8" />
      </head>
      <body className={poppins.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
