import type { Metadata } from "next";
import "./globals.css";
import { requireAuth } from "@/lib/auth-server";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Paar",
  description: "Two souls, one place.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`h-screen antialiased`}
    >
      <body className="h-full flex flex-col">
        {children}
        <Toaster 
          position="top-right"
          richColors
        />

      </body>
    </html>
  );
}
