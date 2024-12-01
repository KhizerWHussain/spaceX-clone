import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

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
      <body>{children}</body>
    </html>
  );
}
