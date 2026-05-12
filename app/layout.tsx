// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: "Startup Kare",
  description: "India's Premier Startup Consultancy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* suppressHydrationWarning hamesha <html> tag par hona chahiye */
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="antialiased bg-white dark:bg-[#02040A] transition-colors duration-500">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}