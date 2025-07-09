"use client";

import { Badge } from "@/components/ui/badge";
import { Sparkles, Mountain } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export function HistoryMain() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("history");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="history" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Sejarah
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent mb-6">
            Sejarah Desa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Temukan warisan budaya yang kaya dan kisah-kisah inspiratif yang
            membentuk Watulaney Amian.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/batu_licin.jpg"
                  alt="Historical view of Watulaney Amian"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-red-100">
                <div className="flex items-center gap-2">
                  <Mountain className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="text-sm font-semibold text-red-700">
                      Batu Licin / Watu Laney
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Watulaney Amian
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div>
              <Badge
                variant="outline"
                className="mb-4 border-red-200 text-red-700 bg-red-50"
              >
                Sejarah Watulaney Amian
              </Badge>
              <h3 className="text-3xl font-bold text-foreground mb-6 leading-tight">
                Where Tradition Meets{" "}
                <span className="text-red-600">Community Spirit</span>
              </h3>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p className="relative pl-6 border-l-4 border-red-200">
                Watulaney Amian is a village steeped in rich cultural heritage
                and community traditions. Founded generations ago, our village
                has grown from a small settlement into a thriving community that
                values both progress and preservation of our ancestral ways.
              </p>

              <p className="relative pl-6 border-l-4 border-red-300">
                The name "Watulaney Amian" carries deep meaning in our local
                language, reflecting our connection to the land and the
                harmonious relationship between our people and nature.
                Throughout the years, our village has maintained its unique
                identity while embracing positive changes.
              </p>

              <p className="relative pl-6 border-l-4 border-red-400">
                Today, Watulaney Amian stands as a testament to the strength of
                community bonds, where neighbors support one another and
                traditions are passed down through generations, creating a
                legacy of unity and shared prosperity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
