import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "next-themes"
import { ReactQueryProvider } from './providers'
import { Playfair_Display } from 'next/font/google'
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'BEBL Constructions - Building Excellence',
  description: 'Professional construction services with quality craftsmanship',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ...other classes`}>
        <style>{`
          h1, h2, h3, h4, h5, h6, .font-playfair {
            font-family: var(--font-playfair), serif !important;
          }
        `}</style>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              {children}
              <Footer />
            </TooltipProvider>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 