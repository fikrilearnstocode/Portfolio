import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fikri Firstly — Data Scientist",
  description:
    "Portfolio of Fikri Firstly Arrasyid Hawe — Data Scientist specializing in NLP, Machine Learning, and Big Data.",
  keywords: ["data scientist", "NLP", "machine learning", "big data", "portfolio"],
  authors: [{ name: "Fikri Firstly Arrasyid Hawe" }],
  openGraph: {
    title: "Fikri Firstly — Data Scientist",
    description: "Data Scientist specializing in NLP, Machine Learning, and Big Data.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
