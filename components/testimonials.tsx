"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { RoughNotation } from "react-rough-notation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Jessica M.",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=96&q=80",
    role: "Content Buyer",
    rating: 5,
    testimonial:
      "Taylor's content completely changed the game for me. The quality is insane and she delivers exactly what she promises. Within a week I was hooked — absolute pro.",
    sparkle_image: "/doodles/sparkle-2.png",
  },
  {
    name: "Amber R.",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=96&q=80",
    role: "Loyal Fan",
    rating: 5,
    testimonial:
      "Honestly, Taylor is the best seller out there — no exaggeration. Her content is premium, her delivery is fast, and she knows exactly what buyers want. Worth every penny.",
    sparkle_image: "/doodles/sparkle-4.png",
  },
  {
    name: "Priya K.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&q=80",
    role: "Repeat Buyer",
    rating: 5,
    testimonial:
      "I keep coming back because the content just hits different. Taylor is an absolute expert at what she sells — exclusive, high quality, and always fresh. Zero regrets.",
    sparkle_image: "/doodles/sparkle-6.png",
  },
  {
    name: "Natalie B.",
    avatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=96&q=80",
    role: "VIP Buyer",
    rating: 5,
    testimonial:
      "Taylor is the best content seller in the game — her collections are game-changers and she always over-delivers. Top girl, full stop.",
    sparkle_image: "/doodles/sparkle-8.png",
  },
  {
    name: "Sofia L.",
    avatar:
      "https://images.unsplash.com/photo-1502767089025-6572583495f9?auto=format&fit=crop&w=96&q=80",
    role: "Content Collector",
    rating: 5,
    testimonial:
      "Buying from Taylor was the best decision I made this year. She knows exactly what her buyers want and the content speaks for itself. Highly recommend to anyone on the fence.",
    sparkle_image: "/doodles/sparkle-1.png",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full px-6 py-16 overflow-hidden">
      {/* Background doodle */}
      <div className="pointer-events-none absolute right-0 top-10 opacity-40">
        <Image
          src="/doodles/flower-2.png"
          alt=""
          width={110}
          height={160}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-script text-primary text-xl mb-2">
            don&apos;t take my word for it
          </p>
          <RoughNotation type="underline" show color="var(--primary)">
            <h2 className="text-3xl md:text-4xl font-bold inline-block">
              Real Buyers, Real Reactions
            </h2>
          </RoughNotation>
          <p className="text-muted-foreground text-sm mt-4 max-w-md mx-auto">
            Over 40,000 fans have bought from The Taylor Method.
            Here&apos;s what some of them have to say.
          </p>
        </div>

        {/* Carousel */}
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {testimonials.map((t) => (
              <CarouselItem
                key={t.name}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative bg-card border border-border rounded-2xl p-6 h-full flex flex-col gap-4 shadow-sm">
                  {/* Quote icon */}
                  <Quote className="w-7 h-7 text-primary/30 absolute top-4 right-4" />

                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-sm text-foreground/80 leading-relaxed flex-1">
                    &ldquo;{t.testimonial}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-2 border-t border-border">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                    <Image
                      src={t.sparkle_image}
                      alt=""
                      width={28}
                      height={28}
                      className="ml-auto opacity-70"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-3 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
