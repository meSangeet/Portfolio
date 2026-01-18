import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sangeet Sharma - Full Stack Developer",
  description: "Portfolio of Sangeet Sharma - Full Stack Developer specializing in modern web technologies",
  keywords: "Sangeet Sharma, Full Stack Developer, Web Developer, React, Next.js, Node.js, TypeScript",
  authors: [{ name: "Sangeet Sharma" }],
  creator: "Sangeet Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sangeet.co",
    siteName: "Sangeet Sharma Portfolio",
    title: "Sangeet Sharma - Full Stack Developer",
    description: "Portfolio of Sangeet Sharma - Full Stack Developer specializing in modern web technologies",
    images: [
      {
        url: "https://sangeet.co/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sangeet Sharma Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sangeet Sharma - Full Stack Developer",
    description: "Portfolio of Sangeet Sharma - Full Stack Developer specializing in modern web technologies",
    creator: "@me_sangeet",
    images: ["https://sangeet.co/og-image.png"],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
