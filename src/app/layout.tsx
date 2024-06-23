import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./modules/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Layout Auditioner",
  description: "Keyboard layout auditioner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
