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
  metadataBase: new URL("https://yoga-febriatala.vercel.app"),
  title: "Yoga Febriatala | Software Engineer & Web Developer",
  description:
    "Portfolio of Yoga Febriatala - Software Engineer & Web Developer based in Kabupaten Bogor, Indonesia. Specializing in Scalable Systems, Micro-frontend, High-Performance APIs, and Modern Web Ecosystems.",
  keywords: [
    "Yoga Febriatala",
    "Software Engineer",
    "Web Developer",
    "Kabupaten Bogor",
    "Next.js",
    "React",
    "Rust",
    "Microfrontend",
    "Telkom Indonesia",
    "Full Stack Developer"
  ],
  authors: [{ name: "Yoga Febriatala", url: "https://yoga-febriatala.vercel.app" }],
  creator: "Yoga Febriatala",
  icons: {
    icon: "/icon/favicon.ico",
  },
  openGraph: {
    title: "Yoga Febriatala | Software Engineer Portfolio",
    description:
      "Software Engineer & Web Developer from Kabupaten Bogor. Experienced in Micro-frontends, Rust Axum, Next.js, and High-Performance Web Architectures.",
    url: "https://yoga-febriatala.vercel.app",
    siteName: "Yoga Febriatala Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Yoga Febriatala",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Febriatala | Software Engineer Portfolio",
    description: "Software Engineer & Web Developer from Kabupaten Bogor, Indonesia.",
    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased bg-[#070a12] text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
