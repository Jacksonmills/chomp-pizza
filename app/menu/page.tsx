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
    </>
  );
}
