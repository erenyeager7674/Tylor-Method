import Featured from "@/components/features-content";
import Header from "@/components/header";
import Hero from "@/components/hero-section";
import JourneySection from "@/components/my-journey";
import Testimonials from "@/components/testimonials";
import FaqSection from "@/components/faq-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://thetaylormethod.com/#organization",
      name: "The Taylor Method",
      url: "https://thetaylormethod.com",
      logo: "https://thetaylormethod.com/logo.png",
      founder: {
        "@type": "Person",
        name: "Taylor",
      },
      sameAs: [
        "https://www.instagram.com/thetaylormethod",
        "https://www.youtube.com/@thetaylormethod",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://thetaylormethod.com/#website",
      url: "https://thetaylormethod.com",
      name: "The Taylor Method",
      publisher: {
        "@id": "https://thetaylormethod.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://thetaylormethod.com/shop?search={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://thetaylormethod.com/#webpage",
      url: "https://thetaylormethod.com",
      name: "The Taylor Method | Premium Creator Content and Growth Systems",
      description:
        "A premium creator-content homepage featuring curated content packs, testimonials, Taylor's journey, FAQs, and conversion-focused calls to action.",
      isPartOf: {
        "@id": "https://thetaylormethod.com/#website",
      },
      about: {
        "@id": "https://thetaylormethod.com/#organization",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://thetaylormethod.com/design.png",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://thetaylormethod.com/#featured-content",
      name: "Featured Content Packs",
      itemListElement: [
        "Premium Ass Collection",
        "Thighs & Legs Exclusive",
        "Tits Unleashed",
        "Foot Fetish Extreme",
      ].map((name, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
        url: `https://thetaylormethod.com/shop#${name
          .toLowerCase()
          .replaceAll(" ", "-")}`,
      })),
    },
  ],
};

export default function App() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <Hero />
      <Featured />
      <Testimonials />
      <JourneySection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </>
  );
}
