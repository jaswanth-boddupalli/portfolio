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
  metadataBase: new URL("https://jaswanth-boddupalli.vercel.app"),
  title: "Dr. Jaswanth Boddupalli, Ph.D. | Plant Metabolomics & In Silico Drug Discovery",
  description:
    "Official academic portfolio of Dr. Jaswanth Boddupalli, Postdoctoral Researcher at Indian Institute of Science (IISc), Bengaluru. Conferred Ph.D. in Biotechnology, University Gold Medalist. Bridging plant tissue culture and secondary metabolite elicitation with GC-MS metabolomics and computational AutoDock/RDKit virtual screening.",
  keywords: [
    "Jaswanth Boddupalli",
    "Boddupalli Krishna Jaswanth",
    "IISc Bengaluru",
    "Optics and Microfluidics Instrumentation",
    "Plant Metabolomics",
    "In Silico Drug Discovery",
    "AutoDock Vina",
    "RDKit",
    "PyMOL",
    "Tissue Culture",
    "Caralluma",
    "Bacopa monnieri",
    "Secondary Metabolite Elicitation",
    "GC-MS",
    "FT-IR",
    "University Gold Medalist",
  ],
  authors: [{ name: "Dr. Jaswanth Boddupalli", url: "https://github.com/jaswanth-boddupalli" }],
  creator: "Dr. Jaswanth Boddupalli",
  openGraph: {
    title: "Dr. Jaswanth Boddupalli, Ph.D. | Plant Metabolomics & In Silico Drug Discovery",
    description:
      "Postdoctoral Researcher at IISc Bengaluru (OMI Lab, Dept. IAP). University Gold Medalist. Bridging the Experimental Bench with Scientific Python & Computational Cheminformatics.",
    url: "https://jaswanth-boddupalli.vercel.app",
    siteName: "Dr. Jaswanth Boddupalli Portfolio",
    images: [
      {
        url: "/images/cover_banner.png",
        width: 1584,
        height: 396,
        alt: "Dr. Jaswanth Boddupalli Research Banner",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Jaswanth Boddupalli, Ph.D. | IISc Bengaluru Postdoc",
    description:
      "Bridging the Experimental Bench with Scientific Python & Computational Cheminformatics.",
    images: ["/images/cover_banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
        {children}
      </body>
    </html>
  );
}
