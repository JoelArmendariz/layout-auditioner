"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./modules/header";
import { ChakraBaseProvider, ColorModeScript } from "@chakra-ui/react";

import { theme } from "./themes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Layout Auditioner</title>
      <body className={inter.className}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraBaseProvider theme={theme}>
          <Header />
          {children}
        </ChakraBaseProvider>
      </body>
    </html>
  );
}
