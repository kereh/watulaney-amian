"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Users,
  User,
  UserCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useState, useEffect } from "react";

export function StatsMain() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0, 0]);

  const stats = [
    {
      title: "Rumah",
      value: 182,
      icon: Home,
      description: "Jumlah Rumah",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
    {
      title: "Kartu Keluarga",
      value: 232,
      icon: Users,
      description: "Jumlah Kartu Keluarga",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Penduduk",
      value: 677,
      icon: User,
      description: "Jumlah Penduduk",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Laki-Laki",
      value: 340,
      icon: UserCheck,
      description: "Jumlah Laki-Laki",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-600",
    },
    {
      title: "Perempuan",
      value: 337,
      icon: UserCheck,
      description: "Jumlah Perempuan",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setAnimatedValues((prev) => {
                const newValues = [...prev];
                newValues[index] = Math.floor(start);
                return newValues;
              });
            }, 16);
          });
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("stats");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="mb-6 border-red-200 text-red-700 bg-red-50 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Village Demographics
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent mb-6">
            Our Community
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the numbers that tell the story of our vibrant village
            community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <CardHeader className="text-center pb-2 relative z-10">
                <div
                  className={`mx-auto w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <stat.icon className={`h-8 w-8 ${stat.textColor}`} />
                </div>
                <CardTitle
                  className={`text-4xl md:text-5xl font-bold ${stat.textColor} mb-2`}
                >
                  {animatedValues[index].toLocaleString()}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <h3 className="font-bold text-foreground text-lg mb-2">
                  {stat.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>
              </CardContent>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/30 rounded-full blur-sm"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
