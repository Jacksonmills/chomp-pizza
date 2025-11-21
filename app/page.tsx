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
    <>
      <h1 className=" sr-only">Chomp Pizza | Pilsen Chicago</h1>
      <div className="flex justify-between items-end">
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <Button
              className="h-auto bg-transparent hover:bg-transparent p-0 w-fit"
              asChild
            >
              <Link href="/menu">
                <div className="size-36">
                  <PizzaGrid />
                </div>
                <span className="sr-only">View Menu</span>
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>View Menu</p>
          </TooltipContent>
        </Tooltip>

        <Link href="/menu" className="hover:no-underline underline">
          Menu
        </Link>
      </div>
      <div className="aspect-square relative size-full bg-black sm:w-[32rem]">
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

      <p>I make pizza that I think is worth your $5.</p>
    </>
  );
}
