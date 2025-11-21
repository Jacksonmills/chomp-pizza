import { SiInstagram as Instagram } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PizzaGrid } from "@/components/PizzaGrid";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <main className="grid place-content-center md:h-screen">
      <div className="max-w-lg grid gap-4 m-6 sm:m-12 isolate">
        <h1 className=" sr-only">Chomp Pizza | Pilsen Chicago</h1>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Button
              className="h-auto bg-transparent hover:bg-transparent w-fit p-0"
              asChild
            >
              <Link href="/menu">
                <PizzaGrid />
                <span className="sr-only">View Menu</span>
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>View Menu</p>
          </TooltipContent>
        </Tooltip>

        <div className="aspect-square relative size-full bg-black md:w-[32rem]">
          <Image
            src={`https://dkoxmv7ca6.ufs.sh/f/s86AdQWJ310BpMxudO6dvCcgubOXQk7PYzNaLV8htZ5sSHfI`}
            alt="Thin crust cheese pizza slice with tomato spots on a paper plate inside Chomp Pizza in Pilsen Chicago."
            width={512}
            height={512}
            className="size-full object-cover"
            fetchPriority="high"
            loading="lazy"
          />
        </div>

        <p>
          I make pizza that I think is worth your $5.{" "}
          <Link href="/menu" className="hover:no-underline underline">
            Menu
          </Link>
        </p>

        <div className="flex  justify-between">
          <span className="flex gap-2 items-center  text-black">
            <span className="sr-only sm:not-sr-only">Address:</span>{" "}
            <a
              href="https://maps.app.goo.gl/fqH2ci68i8hoTyWP9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:no-underline underline"
            >
              1710 W. 18th St.{" "}
              <span className="sr-only">
                Chicago, IL 60608, opens in a new tab
              </span>
            </a>
          </span>
          <div className="flex">
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  asChild
                  className="size-7 [&>svg]:size-5"
                >
                  <a
                    href="https://www.instagram.com/chomp.pizza/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram aria-hidden />
                    <span className="sr-only">
                      @chomp.pizza Instagram page, opens in a new tab
                    </span>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Instagram</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  asChild
                  className="size-7 [&>svg]:size-5"
                >
                  <a href="mailto:travis@chomp.pizza">
                    <Mail aria-hidden />
                    <span className="sr-only">
                      Email Chomp Pizza, opens your email client
                    </span>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Email</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </main>
  );
}
