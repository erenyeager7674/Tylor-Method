import { content } from "@/lib/constants";
import { BookOpen, Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

export default function Featured() {
  type content = {
    image: string;
    title: string;
    modules: number;
    hours: number;
    description: string;
    rating: number;
    total_ratings: number;
    cost: number;
    doodle: string;
  };

  const CORNER_DOODLES = [
    "/doodles/sparkle-1.png",
    "/doodles/sparkle-3.png",
    "/doodles/sparkle-5.png",
    "/doodles/sparkle-7.png",
  ];

  return (
    /* Changed w-340 to w-full with an optional max-width so it scales beautifully */
    <div className="w-full relative px-6 py-12">
      <div className="absolute top-10 h-70">
        <Image
          src={"/doodles/flower-4.png"}
          alt="flower"
          width={100}
          height={1000}
          className="object-contain"
        />
      </div>
      <div className="flex items-center max-w-7xl mx-auto justify-between mb-8">
        <RoughNotation type="underline" show color="var(--primary)">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Content</h2>
        </RoughNotation>
        <Link
          className="flex items-center text-sm font-medium hover:underline justify-center gap-2"
          href={"#"}
        >
          View More Content
        </Link>
      </div>

      <div className="grid grid-cols-1 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.map((data: content, index: number) => {
          const cornerDoodle = CORNER_DOODLES[index % CORNER_DOODLES.length];

          return (
            <div
              key={data.title}
              className="relative text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-xl"
            >
              {/* top-left sparkle, floats just outside the image edge */}
              <Image
                src={cornerDoodle}
                alt=""
                height={40}
                width={40}
                aria-hidden="true"
                className="pointer-events-none select-none absolute -top-3 -left-3 z-10 w-9 h-9 rotate-[-8deg]"
              />
              <div className="rounded-xl border h-[22rem] overflow-hidden blur-sm">
                <Image
                  src={data.image}
                  alt={data.title}
                  height={1000}
                  width={1000}
                  className="object-cover"
                />
              </div>

              <div className="px-2 py-2 space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg">
                    <RoughNotation
                      type="underline"
                      show={true}
                      color="var(--primary)"
                      strokeWidth={2}
                      padding={2}
                      animationDuration={600}
                    >
                      {data.title}
                    </RoughNotation>
                  </h2>
                  <h3>
                    <span className="text-xl text-primary">$</span>
                    <span className="text-lg">{data.cost}</span>
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground">
                  {data.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    {data.modules} Packs
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {data.hours}h
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-current text-primary" />
                    {data.rating} ({data.total_ratings})
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        <div className="h-50 absolute bottom-0 right-0">
          <Image
            src={"/doodles/flower-5.png"}
            alt="flower"
            height={1000}
            width={100}
          />
        </div>
      </div>
    </div>
  );
}
