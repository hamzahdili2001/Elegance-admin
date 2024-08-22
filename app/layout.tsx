import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

import { ToastProvider } from "@/providers/toast-provider";
import { ModalProvider } from "@/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecom Admin Dashboard",
  description: "Ecom Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
        elements: {
          footer: "hidden",
        },
      }}>
      <html lang="en">
        <body className={inter.className}>
          <ToastProvider/>
          <ModalProvider />
          {children}
        </body>

      </html>
    </ClerkProvider>
  );
}
