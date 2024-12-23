import type { Metadata } from "next";
import { Geist, Inter, Roboto} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"], variable: "--font_inter" });
const roboto = Roboto({ subsets: ["latin"], variable: "--font_roboto", weight: ["100","300", "400", "500", "700"] });


export const metadata: Metadata = {
  title: "$NewYears",
  description: "A new year, a new you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${roboto.variable} $${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
