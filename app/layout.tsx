import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kiddo World — SF Bay Area Party Characters",
  description:
    "Professional costumed character parties with music, games, dancing, and party favors — creating memories that last a lifetime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="min-h-screen bg-kw-cream font-sans text-kw-dark antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
