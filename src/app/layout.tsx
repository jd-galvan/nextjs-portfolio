import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/shared/Footer/Footer"
import { Header } from "@/components/shared/Header/Header"
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "José Daniel - Portfolio",
  description: "Portfolio of projects with Python and Javascript",
};

interface PageProps {
  children: React.ReactNode;
  projectsList: React.ReactNode;
}

export default function RootLayout(props: PageProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {props.children}
        <Footer />
      </body>
    </html>
  );
}
