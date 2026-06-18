import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoughNotation } from "react-rough-notation";

export default function CtaSection() {
  return (
    <section className="relative w-full px-6 py-20 overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-[60%] bg-primary/8 blur-3xl" />
      </div>

      {/* Doodle decorations */}
      <Image
        src="/doodles/sparkle-2.png"
        alt=""
        width={44}
        height={44}
        className="pointer-events-none absolute left-10 top-10 opacity-50 rotate-12"
      />
      <Image
        src="/doodles/sparkle-7.png"
        alt=""
        width={36}
        height={36}
        className="pointer-events-none absolute right-16 top-16 opacity-50 -rotate-6"
      />
      <Image
        src="/doodles/flower-2.png"
        alt=""
        width={90}
        height={130}
        className="pointer-events-none absolute -left-4 bottom-4 opacity-30"
      />
      <Image
        src="/doodles/flower-3.png"
        alt=""
        width={90}
        height={130}
        className="pointer-events-none absolute -right-2 bottom-0 opacity-25 rotate-6"
      />
      <Image
        src="/doodles/sparkle-5.png"
        alt=""
        width={32}
        height={32}
        className="pointer-events-none absolute left-1/3 bottom-12 opacity-45"
      />

      <div className="max-w-2xl mx-auto text-center">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold rounded-full px-4 py-1.5 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Limited Spots for Aspiring Content Sellers
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
          Ready to Launch Your{" "}
          <RoughNotation type="highlight" show color="var(--primary)" multiline>
            <span className="text-primary-foreground">Content Selling Empire?</span>
          </RoughNotation>
        </h2>

        {/* Sub */}
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-8">
          Join thousands of creators who are building income streams by selling exclusive content, products, and services. Start today — your first sale is just a click away.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            size="lg"
            className="h-12 rounded-xl px-8 font-sans text-sm shadow-lg shadow-primary/25 w-full sm:w-auto"
          >
            Get Started Now
            <ArrowRight className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 rounded-xl px-8 font-sans text-sm border-foreground/25 w-full sm:w-auto"
          >
            Browse All Content
          </Button>
        </div>

        {/* Micro trust */}
        <p className="text-xs text-muted-foreground mt-5">
          💳 30-day money-back guarantee &nbsp;·&nbsp; 🔒 Secure checkout
          &nbsp;·&nbsp; 📱 Lifetime access
        </p>
      </div>
    </section>
  );
}