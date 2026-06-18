"use client"; // REQUIRED: Enables path tracking on the client layer

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Imports the route tracker
import { RoughNotation } from "react-rough-notation";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Header() {
  const pathname = usePathname(); // Retrieves the active URL path (e.g. "/" or "/shop")

  const navLinks = {
    Home: "/",
    Shop: "/shop",
    Contact: "/contact",
    "Buy Now": "/buy-now",
  };

  return (
    <header className="w-full max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
      {/* Logo */}
      <div className="flex items-start gap-3">
        <Image
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="size-16 object-contain"
        />

        <div className="">
          <h1 className="text-xl md:text-3xl font-bold">The Taylor Method</h1>

          <p className="hidden md:block font-script text-gray-500 text-lg">
            Best Feet Seller around
          </p>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {Object.entries(navLinks).map(([name, href]) => {
          const isActive = pathname === href;

          return (
            <Link
              key={name}
              href={href}
              className={`text-base font-medium ${
                isActive
                  ? "text-secondary"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              <RoughNotation
                type="highlight"
                show={isActive}
                color="var(--primary)"
              >
                {name}
              </RoughNotation>
            </Link>
          );
        })}
      </nav>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <Button variant="outline" className="px-4 py-2">
          Buy Now
        </Button>

        <Button className="px-4 py-2">Get Started</Button>
      </div>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="size-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[320px] p-4">
          <SheetTitle>Menu</SheetTitle>
          <div className="flex flex-col gap-8 mt-10">
            {Object.entries(navLinks).map(([name, href]) => {
              const isActive = pathname === href;

              return (
                <SheetClose asChild key={name}>
                  <Link
                    href={href}
                    className={`text-lg ${
                      isActive
                        ? "font-semibold text-primary"
                        : "text-foreground/70"
                    }`}
                  >
                    {name}
                  </Link>
                </SheetClose>
              );
            })}

            <div className="flex flex-col gap-3 pt-6 border-t">
              <Button variant="outline">Buy Now</Button>

              <Button>Get Started</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
