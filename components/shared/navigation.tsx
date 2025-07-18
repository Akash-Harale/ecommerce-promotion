"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    // { href: "#pricing", label: "Pricing" },
    // { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 text-white" />
              </div>
              <div className="ml-3">
                <span  className="text-xl font-bold bg-primary bg-clip-text text-transparent">
                 <Link href="/"></Link> CommerceMax
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-3 py-2 text-sm font-medium transition-colors text-gray-700 hover:text-blue-600"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Button className="bg-primary hover:from-blue-700 hover:to-purple-700">
              Get in touch
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-3 py-2 text-base font-medium transition-colors text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {link.label}
              </button>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full bg-primary">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
