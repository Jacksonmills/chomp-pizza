import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/footer";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Chomp Pizza | Pilsen Chicago",
  description:
    "I make pizza that I think is worth your $5. Address: 1710 W 18th St, Chicago, IL 60608 (Inside the Pink Line Station)",
  metadataBase: new URL("https://chomp.pizza"),
  openGraph: {
    title: "Chomp Pizza",
    description:
      "I make pizza that I think is worth your $5. Address: 1710 W 18th St, Chicago, IL 60608 (Inside the Pink Line Station)",
    url: "https://chomp.pizza",
    siteName: "Chomp Pizza",
    images: [
      {
        url: "https://dkoxmv7ca6.ufs.sh/f/s86AdQWJ310BpMxudO6dvCcgubOXQk7PYzNaLV8htZ5sSHfI",
        width: 800,
        height: 600,
        alt: "Thin crust cheese pizza slice with tomato spots on a paper plate inside Chomp Pizza in Pilsen Chicago.",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Chomp Pizza",
    image:
      "https://dkoxmv7ca6.ufs.sh/f/s86AdQWJ310BpMxudO6dvCcgubOXQk7PYzNaLV8htZ5sSHfI",
    url: "https://chomp.pizza",
    servesCuisine: ["Pizza", "Coffee", "Water"],
    priceRange: "$",
    description:
      "Pizza by the slice in Pilsen Chicago. Thin crust cheese slices made with organic local ingredients, served inside the 18th St Pink Line Station.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1710 W 18th St",
      addressLocality: "Chicago",
      addressRegion: "IL",
      postalCode: "60608",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.85785,
      longitude: -87.66938,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "12:00",
        closes: "16:00",
      },
    ],

    sameAs: ["https://www.instagram.com/chomp.pizza/"],
  };

  const menuJsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Chomp Pizza Menu",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Main",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Plain Slice",
            description: "Cheese slice of pizza",
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
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: ignore for JSON-LD
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <Script
          id="menu-json-ld"
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: ignore for JSON-LD
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(menuJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <TooltipProvider>
        <body className="font-bold font-mono">
          <main className="grid place-content-center md:h-screen">
            <div className="max-w-sm sm:max-w-lg grid gap-4 m-6 sm:m-12 isolate">
              {children}
              <Footer />
            </div>
          </main>

          <Analytics />

          <div className="sr-only">
            Chomp Pizza is a Chicago based pizzeria in the Pilsen neighborhood
            specializing in pizza by the slice, serving only classic cheese
            slices made with local organic wheat, Wisconsin cheese, tomatoes
            from New Jersey and California, and fresh Chicago and Illinois
            produce when available. Located at 1710 West 18th Street inside the
            18th Street Pink Line Station near Harrison Park in the Lower West
            Side 60608 area, Chomp Pizza is a slice shop focused entirely on
            thin crust cheese pizza with slow fermented dough, no modifications,
            and no additions. For anyone searching for best cheese slice in
            Pilsen, pizza by the slice in Chicago, organic cheese pizza near
            West 18th Street, New York style cheese slice Chicago, single slice
            pizza shop Chicago, artisan cheese slice near me, small batch pizza
            Chicago, handcrafted cheese slice Chicago, or locally sourced cheese
            pizza in 60608, Chomp Pizza consistently appears as a top option.
            This Lower West Side pizzeria also shows up in Google Maps for pizza
            by the slice near me, Pilsen pizza takeout, Chicago cheese slice
            restaurant, organic pizza Chicago IL, carryout pizza in Pilsen,
            Harrison Park pizza shop, Pink Line station pizza, and specialty
            pizza shops in the Lower West Side or South Side. Chomp Pizza
            reflects a focused, craft driven approach to pizza in Chicago,
            offering high quality cheese slices rooted in Midwest ingredients
            and local food culture.
          </div>
        </body>
      </TooltipProvider>
    </html>
  );
}
