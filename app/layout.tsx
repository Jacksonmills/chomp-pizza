import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Chomp Pizza",
  description:
    "I make pizza that I think is worth your $5. Address: 1710 W. 18th St. (Inside the Pink Line Station)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
