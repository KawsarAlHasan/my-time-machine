import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * FONTSPRING DEMO - Hyperspace Race Extended
 * Heading / display font — Hero h1-এ ব্যবহার হবে
 */
const hyperspaceRace = localFont({
  src: [
    {
      path: "./fonts/hyperspace-race-font-family/Fontspring-DEMO-hyperspacerace-extendedlight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/hyperspace-race-font-family/Fontspring-DEMO-hyperspacerace-extended.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/hyperspace-race-font-family/Fontspring-DEMO-hyperspacerace-extendedbold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-hyperspace",
  display: "swap",
});

/**
 * General Sans — Body copy / paragraph font
 * Source: GeneralSans_Complete/Fonts/WEB/fonts/
 */
const generalSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Time Machine",
  description:
    "My Time Machine helps you see where your current choices may be leading — so you can make better decisions today.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${hyperspaceRace.variable} ${generalSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
