"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/shared/navigation";
import Footer from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import Image from "next/image";

export default function ReviewsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Fashion Forward",
      company: "Fashion Forward",
      content:
        "CommerceMax transformed our online business completely. The analytics dashboard helped us identify our best-selling products and optimize our inventory. Sales increased by 300% in just 3 months!",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      results: "300% increase in sales",
    },
    {
      name: "Mike Chen",
      role: "Founder, Tech Gadgets",
      company: "Tech Gadgets Pro",
      content:
        "The inventory management and analytics features are absolutely game-changing. We can now predict demand accurately and never run out of stock. The customer support is exceptional too.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      results: "Zero stockouts achieved",
    },
    {
      name: "Emily Rodriguez",
      role: "Owner, Artisan Crafts",
      company: "Handmade Haven",
      content:
        "As a small business owner, I was worried about the complexity, but CommerceMax made everything so easy. The templates are beautiful, and the SEO tools helped us rank #1 for our main keywords.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      results: "#1 Google ranking",
    },
    {
      name: "David Park",
      role: "Marketing Director, Sports Gear",
      company: "Athletic Pro",
      content:
        "The multi-channel selling feature allowed us to expand to Amazon and eBay seamlessly. Our revenue streams diversified, and we're now selling 40% more across all platforms.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      results: "40% revenue increase",
    },
    {
      name: "Lisa Thompson",
      role: "E-commerce Manager, Beauty Brand",
      company: "Glow Beauty",
      content:
        "The abandoned cart recovery feature alone paid for our subscription. We're recovering 35% of abandoned carts and the email automation saves us hours every week.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      results: "35% cart recovery rate",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "$2.5B+", label: "Sales Processed" },
    { number: "99.9%", label: "Customer Satisfaction" },
  ];

  const categories = [
    {
      title: "Small Business",
      reviews: [
        {
          name: "Jennifer Walsh",
          business: "Local Bakery",
          content:
            "Perfect for my small bakery. Easy to set up online ordering and the payment processing is seamless.",
          rating: 5,
        },
        {
          name: "Robert Kim",
          business: "Handmade Jewelry",
          content:
            "The inventory tracking helps me manage my unique pieces perfectly. Customer love the professional look.",
          rating: 5,
        },
      ],
    },
    {
      title: "Growing Business",
      reviews: [
        {
          name: "Amanda Foster",
          business: "Fashion Boutique",
          content:
            "Scaled from 100 to 10,000 products effortlessly. The analytics help us make data-driven decisions.",
          rating: 5,
        },
        {
          name: "Carlos Martinez",
          business: "Electronics Store",
          content:
            "Multi-channel selling increased our reach significantly. Now selling on 5 different platforms.",
          rating: 5,
        },
      ],
    },
    {
      title: "Enterprise",
      reviews: [
        {
          name: "Michelle Chang",
          business: "Global Retailer",
          content:
            "The enterprise features and dedicated support team make managing our complex operations simple.",
          rating: 5,
        },
        {
          name: "Thomas Anderson",
          business: "Manufacturing Company",
          content:
            "Custom integrations with our ERP system work flawlessly. Couldn't be happier with the solution.",
          rating: 5,
        },
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            ⭐ 4.9/5 Average Rating
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Loved by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              50,000+ Businesses
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            See what our customers have to say about their success with
            CommerceMax. Real stories, real results.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from businesses that transformed their operations
            </p>
          </div>

          <div className="relative">
            <Card className="p-8 lg:p-12 text-center bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <CardContent className="p-0">
                <Quote className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>
                <blockquote className="text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
                  {testimonials[currentTestimonial].content}
                </blockquote>
                <div className="flex items-center justify-center mb-6">
                  <Image
                    src={
                      testimonials[currentTestimonial].avatar ||
                      "/placeholder.svg"
                    }
                    alt={testimonials[currentTestimonial].name}
                    width={80}
                    height={80}
                    className="rounded-full mr-6"
                  />
                  <div className="text-left">
                    <div className="font-bold text-xl text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600 text-lg">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-blue-600 font-semibold">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
                  {testimonials[currentTestimonial].results}
                </Badge>
              </CardContent>
            </Card>

            <Button
              variant="outline"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
              onClick={() =>
                setCurrentTestimonial(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                )
              }
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev + 1) % testimonials.length
                )
              }
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews by Category */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Reviews by Business Size
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.reviews.map((review, reviewIndex) => (
                    <Card key={reviewIndex} className="p-6 bg-white">
                      <CardContent className="p-0">
                        <div className="flex justify-center mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <blockquote className="text-gray-700 mb-4">
                          {review.content}
                        </blockquote>
                        <div className="text-center">
                          <div className="font-semibold text-gray-900">
                            {review.name}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {review.business}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands of successful businesses
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex justify-center">
                <Image
                  src={`/placeholder.svg?height=60&width=120&text=Company${i}`}
                  alt={`Company ${i}`}
                  width={120}
                  height={60}
                  className="grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free trial today and see why 50,000+ businesses trust
            CommerceMax
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent"
            >
              Read More Reviews
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
