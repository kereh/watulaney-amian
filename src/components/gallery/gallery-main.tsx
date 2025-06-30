"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  ImageIcon,
  Sparkles,
} from "lucide-react";

export function GalleryMain() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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

    const section = document.getElementById("gallery");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const images = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Village landscape view",
      title: "Village Landscape",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Community gathering",
      title: "Community Gathering",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Traditional houses",
      title: "Traditional Houses",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Village school",
      title: "Village School",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Sports field",
      title: "Sports Field",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Village church",
      title: "Village Church",
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? images.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="mb-6 border-red-200 text-red-700 bg-red-50 px-4 py-2"
          >
            <Camera className="h-4 w-4 mr-2" />
            Visual Stories
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-6">
            Village Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore the beauty and daily life of Watulaney Amian through our
            photo collection
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <Card
              key={index}
              className={`group relative py-0 overflow-hidden cursor-pointer border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 bg-white ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-center text-white p-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <Camera className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">
                      Click to view full size
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/30 rounded-full blur-sm group-hover:scale-150 transition-transform duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-white/40 rounded-full blur-sm group-hover:scale-150 transition-transform duration-300"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="relative max-w-6xl max-h-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20 z-10 w-12 h-12 rounded-full"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12 rounded-full"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12 rounded-full"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image */}
              <img
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black/50 backdrop-blur-sm rounded-xl p-4 max-w-md">
                <h3 className="text-lg font-semibold mb-1">
                  {images[selectedImage].title}
                </h3>
                <p className="text-sm opacity-75">
                  {selectedImage + 1} of {images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
