import type { Metadata } from "next";
import { Fredoka, Poppins } from "next/font/google";
import { StructureToggle } from "@/app/components/StructureToggle";
import { profile } from "@/lib/content";
import "./globals.css";

const display = Fredoka({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display"
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hanifah-art.vercel.app"),
  title: {
    default: `${profile.name} - Structured Graphic Designer`,
    template: `%s - ${profile.name}`
  },
  description: profile.role,
  openGraph: {
    title: `${profile.name} - Portfolio 2026`,
    description: profile.role,
    type: "website",
    images: [
      {
        url: "/portfolio/2026/001.png",
        width: 1400,
        height: 789,
        alt: "Hanifah Fathiarahma Portfolio 2026 cover"
      }
    ]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <StructureToggle />
        {children}
      </body>
    </html>
  );
}
