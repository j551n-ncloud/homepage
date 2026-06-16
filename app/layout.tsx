import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Johannes Nguyen",
  description: "IT Technician & Homelab Enthusiast. Apprentice IT Specialist at DKFZ.",
  metadataBase: new URL("https://j551n.com"),
  openGraph: {
    title: "Johannes Nguyen",
    description: "IT Technician & Homelab Enthusiast. Apprentice IT Specialist at DKFZ.",
    url: "https://j551n.com",
    siteName: "Johannes Nguyen",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Johannes Nguyen" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johannes Nguyen",
    description: "IT Technician & Homelab Enthusiast. Apprentice IT Specialist at DKFZ.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ fontFamily: "var(--font-inter), 'Helvetica Neue', Helvetica, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
