import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Conversure - #1 AI WhatsApp CRM for UAE Real Estate Agencies",
  description:
    "Automate your real estate leads with AI. Sync WhatsApp with Bitrix24, manage agents, and close deals faster. Start your 14-day free trial.",
  keywords: [
    "WhatsApp CRM",
    "UAE Real Estate",
    "Bitrix24 Integration",
    "AI Automation",
    "Real Estate CRM",
    "WhatsApp Business API",
    "Lead Management",
    "Agent Management",
    "Dubai Real Estate",
    "Property Management Software",
  ],
  authors: [{ name: "Conversure" }],
  creator: "Conversure",
  publisher: "Conversure",
  metadataBase: new URL("https://conversure.ae"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://conversure.ae",
    title: "Conversure - #1 AI WhatsApp CRM for UAE Real Estate Agencies",
    description:
      "Automate your real estate leads with AI. Sync WhatsApp with Bitrix24, manage agents, and close deals faster. Start your 14-day free trial.",
    siteName: "Conversure",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Conversure - AI WhatsApp CRM for UAE Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversure - #1 AI WhatsApp CRM for UAE Real Estate Agencies",
    description:
      "Automate your real estate leads with AI. Sync WhatsApp with Bitrix24, manage agents, and close deals faster.",
    images: ["/og-image.png"],
    creator: "@conversure",
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
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
