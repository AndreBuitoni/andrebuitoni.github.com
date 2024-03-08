import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "André Buitoni - Portfolio",
  description: "Portfolio do André Buitoni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className + ' p-8 space-y-5'}>
        <Header>André Buitoni Portfolio</Header>
        {children}
      </body>
    </html>
  );
}
