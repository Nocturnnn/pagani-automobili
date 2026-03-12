import "./globals.css";
import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Pagani Automobili — Huayra R",
  description: "Cinematic 3D showcase inspired by Pagani Automobili.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${orbitron.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
