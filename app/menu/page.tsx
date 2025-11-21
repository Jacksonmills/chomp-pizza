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
        <h1 className=" sr-only">Menu | Chomp Pizza | Pilsen Chicago</h1>

        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Button
              className="h-auto bg-transparent hover:bg-transparent w-fit p-0"
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
      </div>
    </main>
  );
}
