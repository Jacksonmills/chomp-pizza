import Image from "next/image";
import { Checkerboard } from "@/components/checkerboard";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Chomp Pizza</h1>
      <div className="size-36">
        <Checkerboard />
      </div>
      <div className="size-full bg-black sm:w-lg" data-nosnippet>
        <Image
          src={`https://dkoxmv7ca6.ufs.sh/f/s86AdQWJ310B82ANlsHfp0yHVclGQLBU3RSJ4vnw7iabITz2`}
          alt="Thin crust cheese pizza slice with tomato spots on a paper plate inside Chomp Pizza in Pilsen Chicago."
          width={512}
          height={512}
          fetchPriority="high"
          loading="eager"
          sizes={"(max-width: 768px) 100vw, 512px"}
        />
      </div>

      <p>I make pizza that I think is worth your $5.</p>
    </>
  );
}
