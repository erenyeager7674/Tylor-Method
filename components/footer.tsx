import Image from "next/image";
import Link from "next/link";
import { AtSign, MessageCircle, PlayCircle, Mail } from "lucide-react";

const footerLinks = {
  Content: [
    { label: "All Content", href: "#" },
    { label: "Free Previews", href: "#" },
    { label: "Fan Wins", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Support: [
    { label: "FAQ", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Community", href: "#" },
    { label: "Affiliate Program", href: "#" },
  ],
  Legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socials = [
  { icon: AtSign, label: "Instagram", href: "#" },
  { icon: MessageCircle, label: "Twitter / X", href: "#" },
  { icon: PlayCircle, label: "YouTube", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@thetaylormethod.com" },
];

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-border bg-secondary/30 px-6 pt-14 pb-8 overflow-hidden">
      {/* Soft background hearts */}
      <div className="pointer-events-none absolute right-6 top-6 opacity-20 flex gap-3">
        {[1, 2, 3].map((n) => (
          <Image
            key={n}
            src={`/doodles/heart-dark-${n}.png`}
            alt=""
            width={28}
            height={28}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="The Taylor Method"
                width={48}
                height={48}
                className="size-12 object-contain"
              />
              <div>
                <p className="font-bold text-base leading-tight">
                  The Taylor Method
                </p>
                <p className="font-script text-primary text-sm">
                  Best Feet Seller around
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Helping creators build real, sustainable income streams — one step
              at a time.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-sm font-semibold mb-4">{group}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} The Taylor Method. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with{" "}
            <span className="text-primary font-semibold">♥</span> by Taylor
          </p>
        </div>
      </div>
    </footer>
  );
}
