import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shift - POS for Merchants",
  description:
    "Innovative POS for merchants: lower fees, higher margins, loyal customers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script async src="https://tally.so/widgets/embed.js"></script>
      <body className={overpass.className}>{children}</body>
    </html>
  );
}
