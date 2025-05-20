import type { Metadata } from "next";
import {Heebo, Roboto} from "next/font/google";
import "./globals.css";
import {GlobalProvider} from "@/components/global-context";

const heebo = Heebo({
  variable: "--Heebo",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Argel Hernandez Amaya's Portfolio",
    keywords: ["React", "Next.js", "Argel Hernandez Amaya", "Argel Hernandez", "Argel", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"bg-white text-black"}>
      <body className={`${heebo.variable} ${roboto.variable} antialiased`}>
      <GlobalProvider>
        {children}
      </GlobalProvider>
      </body>
    </html>
  );
}
