import GridPattern from "@/components/GridPattern";
import Image from "next/image";
import {
  Instagram,
  Mail
} from "lucide-react"
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="grid place-content-center md:h-screen">
      <div className="max-w-lg grid gap-4 m-6 sm:m-12">
        <h1 className="text-4xl text-center mb-12 skew-x-12 skew-y-12">Chomp Pizza</h1>
        <p>
          Hey, thanks for taking the time to come to this website about my pizza. I spend most of my time thinking about how to make better pizza, except for those moments when actual life hits you in the face, and usually snaps me out of it.
        </p>
        <p>
        As I’m wrote this, well, I guess I experienced one of those moments.
        </p>
        <p>
        Regardless of my intrusive thoughts, I’d like to make you a pizza sometime. So, if one of the pictures catches your eye, or maybe even you want to learn from someone with a little bit of experience (while we make pizza of course), send me an email. It’d be cool to hear from you.
        </p>
        <div className="flex justify-between">
        <span className="flex gap-2 items-center">
          <span className="font-bold">-</span>
          <span className="w-16 h-auto">
            <Image src={`/chomp.svg`} alt="Turtle doodle" width={100} height={100} className="size-full object-contain" />
          </span>
        </span>
        <div className="flex gap-2">
          <Button size="icon" variant="ghost" asChild>
            <a href="https://www.instagram.com/chomp.pizza/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <a href="mailto:travis@chomp.pizza"><Mail /></a>
          </Button>
        </div>
        </div>
      </div>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
      />
    </main>
  );
}
