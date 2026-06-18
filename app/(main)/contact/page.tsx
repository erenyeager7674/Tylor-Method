"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, MessageSquare, Clock, Send, CheckCircle } from "lucide-react";
import { RoughNotation } from "react-rough-notation";
import { Button } from "@/components/ui/button";

const contactOptions = [
  {
    icon: Mail,
    title: "General Enquiries",
    description: "Questions about purchases, content, or anything else.",
    detail: "hello@thetaylormethod.com",
    sparkle: "/doodles/sparkle-2.png",
  },
  {
    icon: MessageSquare,
    title: "Collaborations",
    description: "Brand deals, affiliate partnerships, and media requests.",
    detail: "collab@thetaylormethod.com",
    sparkle: "/doodles/sparkle-5.png",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "We reply to every message within 24–48 hours on weekdays.",
    detail: "Mon – Fri, 9am – 6pm",
    sparkle: "/doodles/sparkle-8.png",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to a real form backend (Resend, Formspree, etc.)
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="relative px-6 py-16 bg-secondary/40 overflow-hidden">
        <Image
          src="/doodles/flower-2.png"
          alt=""
          width={100}
          height={140}
          className="pointer-events-none absolute right-0 bottom-0 opacity-25 hidden md:block"
        />
        <Image
          src="/doodles/sparkle-6.png"
          alt=""
          width={44}
          height={44}
          className="pointer-events-none absolute left-10 top-10 opacity-40 rotate-12"
        />

        <div className="max-w-2xl mx-auto text-center">
          <p className="font-script text-primary text-xl mb-2">let&apos;s talk</p>
          <RoughNotation type="underline" show color="var(--primary)">
            <h1 className="text-4xl md:text-5xl font-bold inline-block mb-4">
              Get in Touch
            </h1>
          </RoughNotation>
          <p className="text-muted-foreground text-sm md:text-base mt-4 leading-relaxed">
            Whether you have a question about a purchase, want to collaborate, or
            just want to say hi — I actually read every message.
          </p>
        </div>
      </section>

      {/* ── INFO CARDS ── */}
      <section className="px-6 py-14">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-6">
          {contactOptions.map((opt) => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.title}
                className="relative bg-card border border-border rounded-2xl p-6 flex flex-col gap-3"
              >
                <Image
                  src={opt.sparkle}
                  alt=""
                  width={28}
                  height={28}
                  className="absolute -top-3 -right-3 opacity-65"
                />
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-base">{opt.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {opt.description}
                </p>
                <p className="text-sm font-semibold text-primary">{opt.detail}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="px-6 py-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden">
            <Image
              src="/doodles/sparkle-1.png"
              alt=""
              width={40}
              height={40}
              className="pointer-events-none absolute top-4 right-4 opacity-40"
            />

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Message Sent!</h2>
                <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                  Thanks for reaching out. I&apos;ll get back to you within 24–48
                  hours.
                </p>
                <Button
                  variant="outline"
                  className="rounded-xl mt-2"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-1">Send a Message</h2>
                <p className="text-sm text-muted-foreground mb-8">
                  Fill out the form and I&apos;ll be in touch shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Amber Rose"
                        className="h-11 rounded-xl border border-border bg-background px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="h-11 rounded-xl border border-border bg-background px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition cursor-pointer"
                    >
                      <option value="" disabled>Select a topic&hellip;</option>
                      <option value="purchase">Purchase Question</option>
                      <option value="collab">Collaboration</option>
                      <option value="press">Press / Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What's on your mind?"
                      className="rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 rounded-xl shadow-lg shadow-primary/20"
                  >
                    Send Message
                    <Send className="size-4 ml-1" />
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
