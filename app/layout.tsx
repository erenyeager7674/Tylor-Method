import type { Metadata } from "next";
import { Belleza, Style_Script } from "next/font/google";
import "./globals.css";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://thetaylormethod.com"
);

const belleza = Belleza({
  variable: "--font-belleza",
  subsets: ["latin"],
  weight: ["400"],

});

const styleScript = Style_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "The Taylor Method | Premium Creator Content and Growth Systems",
    template: "%s | The Taylor Method",
  },
  description:
    "The Taylor Method helps creators package premium content, build loyal audiences, and turn digital attention into repeatable online income.",
  applicationName: "The Taylor Method",
  authors: [{ name: "Taylor", url: siteUrl }],
  creator: "Taylor",
  publisher: "The Taylor Method",
  keywords: [
    "The Taylor Method",
    "creator content business",
    "premium content strategy",
    "digital product training",
    "online income systems",
    "creator monetization",
    "audience growth",
    "exclusive content library",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "The Taylor Method",
    title: "The Taylor Method | Premium Creator Content and Growth Systems",
    description:
      "Learn how Taylor packages premium content, grows loyal buyers, and builds repeatable creator income systems.",
    images: [
      {
        url: "/design.png",
        width: 1440,
        height: 2072,
        alt: "The Taylor Method scrapbook-style homepage preview",
      },
      {
        url: "/heroimage.jpg",
        width: 1200,
        height: 630,
        alt: "Taylor Method hero image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Taylor Method | Premium Creator Content and Growth Systems",
    description:
      "Premium content strategy, creator monetization, and audience growth systems from Taylor.",
    images: ["/design.png"],
    creator: "@thetaylormethod",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${belleza.variable} ${styleScript.variable} h-full antialiased`}
    >
      <body className=" min-h-full flex flex-col text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
