import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import { BASE_URL } from "@/lib/utils";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shift - POS for Merchants",
  description:
    "Innovative POS for merchants: lower fees, higher margins, loyal customers",
  openGraph: {
    title: "Shift - POS for Merchants",
    description:
      "Innovative POS for merchants: lower fees, higher margins, loyal customers",
    images: [
      {
        url: `${BASE_URL}/images/preview.png`,
        width: 1200,
        height: 630,
        alt: "Shift - POS for Merchants",
      },
    ],
  },
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
