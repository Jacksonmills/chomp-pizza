import { SiInstagram as Instagram } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between">
        <span className="flex items-center gap-2 text-black">
          <span className="sr-only sm:not-sr-only">Address:</span>{" "}
          <a
            href="https://maps.app.goo.gl/fqH2ci68i8hoTyWP9"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            1710 W. 18th St.{" "}
            <span className="sr-only">
              Chicago, IL 60608, opens in a new tab
            </span>
          </a>
        </span>
        <div className="flex">
          <Tooltip>
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
                  <Instagram aria-hidden className="size-7" />
                  <span className="sr-only">
                    @chomp.pizza Instagram page, opens in a new tab
                  </span>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent align="end">
              <p>Instagram</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                asChild
                className="size-7 [&>svg]:size-5"
              >
                <a href="mailto:travis@chomp.pizza">
                  <Mail aria-hidden className="size-7" />
                  <span className="sr-only">
                    Email Chomp Pizza, opens your email client
                  </span>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent align="end">
              <p>Email</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
}
