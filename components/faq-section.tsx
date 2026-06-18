import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need any prior experience to get started?",
    answer:
      "Not at all. Everything is set up for first-timers. If you can use a phone, you can start buying and enjoying content right away — no complicated steps.",
  },
  {
    question: "How do I access my purchase?",
    answer:
      "Instantly. The moment your payment goes through you get full access — stream or download straight to your device, whenever you want.",
  },
  {
    question: "Is there a community I can join?",
    answer:
      "Yes! Every purchase includes access to our private community of 40,000+ fans. Share what you love, get recommendations, and connect with like-minded buyers.",
  },
  {
    question: "What if I am not happy with what I bought?",
    answer:
      "We offer a 30-day money-back guarantee on all purchases. Not what you expected? Reach out and we will sort it out — no hoops, no stress.",
  },
  {
    question: "How is this different from free content online?",
    answer:
      "Free content is fragments and low quality. Taylor's exclusive content is produced specifically for her buyers — uncensored, premium, and made to order. You are not getting leftovers.",
  },
  {
    question: "Can I access my purchases on my phone?",
    answer:
      "Absolutely. Everything is mobile-optimized. Browse, buy, and enjoy on your phone, tablet, or laptop — your library syncs across all your devices.",
  },
  {
    question: "Are there payment plans available?",
    answer:
      "Yes, several collections offer installment options at checkout. Great content should not be out of reach because of upfront cost.",
  },
];

export default function FaqSection() {
  return (
    <section className="relative w-full px-6 py-16 overflow-hidden">
      {/* Right doodle */}
      <div className="pointer-events-none absolute right-0 top-16 opacity-35">
        <Image
          src="/doodles/flower-4.png"
          alt=""
          width={90}
          height={130}
          className="object-contain"
        />
      </div>

      {/* Bottom left sparkle */}
      <div className="pointer-events-none absolute left-8 bottom-12 opacity-40">
        <Image src="/doodles/sparkle-4.png" alt="" width={42} height={42} />
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-script text-primary text-xl mb-2">
            got questions?
          </p>
          <RoughNotation type="underline" show color="var(--primary)" strokeWidth={2}>
            <h2 className="text-3xl md:text-4xl font-bold inline-block">
              Frequently Asked Questions
            </h2>
          </RoughNotation>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-2xl px-5 overflow-hidden"
            >
              <AccordionTrigger className="text-sm font-semibold text-left py-4 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Still have questions?{" "}
            <a
              href="mailto:hello@thetaylormethod.com"
              className="text-primary font-semibold hover:underline"
            >
              Reach out directly &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
