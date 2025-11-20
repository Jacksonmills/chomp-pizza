import { Instagram, Mail } from "lucide-react";
import Image from "next/image";
import { PizzaGrid } from "@/components/PizzaGrid";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="grid place-content-center md:h-screen font-bold font-mono">
      <div className="max-w-lg grid gap-4 m-6 sm:m-12 isolate">
        <h1 className=" sr-only">Chomp Pizza</h1>

        <PizzaGrid />

        <div className="aspect-square relative size-full bg-black md:w-[32rem]">
          <Image
            src={`https://dkoxmv7ca6.ufs.sh/f/s86AdQWJ310BpMxudO6dvCcgubOXQk7PYzNaLV8htZ5sSHfI`}
            alt="A very good slice of pizza."
            width={800}
            height={600}
            className="size-full object-cover"
          />
        </div>

        <p>I make pizza that I think is worth your $5.</p>

        <div className="flex  justify-between">
          <span className="flex gap-2 items-center  text-black">
            <span className="sr-only sm:not-sr-only">Address:</span>{" "}
            <a
              href="https://maps.app.goo.gl/fqH2ci68i8hoTyWP9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              1710 W. 18th St.
            </a>
          </span>
          <div className="flex">
            <Button
              size="icon"
              variant="ghost"
              asChild
              className="rounded-none size-7 [&>svg]:size-5"
            >
              <a
                href="https://www.instagram.com/chomp.pizza/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              asChild
              className="rounded-none size-7 [&>svg]:size-5"
            >
              <a href="mailto:travis@chomp.pizza">
                <Mail />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
