"use client";

// import { ClerkProvider } from '@clerk/nextjs';

import { ClerkProvider} from '@clerk/nextjs'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";


import { Analytics } from "@vercel/analytics/react";  


import Index from "@/components/faq";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <ClerkProvider>
          <Header />
          {children}
          <Analytics />
          <Footer />
          <ScrollToTop />
        </ClerkProvider>
      </body>
    </html>
  );
}

// import { Providers } from "./providers";
