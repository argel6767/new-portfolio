import type { Metadata } from "next";
import {Heebo, Roboto} from "next/font/google";
import "./globals.css";
import {GlobalProvider} from "@/components/global-context";
import {PostHogProvider} from "@/components/posthogProvider";
import SEO from "@/data/seo";

const heebo = Heebo({
  variable: "--Heebo",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--roboto",
  subsets: ["latin"],
});

const seo = SEO.home;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
    keywords: seo.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"bg-white text-black"}>
      <body className={`${heebo.variable} ${roboto.variable} antialiased`}>
      <PostHogProvider>
      <GlobalProvider>
        {children}
      </GlobalProvider>
      </PostHogProvider>
      </body>
    </html>
  );
}
