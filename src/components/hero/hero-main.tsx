"use client";

import { ChevronDown, MapPin, Users, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroMain() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-100"></div>

        {/* Geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25px 25px, rgb(239 68 68) 2px, transparent 2px),
              radial-gradient(circle at 75px 75px, rgb(220 38 38) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px, 50px 50px",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgb(239 68 68) 1px, transparent 1px),
              linear-gradient(90deg, rgb(239 68 68) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Diagonal lines pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              rgb(239 68 68),
              rgb(239 68 68) 1px,
              transparent 1px,
              transparent 20px
            )`,
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-red-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-red-100/40 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-red-400/20 rounded-full blur-2xl animate-pulse delay-2000"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Title with Enhanced Typography */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent drop-shadow-sm">
              Watulaney
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent drop-shadow-sm">
              Amian
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Kec. Lembean Timur, Kab. Minahasa.
          </p>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-red-600 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-red-300 rounded-full flex justify-center bg-white/50 backdrop-blur-sm">
            <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ChevronDown className="h-6 w-6 opacity-70" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400/60 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-red-500/50 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-red-300/60 rounded-full animate-ping delay-3000"></div>
      </div>

      {/* Large Decorative Shapes */}
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-red-200/30 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 border-2 border-red-300/20 rounded-lg rotate-45 animate-pulse"></div>
    </section>
  );
}
