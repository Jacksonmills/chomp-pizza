import Image from "next/image";
import { Checkerboard } from "@/components/checkerboard";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Chomp Pizza | Pilsen Chicago</h1>
      <div className="size-36">
        <Checkerboard />
      </div>
      <div className="relative aspect-square size-full bg-black sm:w-lg">
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
