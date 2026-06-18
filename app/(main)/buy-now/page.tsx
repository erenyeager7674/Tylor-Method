import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, Star, Zap, Crown } from "lucide-react";
import { RoughNotation } from "react-rough-notation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: 29,
    period: "one-time",
    badge: null,
    description: "Perfect if you want to dip your toes in and try a single collection.",
    features: [
      "1 collection of your choice",
      "Lifetime access",
      "Mobile-friendly",
      "Community access (read-only)",
      "30-day money-back guarantee",
    ],
    cta: "Get Starter",
    variant: "outline" as const,
    sparkle: "/doodles/sparkle-3.png",
  },
  {
    name: "Creator",
    icon: Star,
    price: 97,
    period: "one-time",
    badge: "Most Popular",
    description: "The sweet spot. All 4 collections plus full community access.",
    features: [
      "All 4 collections",
      "Lifetime access",
      "Full community access",
      "Monthly drop previews",
      "Downloadable packs",
      "Priority support",
      "30-day money-back guarantee",
    ],
    cta: "Get Full Access",
    variant: "default" as const,
    sparkle: "/doodles/sparkle-5.png",
  },
  {
    name: "Empire",
    icon: Crown,
    price: 249,
    period: "one-time",
    badge: "Best Value",
    description: "Everything, forever. For serious fans who want it all.",
    features: [
      "All current + future collections",
      "Lifetime access",
      "VIP community channel",
      "Monthly exclusive drops",
      "Private 1:1 welcome call",
      "Bonus content packs",
      "Affiliate partner access",
      "30-day money-back guarantee",
    ],
    cta: "Build Your Empire",
    variant: "outline" as const,
    sparkle: "/doodles/sparkle-7.png",
  },
];

const faqs = [
  {
    q: "Do I need any experience?",
    a: "Nope. Just buy what you want and enjoy it instantly. No setup, no learning curve.",
  },
  {
    q: "Is there a subscription or recurring charge?",
    a: "No subscriptions. Every plan is a single one-time payment with lifetime access. No surprises.",
  },
  {
    q: "What is the refund policy?",
    a: "30-day no-questions-asked money-back guarantee on all plans. If it is not for you, we will sort it out.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes. You can upgrade from Starter or Creator to Empire at any time — you only pay the difference.",
  },
];

export default function BuyNowPage() {
  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="relative px-6 py-16 bg-secondary/40 overflow-hidden">
        <Image src="/doodles/sparkle-2.png" alt="" width={48} height={48} className="pointer-events-none absolute left-10 top-10 opacity-45 rotate-12 hidden md:block" />
        <Image src="/doodles/flower-3.png" alt="" width={100} height={140} className="pointer-events-none absolute right-0 top-0 opacity-25 hidden md:block" />
        <Image src="/doodles/sparkle-6.png" alt="" width={36} height={36} className="pointer-events-none absolute left-1/3 bottom-6 opacity-40" />

        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold rounded-full px-4 py-1.5 mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            One-time payment · Lifetime access
          </div>
          <RoughNotation type="underline" show color="var(--primary)">
            <h1 className="text-4xl md:text-5xl font-bold inline-block mb-4">
              Choose Your Plan
            </h1>
          </RoughNotation>
          <p className="text-muted-foreground text-sm md:text-base mt-4 leading-relaxed max-w-md mx-auto">
            No monthly fees. No upsells. Pick the plan that fits where you are
            right now and grow into the rest.
          </p>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isPopular = plan.badge === "Most Popular";
            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl border p-7 flex flex-col gap-5 ${
                  isPopular
                    ? "border-primary shadow-xl shadow-primary/10 bg-card"
                    : "border-border bg-card"
                }`}
              >
                {/* Sparkle doodle */}
                <Image
                  src={plan.sparkle}
                  alt=""
                  width={32}
                  height={32}
                  className="absolute -top-4 -right-3 opacity-65"
                />

                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className={`text-[10px] font-bold px-3 py-1 ${isPopular ? "bg-primary text-primary-foreground" : "bg-foreground text-background"}`}>
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                {/* Plan name + icon */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isPopular ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-bold">{plan.name}</h2>
                </div>

                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-primary text-2xl font-bold">$</span>
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{plan.period}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Features */}
                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.variant}
                  className={`w-full rounded-xl h-11 mt-2 ${isPopular ? "shadow-lg shadow-primary/20" : ""}`}
                >
                  {plan.cta}
                  <ArrowRight className="size-4 ml-1" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Trust row */}
        <div className="max-w-5xl mx-auto mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground font-medium">
          {["🔒 SSL Secured", "💳 All Major Cards", "🌍 Available Worldwide", "📱 Lifetime Access", "✅ 30-Day Guarantee"].map((t) => (
            <span key={t} className="bg-card border border-border rounded-full px-4 py-1.5">{t}</span>
          ))}
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="px-6 py-12 bg-secondary/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">What's Included</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-semibold text-muted-foreground w-1/2">Feature</th>
                  {plans.map((p) => (
                    <th key={p.name} className={`text-center py-3 px-2 font-bold ${p.badge === "Most Popular" ? "text-primary" : ""}`}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Collections", "1", "4", "All"],
                  ["Lifetime access", "✓", "✓", "✓"],
                  ["Community access", "Read-only", "Full", "VIP"],
                  ["Monthly drop previews", "✗", "✓", "✓"],
                  ["1:1 welcome call", "✗", "✗", "✓"],
                  ["Future collections", "✗", "✗", "✓"],
                  ["Affiliate access", "✗", "✗", "✓"],
                  ["30-day guarantee", "✓", "✓", "✓"],
                ].map(([feature, ...cols]) => (
                  <tr key={feature} className="border-b border-border/60 hover:bg-card/50 transition-colors">
                    <td className="py-3 pr-4 text-foreground/80">{feature}</td>
                    {cols.map((val, i) => (
                      <td key={i} className={`text-center py-3 px-2 ${val === "✗" ? "text-muted-foreground/40" : val === "✓" ? "text-primary font-bold" : ""}`}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── MINI FAQ ── */}
      <section className="px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Quick Answers</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-card border border-border rounded-2xl p-5">
                <h3 className="font-semibold text-sm mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            More questions?{" "}
            <Link href="/contact" className="text-primary font-semibold hover:underline">
              Reach out →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
