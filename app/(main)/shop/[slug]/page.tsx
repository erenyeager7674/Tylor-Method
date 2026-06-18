import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Check,
  Clock,
  Infinity as InfinityIcon,
  LayoutGrid,
  Lock,
  MessageCircleHeart,
  Monitor,
  Package,
  ShieldCheck,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/constants";

// Generate static params for all content slugs
export function generateStaticParams() {
  return content.map((item) => ({
    slug: item.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

function getItem(slug: string) {
  return content.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === slug
  );
}

// Stable per-module duration so the page doesn't reshuffle on every render.
// Cycles through a small set of "realistic" lengths, seeded by module index.
const DURATIONS = [24, 38, 31, 27, 45, 33, 19, 41, 29, 36];
function durationFor(index: number) {
  return DURATIONS[index % DURATIONS.length];
}

const MODULE_TITLES = [
  "Introduction Pack",
  "Setup & Platform Guide",
  "Content Foundations",
  "Pricing & Packaging",
  "Audience & Fanbase",
  "Scaling Your Sales",
];

// Three accent colors used to color-code the file chips inside "What's in the pack".
const ACCENTS = ["coral", "butter", "sage"] as const;
type Accent = (typeof ACCENTS)[number];

const accentChip: Record<Accent, string> = {
  coral: "bg-primary/10 text-primary",
  butter: "bg-accent text-accent-foreground",
  sage: "bg-secondary text-secondary-foreground",
};

const CORNER_DOODLES = [
  "/doodles/sparkle-1.png",
  "/doodles/sparkle-3.png",
  "/doodles/sparkle-5.png",
  "/doodles/sparkle-7.png",
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) notFound();

  const related = content.filter((c) => c.title !== item.title).slice(0, 3);

  const includes = [
    `${item.modules} exclusive packs`,
    `${item.hours} hours of content`,
    "Downloadable files",
    "Lifetime access",
    "Mobile-friendly",
    "30-day money-back guarantee",
  ];

  const curriculum = Array.from(
    { length: Math.min(item.modules, 6) },
    (_, i) => ({
      module: i + 1,
      title: MODULE_TITLES[i],
      duration: `${durationFor(i)} min`,
      accent: ACCENTS[i % ACCENTS.length],
    })
  );

  const discountPct = 30;
  const wasPrice = (item.cost * 1.4).toFixed(2);

  return (
    <div className="w-full bg-background text-foreground">
      {/* ── BREADCRUMB ── */}
      <div className="px-6 py-4 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Link
            href="/shop"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Shop
          </Link>
          <span>/</span>
          <span className="text-foreground font-semibold line-clamp-1">
            {item.title}
          </span>
        </div>
      </div>

      {/* ── HERO SPLIT ── */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_400px] gap-14 items-start">
          {/* Left: Info */}
          <div>
            {/* Rating */}
            <div className="flex items-center gap-2.5 mb-5 flex-wrap">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(item.rating)
                        ? "fill-primary text-primary"
                        : "fill-border text-border"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[15px] font-bold">{item.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({item.total_ratings.toLocaleString()} ratings)
              </span>
            </div>

            {/* Title — hand-drawn underline via inline SVG instead of RoughNotation */}
            <h1 className="relative inline-block font-[var(--font-display)] text-4xl md:text-[44px] font-bold leading-[1.08] mb-5">
              {item.title}
              <svg
                viewBox="0 0 300 14"
                preserveAspectRatio="none"
                className="absolute left-[-2%] bottom-[-8px] w-[104%] h-[14px]"
                aria-hidden="true"
              >
                <path
                  d="M2,9 C60,2 240,2 298,9"
                  stroke="var(--primary)"
                  strokeWidth="7"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </h1>

            <p className="text-muted-foreground text-[15px] md:text-base leading-relaxed mb-7 max-w-xl">
              {item.description}
            </p>

            {/* Meta chips */}
            <div className="flex flex-wrap gap-2.5 mb-9">
              <span className="flex items-center gap-1.5 text-[13.5px] font-semibold bg-card border-[1.5px] border-border rounded-full px-4 py-2">
                <LayoutGrid className="w-3.5 h-3.5 text-primary" />
                {item.modules} modules
              </span>
              <span className="flex items-center gap-1.5 text-[13.5px] font-semibold bg-card border-[1.5px] border-border rounded-full px-4 py-2">
                <Clock className="w-3.5 h-3.5 text-primary" />
                {item.hours} hours
              </span>
              <span className="flex items-center gap-1.5 text-[13.5px] font-semibold bg-card border-[1.5px] border-border rounded-full px-4 py-2">
                <Users className="w-3.5 h-3.5 text-primary" />
                2,400+ buyers
              </span>
              <span className="flex items-center gap-1.5 text-[13.5px] font-semibold bg-card border-[1.5px] border-border rounded-full px-4 py-2">
                <Zap className="w-3.5 h-3.5 text-muted-foreground" />
                Beginner friendly
              </span>
            </div>

            {/* What's included */}
            <div className="bg-card border-[1.5px] border-border rounded-3xl p-6 mb-9">
              <h2 className="font-[var(--font-display)] font-semibold text-[19px] mb-4 flex items-center gap-2">
                <Package className="w-[18px] h-[18px] text-primary" />
                What&apos;s in the pack
              </h2>
              <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
                {includes.map((inc) => (
                  <li
                    key={inc}
                    className="flex items-center gap-2.5 text-[14.5px] font-medium"
                  >
                    <span className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-secondary-foreground" />
                    </span>
                    {inc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Content preview */}
            <div>
              <h2 className="font-[var(--font-display)] font-semibold text-xl mb-4">
                Inside the pack
              </h2>
              <div className="space-y-2.5">
                {curriculum.map((c) => (
                  <div
                    key={c.module}
                    className="flex items-center justify-between bg-card border-[1.5px] border-border rounded-2xl px-4.5 py-3.5 transition-transform hover:translate-x-1"
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`w-[34px] h-[34px] rounded-[11px] font-[var(--font-display)] font-bold text-sm flex items-center justify-center shrink-0 ${
                          accentChip[c.accent as Accent]
                        }`}
                      >
                        {c.module}
                      </span>
                      <span className="text-[14.5px] font-semibold">
                        {c.title}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-semibold text-muted-foreground bg-secondary px-3 py-1.5 rounded-full shrink-0 ml-4">
                      {c.duration}
                    </span>
                  </div>
                ))}
                {item.modules > 6 && (
                  <p className="text-[13px] text-muted-foreground font-medium text-center pt-2">
                    + {item.modules - 6} more modules inside
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right: Purchase "pack box" card */}
          <div className="lg:sticky lg:top-6">
            <div className="bg-card border-[1.5px] border-border rounded-[26px] overflow-hidden shadow-md">
              {/* Thumbnail with torn-edge bottom and rotated discount stamp */}
              <div className="relative h-52 w-full bg-gradient-to-br from-primary to-accent overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover mix-blend-multiply opacity-85"
                />
                {/* zigzag "torn pack" edge */}
                <div
                  className="absolute left-0 bottom-[-1px] w-full h-[18px] bg-card"
                  style={{
                    clipPath:
                      "polygon(0% 100%,0% 35%,4% 100%,8% 35%,12% 100%,16% 35%,20% 100%,24% 35%,28% 100%,32% 35%,36% 100%,40% 35%,44% 100%,48% 35%,52% 100%,56% 35%,60% 100%,64% 35%,68% 100%,72% 35%,76% 100%,80% 35%,84% 100%,88% 35%,92% 100%,96% 35%,100% 100%)",
                  }}
                />
                {/* discount stamp */}
                <div
                  className="absolute top-3.5 right-3.5 w-[74px] h-[74px] rounded-full bg-foreground text-background flex flex-col items-center justify-center border-[3px] border-dashed border-background/50 font-[var(--font-display)]"
                  style={{ transform: "rotate(9deg)" }}
                >
                  <span className="text-[19px] font-bold leading-none">
                    {discountPct}%
                  </span>
                  <span className="text-[9px] font-semibold tracking-wide mt-0.5">
                    OFF
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-1">
                {/* Price */}
                <div className="flex items-baseline gap-2.5 mb-5">
                  <span className="font-[var(--font-display)] text-[38px] font-bold">
                    ${item.cost}
                  </span>
                  <span className="text-[15px] text-muted-foreground line-through">
                    ${wasPrice}
                  </span>
                </div>

                <Button className="w-full h-[52px] rounded-2xl text-[15px] font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm mb-3">
                  Get the pack <ArrowRight className="size-4 ml-1" />
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-12 rounded-2xl text-[15px] font-semibold border-[1.5px] border-border bg-card hover:bg-secondary text-foreground mb-5"
                >
                  Add to wishlist
                </Button>

                <div className="flex items-center justify-center gap-3.5 text-xs font-medium text-muted-foreground mb-5">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    30-day guarantee
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" />
                    Secure checkout
                  </span>
                </div>

                {/* Mini features */}
                <div className="border-t-[1.5px] border-dashed border-border pt-4.5 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-[13px] font-medium text-muted-foreground">
                    <InfinityIcon className="w-3.5 h-3.5 text-primary shrink-0" />
                    Lifetime access
                  </div>
                  <div className="flex items-center gap-2.5 text-[13px] font-medium text-muted-foreground">
                    <Monitor className="w-3.5 h-3.5 text-primary shrink-0" />
                    Mobile + desktop
                  </div>
                  <div className="flex items-center gap-2.5 text-[13px] font-medium text-muted-foreground">
                    <Award className="w-3.5 h-3.5 text-primary shrink-0" />
                    Certificate of completion
                  </div>
                  <div className="flex items-center gap-2.5 text-[13px] font-medium text-muted-foreground">
                    <MessageCircleHeart className="w-3.5 h-3.5 text-primary shrink-0" />
                    Join private community
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      {related.length > 0 && (
        <section className="px-6 py-14">
          <div className="max-w-7xl mx-auto bg-secondary/40 rounded-[32px] px-8 md:px-10 py-12">
            <h2 className="font-[var(--font-display)] text-[28px] font-bold mb-7">
              You might also like
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((r, index) => {
                const rSlug = r.title.toLowerCase().replace(/\s+/g, "-");
                const cornerDoodle = CORNER_DOODLES[index % CORNER_DOODLES.length];
                return (
                  <Link
                    key={r.title}
                    href={`/shop/${rSlug}`}
                    className="group relative text-left rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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

                    {/* Thumbnail */}
                    <div className="rounded-xl border border-border h-48 overflow-hidden blur-sm relative bg-card">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="px-2 py-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold group-hover:text-primary transition-colors">
                          {r.title}
                        </h3>
                        <span className="text-base font-bold text-primary whitespace-nowrap ml-2">
                          ${r.cost}
                        </span>
                      </div>

                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {r.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5" />
                          {r.modules} Packs
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {r.hours}h
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-current text-primary" />
                          {r.rating} ({r.total_ratings})
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

