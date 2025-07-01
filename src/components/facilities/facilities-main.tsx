"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Church,
  MapPin,
  Trophy,
  Sparkles,
  Building,
} from "lucide-react";
import { useState, useEffect } from "react";

export function FacilitiesMain() {
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

    const section = document.getElementById("facilities");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const facilities = [
    {
      title: "Sekolah",
      count: 2,
      icon: GraduationCap,
      description: "Fasilitas Pendidikan",
      color: "from-red-500 to-red-600", // 🔴 changed
      bgColor: "bg-red-50", // 🔴 changed
      textColor: "text-red-600", // 🔴 changed
    },
    {
      title: "Gereja",
      count: 2,
      icon: Church,
      description: "Fasilitas Keagamaan",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Lahan Pekuburan",
      count: 1,
      icon: MapPin,
      description: "Fasilitas Umum",
      color: "from-gray-500 to-gray-600",
      bgColor: "bg-gray-50",
      textColor: "text-gray-600",
    },
    {
      title: "Lapangan",
      count: 1,
      icon: Trophy,
      description: "Fasilitas Umum",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="mb-6 border-red-200 text-red-700 bg-red-50 px-4 py-2"
          >
            <Building className="h-4 w-4 mr-2" />
            Fasilitas
          </Badge>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-red-600 to-green-600 bg-clip-text text-transparent mb-6">
            Fasilitas Desa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Di Watulaney Amian tersedia beberapa fasilitas desa.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 bg-white ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <CardHeader className="text-center pb-4 relative z-10">
                <div
                  className={`mx-auto w-20 h-20 ${facility.bgColor} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                >
                  <facility.icon
                    className={`h-10 w-10 ${facility.textColor}`}
                  />
                </div>
                <CardTitle
                  className={`text-5xl font-bold ${facility.textColor} mb-3`}
                >
                  {facility.count}
                </CardTitle>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {facility.title}
                </h3>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  {facility.description}
                </p>
              </CardContent>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/30 rounded-full blur-sm group-hover:scale-150 transition-transform duration-300"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-white/40 rounded-full blur-sm group-hover:scale-150 transition-transform duration-300"></div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white"></div>
            </Card>
          ))}
        </div>

        {/* Summary Card */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="max-w-4xl mx-auto bg-red-50 border-red-100 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="h-6 w-6 text-purple-600" />
                <h3 className="text-2xl font-bold text-foreground">
                  Kesimpulan
                </h3>
                <Sparkles className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Desa kami dilengkapi dengan fasilitas penting yang mendukung
                pendidikan, kehidupan rohani, rekreasi, dan kegiatan masyarakat.
                Enam fasilitas utama ini melayani 677 penduduk dari 232 kepala
                keluarga.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl font-bold text-red-600">6</div>
                  <div className="text-sm text-muted-foreground">Fasilitas</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                  <div className="text-sm text-muted-foreground">Cakupan</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-600">677</div>
                  <div className="text-sm text-muted-foreground">
                    Penerima Manfaat
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-muted-foreground">
                    Aksesibilitas
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
