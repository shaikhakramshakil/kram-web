import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KramScan | AI-Powered Security Scanning CLI",
  description: "Orchestrate headless browser crawling, run modular vulnerability plugins, and generate AI-driven security reports with KramScan.",
  keywords: ["security", "cli", "vulnerability-scanner", "ai", "pentesting", "automation"],
  authors: [{ name: "Akram Shaikh" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  );
}
