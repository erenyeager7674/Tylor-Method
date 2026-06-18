import Image from "next/image";
import Link from "next/link";
import { BookOpen, Clock, Star, Filter, ArrowRight } from "lucide-react";
import { RoughNotation } from "react-rough-notation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { content } from "@/lib/constants";

const categories = ["All", "Beginner", "Advanced", "Bundles", "Free"];

const CORNER_DOODLES = [
  "/doodles/sparkle-1.png",
  "/doodles/sparkle-3.png",
  "/doodles/sparkle-5.png",
  "/doodles/sparkle-7.png",
];

// Extend base content with category tags for filtering display
const shopContent = content.map((item, i) => ({
  ...item,
  category: ["Advanced", "Beginner", "Advanced", "Beginner"][i % 4],
  badge: i === 0 ? "Best Seller" : i === 2 ? "Most Popular" : null,
}));

export default function ShopPage() {
  return (
    <div className="w-full">
      {/* ── PAGE HERO ── */}
      <section className="relative px-6 py-16 bg-secondary/40 overflow-hidden">
        <Image
          src="/doodles/flower-3.png"
          alt=""
          width={110}
          height={160}
          className="pointer-events-none absolute right-0 top-0 opacity-25 hidden md:block"
        />
        <Image
          src="/doodles/sparkle-4.png"
          alt=""
          width={42}
          height={42}
          className="pointer-events-none absolute left-12 bottom-6 opacity-40"
        />

        <div className="max-w-7xl mx-auto text-center">
          <p className="font-script text-primary text-xl mb-2">everything you need</p>
          <RoughNotation type="underline" show color="var(--primary)">
            <h1 className="text-4xl md:text-5xl font-bold inline-block mb-4">
              The Content Shop
            </h1>
          </RoughNotation>
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto mt-4">
            Exclusive content, collections, and packs built from 7 years of
            real-world selling. Pick what you want.
          </p>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 justify-center mt-8">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`text-sm font-medium rounded-full px-5 py-1.5 border transition-colors cursor-pointer ${
                  i === 0
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="relative px-6 py-16">
        <Image
          src="/doodles/flower-4.png"
          alt=""
          width={90}
          height={130}
          className="pointer-events-none absolute left-0 top-8 opacity-20 hidden md:block"
        />

        <div className="max-w-7xl mx-auto">
          {/* Results bar */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{content.length}</span> collections
            </p>
            <button className="flex items-center gap-2 text-sm font-medium border border-border rounded-xl px-4 py-2 bg-card hover:border-foreground/30 transition-colors cursor-pointer">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shopContent.map((item, index) => {
              const cornerDoodle = CORNER_DOODLES[index % CORNER_DOODLES.length];
              return (
                <Link
                  key={item.title}
                  href={`/shop/${encodeURIComponent(item.title.toLowerCase().replace(/\s+/g, "-"))}`}
                  className="group relative text-left rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {/* Corner sparkle */}
                  <Image
                    src={cornerDoodle}
                    alt=""
                    height={40}
                    width={40}
                    aria-hidden="true"
                    className="pointer-events-none select-none absolute -top-3 -left-3 z-10 w-9 h-9 rotate-[-8deg]"
                  />

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-3 right-3 z-10">
                      <Badge className="text-[10px] font-bold bg-primary text-primary-foreground">
                        {item.badge}
                      </Badge>
                    </div>
                  )}

                  {/* Thumbnail */}
                  <div className="rounded-xl blur-sm border h-[22rem] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      height={1000}
                      width={1000}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Info */}
                  <div className="px-2 py-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <h2 className="text-base font-bold leading-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h2>
                      <span className="text-base font-bold text-primary whitespace-nowrap ml-2">
                        ${item.cost}
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" />
                        {item.modules} packs
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {item.hours}h
                      </span>
                      <span className="flex items-center gap-1 ml-auto">
                        <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Load more placeholder */}
          <div className="mt-14 text-center">
            <p className="text-sm text-muted-foreground mb-4">More content drops regularly.</p>
            <Button variant="outline" className="rounded-xl h-11 px-8">
              Load More
            </Button>
          </div>
        </div>
      </section>

      {/* ── BUNDLE BANNER ── */}
      <section className="px-6 py-14 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/doodles/sparkle-2.png"
              alt=""
              width={60}
              height={60}
              className="pointer-events-none absolute top-4 right-4 opacity-40"
            />
            <Image
              src="/doodles/flower-5.png"
              alt=""
              width={120}
              height={170}
              className="pointer-events-none absolute -bottom-4 right-12 opacity-20 hidden md:block"
            />

            <div className="flex-1">
              <p className="font-script text-primary text-xl mb-2">best value</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Get the Complete Bundle
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                All 4 collections. Everything included. Lifetime access. Plus exclusive
                community access and monthly drop previews from Taylor. One price, forever.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 shrink-0">
              <div className="text-center">
                <p className="text-sm text-muted-foreground line-through">$249.96</p>
                <p className="text-4xl font-bold text-primary">$149</p>
                <p className="text-xs text-muted-foreground">one-time payment</p>
              </div>
              <Button className="rounded-xl h-11 px-8 shadow-lg shadow-primary/20 w-full">
                Get the Bundle <ArrowRight className="size-4 ml-1" />
              </Button>
              <p className="text-xs text-muted-foreground">💳 30-day guarantee</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
