"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Send,
  MessageCircle,
  Navigation,
} from "lucide-react";

export function ContactMain() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Thank you for your message! We will get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "village@watulaneyamian.id",
      color: "text-red-600",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+62 XXX-XXXX-XXXX",
      color: "text-red-500",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Watulaney Amian Village Office, [Region/Province]",
      color: "text-red-700",
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", color: "hover:bg-red-600" },
    { icon: Instagram, label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Twitter, label: "Twitter", color: "hover:bg-rose-600" },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-red-200 text-red-700 bg-red-50"
          >
            <Navigation className="h-4 w-4 mr-2" />
            Get In Touch
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-rose-600 to-red-800 bg-clip-text text-transparent mb-6">
            Contact & Location
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with our village administration or visit us in person
          </p>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className={`h-8 w-8 ${info.color}`} />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {info.title}
                </h3>
                <p className="text-muted-foreground">{info.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Send us a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-red-200 focus:border-red-500 focus:ring-red-500"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-red-200 focus:border-red-500 focus:ring-red-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-red-200 focus:border-red-500 focus:ring-red-500"
                  placeholder="What is this about?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-red-200 focus:border-red-500 focus:ring-red-500 resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-muted-foreground mb-4 text-center">
                Or connect with us on social media
              </p>
              <div className="flex justify-center space-x-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className={`border-red-200 hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Find Us Here
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Watulaney Amian Village Location
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7977.936752885361!2d124.9569154!3d1.1826709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32873b23278318cd%3A0x9da652bdf09b227c!2sKantor%20Hukum%20Tua%20Desa%20Watulaney%20Amian!5e0!3m2!1sid!2sid!4v1751081096223!5m2!1sid!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Watulaney Amian Location"
              />
            </div>

            <div className="px-6 py-6 bg-gray-50">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">
                  Village Office Address
                </h4>
                <p className="text-muted-foreground text-sm">
                  Watulaney Amian
                  <br />
                  95685, Kec. Lembean Timur, Kab. Minahasa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
