import type { Metadata } from "next";
import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Adebolaji Adeyeye – Content Creator Portfolio",
  description:
    "Personal portfolio website for Adebolaji Adeyeye, a content creator specializing in lifestyle and beauty content.",
  icons: {
    // standard favicon sizes
    icon: [
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      { url: "/favicon_io/favicon.ico", sizes: "any" },
    ],
    // “shortcut” rel for legacy browsers
    shortcut: "/favicon_io/favicon.ico",
    // Apple touch icon
    apple: "/favicon_io/apple-touch-icon.png",
    // other rels (PWA manifest, Android icons)
    other: [
      { rel: "manifest", url: "/favicon_io/site.webmanifest" },
      {
        rel: "android-chrome-192x192",
        url: "/favicon_io/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon_io/android-chrome-512x512.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
