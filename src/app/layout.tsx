import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/comp/footer";
import Header from "@/comp/Header";

export const metadata: Metadata = {
  title: "SpaceX",
  description: "Aerospace",
};

interface RootLayoutProp {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProp>) {
  return (
    <html lang="en">
      <body className="overscroll-none">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
