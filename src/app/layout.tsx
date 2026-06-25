import type { Metadata } from "next";
import "./globals.css";
import { requireAuth } from "@/lib/auth-server";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";
import { Inter } from "next/font/google";
import { cn } from "@/shared/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

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
      className={cn("h-screen", "antialiased", "font-sans", inter.variable)}
    >
      <body className="h-full flex flex-col">
        {children}
        <Toaster 
          theme="dark"
          closeButton
          richColors
          position="top-right"
          toastOptions={{
            classNames: {
              success: 'bg-success! text-success-foreground!',
              warning: 'bg-warning! text-warning-foreground!',
              error: 'bg-destructive! text-destructive-foreground!',
              info: 'bg-info! text-info-foreground!',
            }
          }}
        />

      </body>
    </html>
  );
}
