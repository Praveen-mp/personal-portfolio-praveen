import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Praveen Kumar M — AI Engineer, Backend & Distributed Systems",
  description:
    "Software Engineer specializing in backend systems, microservices, Kubernetes, and AI/LLM engineering with Azure OpenAI, AutoGen, and RAG workflows.",
  openGraph: {
    title: "Praveen Kumar M — AI Engineer, Backend & Distributed Systems",
    description:
      "Software Engineer specializing in backend systems, microservices, Kubernetes, and AI/LLM engineering.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
