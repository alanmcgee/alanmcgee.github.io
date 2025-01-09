import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

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
          <header className="pointer-events-none relative z-50 flex flex-none flex-col">
            <div className="top-0 z-10 h-16 pt-6">
              <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                      <div className="relative flex gap-4">
                        <div className="flex flex-1">
                          <nav className="flex items-center justify-center gap-8">
                            <a href="/" className="pointer-events-auto hover:text-teal-500">Home</a>
                            <a href="/blog" className="pointer-events-auto hover:text-teal-500">Blog</a>
                            <a href="/publications" className="pointer-events-auto hover:text-teal-500">Publications</a>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
