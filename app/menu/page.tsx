import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PizzaGrid } from "@/components/PizzaGrid";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Menu | Chomp Pizza | Pilsen Chicago",
  description:
    "Menu for Chomp Pizza — plain cheese slice $5.00, plain coffee $3.00, sparkling water $1.50. No toppings or cash accepted.",
  openGraph: {
    title: "Menu | Chomp Pizza",
    description:
      "Plain cheese slice $5.00 — Chomp Pizza. Located at 1710 W 18th St, Pilsen, Chicago.",
    url: "https://chomp.pizza/menu",
    images: [
      {
        url: "https://dkoxmv7ca6.ufs.sh/f/s86AdQWJ310BpMxudO6dvCcgubOXQk7PYzNaLV8htZ5sSHfI",
        alt: "Thin crust cheese pizza slice on a paper plate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu | Chomp Pizza",
    description:
      "Plain cheese slice $5.00 — Chomp Pizza. Located at 1710 W 18th St, Pilsen, Chicago.",
    images: [
      "https://dkoxmv7ca6.ufs.sh/f/s86AdQWJ310BpMxudO6dvCcgubOXQk7PYzNaLV8htZ5sSHfI",
    ],
  },
  alternates: {
    canonical: "https://chomp.pizza/menu",
  },
};

export default function Home() {
  const menuJsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Chomp Pizza Menu",
    url: "https://chomp.pizza/menu",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Main",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Plain Slice",
            description: "Thin crust cheese slice",
            offers: { "@type": "Offer", price: "5.00", priceCurrency: "USD" },
          },
          {
            "@type": "MenuItem",
            name: "Plain Coffee",
            offers: { "@type": "Offer", price: "3.00", priceCurrency: "USD" },
          },
          {
            "@type": "MenuItem",
            name: "Sparkling Water",
            offers: { "@type": "Offer", price: "1.50", priceCurrency: "USD" },
          },
        ],
      },
    ],
  };

  return (
    <>
      <h1 className=" sr-only">Menu | Chomp Pizza | Pilsen Chicago</h1>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button
            className="h-auto bg-transparent hover:bg-transparent p-0"
            asChild
          >
            <Link href="/">
              <PizzaGrid />
              <span className="sr-only">Home</span>
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Home</p>
        </TooltipContent>
      </Tooltip>
      <div className="text-2xl">
        <div className="flex justify-between sm:justify-normal">
          <h2>PLAIN SLICE</h2>
          <div>
            <span className="hidden sm:inline">.................</span>$5.00
          </div>
        </div>
        <div className="flex justify-between sm:justify-normal">
          <h2>PLAIN COFFEE</h2>
          <div>
            <span className="hidden sm:inline">................</span>$3.00
          </div>
        </div>
        <div className="flex justify-between sm:justify-normal">
          <h2>SPARKLING WATER</h2>
          <div>
            <span className="hidden sm:inline">.............</span>$1.50
          </div>
        </div>
      </div>
      <p>NO CASH / NO TOPPINGS / NO CREAM / NO SUGAR</p>

      <Script
        id="menu-json-ld"
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is safe here
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(menuJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
