import React from "react";
import localFont from "next/font/local";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NUZII",
  description: "Elevate Your Everyday Style with NUZII",
};

import { Oswald, Inter } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
