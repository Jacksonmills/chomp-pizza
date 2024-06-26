import GridPattern from "@/components/GridPattern";
import { cn } from "@/lib/utils";
import {
  Turtle
} from "lucide-react"

export default function Home() {
  return (
    <main className="grid place-content-center h-screen">
      <div className="max-w-lg grid gap-4">
        <h1 className={cn("text-4xl")}>Chomp Pizza</h1>
        <p>
          Hey, thanks for taking the time to come to this website about my pizza. I spend most of my time thinking about how to make better pizza, except for those moments when actual life hits you in the face, and usually snaps me out of it.
        </p>
        <p>
        As I’m wrote this, well, I guess I experienced one of those moments.
        </p>
        <p>
        Regardless of my intrusive thoughts, I’d like to make you a pizza sometime. So, if one of the pictures catches your eye, or maybe even you want to learn from someone with a little bit of experience (while we make pizza of course), send me an email. It’d be cool to hear from you.
        </p>
        <span>
<Turtle size={64} />
        </span>
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
