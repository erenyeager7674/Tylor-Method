import Image from "next/image";
import { ArrowRight, CirclePlay } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const fans = [
  {
    name: "Sarah",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=80",
  },
  {
    name: "Emma",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&q=80",
  },
  {
    name: "Aisha",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=96&q=80",
  },
  {
    name: "Neha",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=96&q=80",
  },
];

const heroPhoto =
  "/heroimage.jpg";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <Image
        src="/doodles/sparkle-6.png"
        width={76}
        height={76}
        alt=""
        className="pointer-events-none absolute left-2 top-6 -z-10 hidden opacity-45 md:block"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:min-h-[490px] lg:grid-cols-[0.98fr_1.02fr]">
        <div className="relative max-w-2xl">
          <Image
            src="/doodles/flower-3.png"
            width={104}
            height={178}
            alt=""
            className="pointer-events-none absolute -left-10 top-40 hidden h-44 w-auto -rotate-6 opacity-75 md:block lg:-left-27 lg:top-44"
          />
          <Image
            src="/doodles/sparkle-1.png"
            width={48}
            height={48}
            alt=""
            className="pointer-events-none absolute -left-5 top-5 hidden rotate-12 opacity-70 sm:block"
          />

          <p className="mb-3 font-script text-lg text-primary sm:text-xl">
            hey, I&apos;m Tylor
          </p>

          <h1 className="max-w-[700px] text-4xl leading-[0.98] tracking-normal text-foreground sm:text-5xl lg:text-6xl">
            Get Your Kink on a{" "}
            <span className="font-script text-primary">Affordable</span> Price
          </h1>

          <p className="mt-5 max-w-xl font-sans text-sm font-medium leading-7 text-foreground/75 sm:text-base">
            I sell the content you crave — exclusive, uncensored, and made just
            for you. Browse, buy, and enjoy on your terms.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button className="h-12 rounded-xl px-7 font-sans text-sm  shadow-lg shadow-primary/20">
              Explore Content
              <ArrowRight className="size-4" />
            </Button>

            <Button
              variant="outline"
              className="h-12 rounded-xl border-foreground/30 bg-background/70 px-6 font-sans text-sm "
            >
              Get Free Licks
              <CirclePlay className="size-4" />
            </Button>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <AvatarGroup>
              {fans.map((fan) => (
                <Avatar
                  key={fan.name}
                  size="lg"
                  className="size-10 border-2 border-background"
                >
                  <AvatarImage src={fan.image} alt={fan.name} />
                  <AvatarFallback>{fan.name.slice(0, 1)}</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>

            <p className="max-w-xs font-sans text-sm  leading-6 text-foreground/80">
              Join 40,000+ fans buying & enjoying exclusive content
            </p>
          </div>
        </div>

        <div className="relative mx-auto min-h-[380px] w-full max-w-[560px] sm:min-h-[460px] lg:min-h-[510px]">
          <Image
            src="/doodles/sparkle-3.png"
            width={54}
            height={54}
            alt=""
            className="pointer-events-none absolute left-3 top-28 z-30 hidden opacity-80 sm:block"
          />
          <Image
            src="/doodles/sparkle-8.png"
            width={46}
            height={46}
            alt=""
            className="pointer-events-none absolute -right-10 top-2 z-50 -rotate-12 opacity-80"
          />
          <Image
            src="/doodles/sparkle-4.png"
            width={42}
            height={42}
            alt=""
            className="pointer-events-none absolute right-2 top-24 z-50 rotate-12 opacity-75"
          />
          <Image
            src="/doodles/flower-1.png"
            width={78}
            height={92}
            alt=""
            className="pointer-events-none absolute -right-12 bottom-10 z-50 hidden rotate-12 opacity-80 sm:block"
          />
          <Image
            src="/doodles/sparkle-5.png"
            width={38}
            height={38}
            alt=""
            className="pointer-events-none absolute right-24 bottom-12 z-50 hidden -rotate-6 opacity-70 sm:block"
          />

          <div className="absolute inset-x-8 top-8 z-10 h-[310px] rounded-[40%] bg-[#d9c6e9]/55 blur-2xl sm:inset-x-12 sm:h-[380px]" />

          <Image
            src="/doodles/herocard.svg"
            width={640}
            height={688}
            priority
            alt=""
            className="relative z-20 mx-auto h-auto w-[80%] drop-shadow-[0_18px_18px_rgba(94,59,66,0.14)] sm:w-[84%]"
          />

          <div className="absolute z-30 h-99 w-88  rotate-6 top-17 left-31 rounded-xl overflow-hidden">
            <Image
              src={heroPhoto}
              fill
              alt="Tylor smiling in a soft studio portrait"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="absolute right-4 top-[48%] z-40 w-[31%] min-w-[126px] rotate-7 sm:right-8 sm:top-[46%] sm:w-[29%] lg:top-[60%]">
            <Image
              src="/doodles/papers-with-clip.svg"
              width={220}
              height={273}
              alt=""
              className="h-auto w-full drop-shadow-[0_16px_16px_rgba(94,59,66,0.18)]"
            />
            <p className="absolute left-[19%] top-[24%] w-[68%] -rotate-2 font-script text-[clamp(0.72rem,1.45vw,0.98rem)] leading-[1.42] text-foreground/75">
              Started with 12 followers. Now selling to 40,000+ happy fans!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
