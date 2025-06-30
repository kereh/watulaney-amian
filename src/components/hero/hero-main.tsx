"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function HeroMain() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.jpg"
          alt="Watulaney Amian Background"
          layout="fill"
          objectFit="cover"
          priority
          className="pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-lg md:text-xl font-bold">Selamat datang di</p>
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Watulaney Amian</h1>
        <p className="text-lg md:text-xl font-bold">
          Kab. Minahasa, Kec. Lembean Timur
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
