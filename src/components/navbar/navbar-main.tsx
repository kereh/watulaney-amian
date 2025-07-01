"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  History,
  BarChart3,
  Building,
  Camera,
  Mail,
} from "lucide-react";
import Image from "next/image";

export function NavbarMain() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Beranda", icon: Home },
    { href: "#history", label: "Sejarah", icon: History },
    { href: "#stats", label: "Demografi", icon: BarChart3 },
    { href: "#facilities", label: "Fasilitas Desa", icon: Building },
    { href: "#contact", label: "Kontak", icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-red-100"
          : "bg-white/80 backdrop-blur-md border-b border-white/20"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 group">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <Image
                    src="/logo_minahasa.png"
                    className="object-fill relative"
                    alt="Minahasa Logo"
                    sizes="100vh"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
            <h1 className="font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Watulaney <span className="block">Amian</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-red-50 hover:text-red-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="h-4 w-4 transition-transform duration-300" />
                    <span>{item.label}</span>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                  {/* Active Indicator */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-12 h-12 rounded-xl hover:bg-red-50 transition-all duration-300"
            >
              <div className="relative">
                {isOpen ? (
                  <X className="h-6 w-6 text-red-700" />
                ) : (
                  <Menu className="h-6 w-6 text-red-700" />
                )}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100 pb-6"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-red-100 mx-2 mt-2">
            <div className="p-4 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-red-50 hover:text-red-700"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                    <item.icon className="h-4 w-4 text-red-600" />
                  </div>
                  <span>{item.label}</span>

                  {/* Mobile Hover Effect */}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-red-600/5 to-red-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </nav>
  );
}
