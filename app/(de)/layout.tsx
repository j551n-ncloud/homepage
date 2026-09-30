import "../globals.css";
import { inter, bodyStyle, siteMetadata } from "@/lib/site";

export const metadata = siteMetadata("de");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body style={bodyStyle}>
        {children}
      </body>
    </html>
  );
}
