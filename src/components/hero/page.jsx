"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import heroImg from "@/assets/hero.png";
import { Beef, Truck, BadgeCheck, Star } from "lucide-react";

const TYPEWRITER_TEXTS = [
  "Your Trusted Qurbani Partner",
  "Premium Animals, Easy Ordering",
  "Hassle-Free Qurbani Experience",
];

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = TYPEWRITER_TEXTS[textIndex];
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 30);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((i) => (i + 1) % TYPEWRITER_TEXTS.length);
    }

    setDisplayText(currentText.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src={heroImg}
        alt="Qurbani Hat Hero"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="inline-block max-w-2xl">
            <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl px-8 py-10">
              <p className="text-emerald-400 font-semibold uppercase tracking-widest mb-4">
                Qurbani Hat — Eid ul Adha 2026
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight min-h-[140px]">
                {displayText}
                <span className="inline-block w-[3px] h-[1em] bg-emerald-400 ml-1 animate-pulse align-middle" />
              </h1>

              <p className="text-gray-300 text-base md:text-lg mt-6 leading-relaxed">
                Browse and order premium quality animals for Qurbani. Fast, reliable, and delivered to your doorstep.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/animals"
                  className="px-7 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  Browse Animals
                </Link>
                <Link
                  href="/about"
                  className="px-7 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-8">
          {[
            { icon: <Beef className="w-5 h-5 text-emerald-400" />, text: "Premium Quality Animals" },
            { icon: <Truck className="w-5 h-5 text-emerald-400" />, text: "Doorstep Delivery" },
            { icon: <BadgeCheck className="w-5 h-5 text-emerald-400" />, text: "Verified Sellers" },
            { icon: <Star className="w-5 h-5 text-emerald-400" />, text: "Shariah Compliant" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-gray-300 text-sm font-medium">
              {item.icon}
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;