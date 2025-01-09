import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Veena Vasudevan",
  description: "Educational ethnographer and qualitative researcher",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${geist.className} flex h-full flex-col`}>
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100" />
          </div>
        </div>
        <div className="relative">
          <header className="relative z-50 flex flex-none flex-col items-center">
            <div className="w-full border-b border-zinc-100">
              <div className="mx-auto max-w-7xl">
                <div className="p-4 text-center mt-4">
                  <a href="/" className="text-3xl tracking-widest uppercase font-extrabold">
                    Veena Vasudevan
                  </a>
                </div>
                <Navigation />
              </div>
            </div>
          </header>
          <main className="flex-auto">{children}</main>
        </div>
      </body>
    </html>
  )
}
