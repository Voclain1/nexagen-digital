import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Footer, Header } from "@/components/site-shell";
import "./globals.css";
import "./overrides.css";
import "./seo.css";

const manrope = Manrope({ variable: "--font-body", subsets: ["latin"] });
const space = Space_Grotesk({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = { metadataBase: new URL("https://nexagen.digital"), title: { default: "Nexagen — Digital products built for what’s next", template: "%s — Nexagen" }, description: "Nexagen is a digital product agency building high-performance websites, SaaS platforms, AI automation and growth systems.", openGraph: { title: "Nexagen — Digital products built for what’s next", description: "Strategy, design and engineering for ambitious businesses.", url: "https://nexagen.digital", siteName: "Nexagen", type: "website" }, robots: { index: true, follow: true } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${manrope.variable} ${space.variable}`}><Header /><main>{children}</main><Footer /></body></html>; }
