import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/primaryHeader";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "LiftMe.pk - Redefining Accessibility at Home",
  description:
    "Premium home lifts for aging, mobility-limited, and differently-abled individuals. Bringing freedom to your home, one lift at a time.",
  keywords: "home lifts, accessibility, mobility, Pakistan, elderly care, wheelchair access",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
