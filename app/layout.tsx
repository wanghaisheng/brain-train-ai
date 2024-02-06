import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ToasterProvider from '@/components/toaster-provider'
import ModalProvider from '@/components/modal-provider'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZenMelody",
  description:
    "SaaS app designed for generating music for study and meditation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
