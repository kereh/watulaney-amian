import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Watulaney Amian Village",
  description:
    "Official website of Watulaney Amian Village - A peaceful community where tradition meets progress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        {/* Background Pattern */}
        <div className="fixed inset-0 -z-10">
          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `
                linear-gradient(rgb(59 130 246) 1px, transparent 1px),
                linear-gradient(90deg, rgb(59 130 246) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-15 blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-blue-50 rounded-full opacity-25 blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-indigo-100 rounded-full opacity-20 blur-2xl animate-pulse delay-2000"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
