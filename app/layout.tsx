'use client'
import { Content, Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ChakraProvider>
          <Navbar />

          {children}</ChakraProvider>
      </body>
    </html>
  );
}
