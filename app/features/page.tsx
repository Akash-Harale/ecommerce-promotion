"use client";

import Navigation from "@/components/shared/navigation";
import Footer from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingBag,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Users,
  BarChart3,
  CreditCard,
  Smartphone,
  Search,
  Mail,
  Settings,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Bell,
  Store,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: <ShoppingBag className="h-12 w-12 text-primary" />,
      title: "Product Catalog Management",
      description:
        "Complete product management system with unlimited products, variants, categories, and advanced inventory tracking across multiple locations.",
      features: [
        "Unlimited products & variants",
        "Bulk product import/export",
        "Advanced categorization",
        "Multi-location inventory",
        "Product bundling",
        "Digital product support",
      ],
    },
    {
      icon: <CreditCard className="h-12 w-12 text-primary" />,
      title: "Payment Processing",
      description:
        "Secure payment gateway supporting 50+ payment methods including credit cards, digital wallets, and buy-now-pay-later options.",
      features: [
        "50+ payment methods",
        "Stripe, PayPal, Square integration",
        "Buy now, pay later options",
        "Recurring billing support",
        "Multi-currency processing",
        "PCI DSS compliance",
      ],
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Order Management System",
      description:
        "Streamlined order processing with automated workflows, order tracking, and comprehensive fulfillment management.",
      features: [
        "Automated order processing",
        "Real-time order tracking",
        "Bulk order management",
        "Return & refund handling",
        "Order status notifications",
        "Fulfillment automation",
      ],
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Customer Management (CRM)",
      description:
        "Advanced customer relationship management with profiles, segmentation, loyalty programs, and personalized experiences.",
      features: [
        "Customer profiles & history",
        "Advanced segmentation",
        "Loyalty programs",
        "Wishlist functionality",
        "Customer support tickets",
        "Personalized recommendations",
      ],
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Mobile Commerce",
      description:
        "Fully responsive design with mobile-optimized checkout, progressive web app features, and native mobile app support.",
      features: [
        "Mobile-responsive design",
        "Progressive Web App (PWA)",
        "Mobile-optimized checkout",
        "Touch-friendly interface",
        "Mobile payment options",
        "App store deployment",
      ],
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Analytics & Reporting",
      description:
        "Comprehensive business intelligence with real-time dashboards, sales analytics, and actionable insights for growth.",
      features: [
        "Real-time sales dashboard",
        "Customer behavior analytics",
        "Inventory reports",
        "Financial reporting",
        "Marketing performance",
        "Custom report builder",
      ],
    },
    {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: "Search & Navigation",
      description:
        "Advanced search functionality with filters, autocomplete, and intelligent product recommendations to enhance user experience.",
      features: [
        "Advanced search with filters",
        "Autocomplete suggestions",
        "Visual search capabilities",
        "Faceted navigation",
        "Search analytics",
        "AI-powered recommendations",
      ],
    },
    {
      icon: <Mail className="h-12 w-12 text-primary" />,
      title: "Marketing Automation",
      description:
        "Built-in marketing tools including email campaigns, abandoned cart recovery, and social media integration.",
      features: [
        "Email marketing campaigns",
        "Abandoned cart recovery",
        "Social media integration",
        "Discount & coupon system",
        "Affiliate program management",
        "Review & rating system",
      ],
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Multi-Channel Selling",
      description:
        "Sell across multiple channels including marketplaces, social media, and in-person with unified inventory management.",
      features: [
        "Amazon & eBay integration",
        "Social commerce (Facebook, Instagram)",
        "Point of sale (POS) system",
        "Marketplace management",
        "Unified inventory sync",
        "Cross-channel analytics",
      ],
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Security & Compliance",
      description:
        "Enterprise-grade security with SSL encryption, fraud protection, GDPR compliance, and regular security audits.",
      features: [
        "SSL encryption",
        "Fraud detection & prevention",
        "GDPR compliance tools",
        "Regular security audits",
        "Two-factor authentication",
        "Data backup & recovery",
      ],
    },
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "Customization & Integration",
      description:
        "Flexible platform with custom themes, API access, third-party integrations, and developer-friendly tools.",
      features: [
        "Custom theme development",
        "REST & GraphQL APIs",
        "Webhook support",
        "Third-party app store",
        "Custom field support",
        "Developer documentation",
      ],
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Performance & Scalability",
      description:
        "High-performance infrastructure with global CDN, auto-scaling, and 99.9% uptime guarantee for growing businesses.",
      features: [
        "Global CDN network",
        "Auto-scaling infrastructure",
        "99.9% uptime guarantee",
        "Page speed optimization",
        "Database optimization",
        "Load balancing",
      ],
    },
    {
      icon: <Store className="h-12 w-12 text-primary" />,
      title: "Store Management",
      description:
        "Comprehensive tools to manage your store’s products, inventory, and orders with real-time insights and control.",
      features: [
        "Product and inventory management",
        "Order tracking and fulfillment",
        "Real-time stock updates",
        "Category & attribute management",
        "Sales analytics & reporting",
        "Multi-store management support",
      ],
    },
    {
      icon: <Bell className="h-12 w-12 text-primary" />,
      title: "Notifications & Alerts",
      description:
        "Keep your users and team informed with real-time notifications via push, email, and SMS integrations.",
      features: [
        "Instant order and activity alerts",
        "Custom push notifications",
        "Email & SMS integration",
        "User preference management",
        "System health notifications",
        "Alert logs and analytics",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: <ShoppingBag className="h-6 w-6 text-primary" />,
      title: "Shopping Cart",
      description: "Persistent cart with save for later",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "One-Click Checkout",
      description: "Streamlined checkout process",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Guest Checkout",
      description: "No account required to purchase",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Order Notifications",
      description: "Automated email & SMS alerts",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Inventory Alerts",
      description: "Low stock notifications",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Multi-Language",
      description: "Support for 50+ languages",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "QR Code Payments",
      description: "Mobile payment solutions",
    },
    {
      icon: <Search className="h-6 w-6 text-primary" />,
      title: "Product Comparison",
      description: "Side-by-side product comparison",
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "Tax Calculation",
      description: "Automated tax computation",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Age Verification",
      description: "Compliance for restricted products",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "A/B Testing",
      description: "Optimize conversion rates",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Real-time Sync",
      description: "Instant inventory updates",
    },
  ];

  // Carousel images
  const carouselImages = [
    {
      src: "/ecommerce-customer-3.png",
      alt: "Features Dashboard Preview",
    },
    {
      src: "/ecommerce-customer-1.png",
      alt: "Product Management Interface",
    },
    {
      src: "/ecommerce-customer-2.jpg",
      alt: "Analytics Dashboard",
    },
    {
      src: "/ecommerce-customer-3.png",
      alt: "Analytics Dashboard",
    },
    {
      src: "/ecommerce-customer-4.jpg",
      alt: "Analytics Dashboard",
    },
    {
      src: "/ecommerce-customer-5.jpg",
      alt: "Analytics Dashboard",
    },
    {
      src: "/ecommerce-customer-6.jpg",
      alt: "Analytics Dashboard",
    },
    {
      src: "/ecommerce-customer-7.png",
      alt: "Analytics Dashboard",
    },
  ];

  // Carousel component
  const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      setCurrentIndex((prev) =>
        prev === 0 ? carouselImages.length - 1 : prev - 1
      );
    };

    const nextSlide = () => {
      setCurrentIndex((prev) =>
        prev === carouselImages.length - 1 ? 0 : prev + 1
      );
    };

    return (
      <div className="relative">
        <div className="relative w-full overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselImages.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1000}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            🚀 All Features Included
          </Badge>
          <h1 className="heading">
            Powerful Features for{" "}
            {/* <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> */}
            Modern Commerce
            {/* </span> */}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Everything you need to build, manage, and scale your ecommerce
            business. From inventory management to advanced analytics,
            we&apos;ve got you covered.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
          >
            Get in touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed to help you succeed in today&apos;s
              competitive market
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white"
              >
                <CardContent className="p-0">
                  <div className="text-blue-600 mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ecommerce Essentials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete Ecommerce Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run a successful online store, from product
              management to customer support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Storefront</h3>
                <p className="text-sm text-gray-600">
                  Beautiful, responsive online store
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Payments</h3>
                <p className="text-sm text-gray-600">
                  Secure payment processing
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Orders</h3>
                <p className="text-sm text-gray-600">
                  Complete order management
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Customers</h3>
                <p className="text-sm text-gray-600">
                  Customer relationship management
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Frontend Features
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Responsive product catalog
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Advanced search & filtering
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Shopping cart & wishlist
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    User accounts & profiles
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Product reviews & ratings
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Live chat support</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Backend Features
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Admin dashboard</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Inventory management</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Order processing</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Customer management</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Analytics & reporting</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Marketing tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Demo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600">
              Experience the power of our platform with an interactive demo
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-4">
              <Carousel />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              And Much More
            </h2>
            <p className="text-xl text-gray-600">
              Additional tools to supercharge your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white"
              >
                <CardContent className="p-0">
                  <div className="text-blue-600 mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-Kids2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for Scale & Performance
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade architecture that grows with your business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  High Performance
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sub-second page load times</li>
                  <li>• Global CDN distribution</li>
                  <li>• Optimized database queries</li>
                  <li>• Image compression & lazy loading</li>
                  <li>• Caching at multiple levels</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Security First
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• SSL/TLS encryption</li>
                  <li>• PCI DSS compliance</li>
                  <li>• Regular security audits</li>
                  <li>• DDoS protection</li>
                  <li>• Secure API endpoints</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Scalable Infrastructure
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Auto-scaling servers</li>
                  <li>• Load balancing</li>
                  <li>• 99.9% uptime SLA</li>
                  <li>• Microservices architecture</li>
                  <li>• Real-time monitoring</li>
                </ul>
              </CardContent>
            </Card>
            {/* Store Management */}
            <Card className="p-8 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Store className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Store Management
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Manage product inventory</li>
                  <li>• Track and fulfill orders</li>
                  <li>• Real-time stock updates</li>
                  <li>• Category & attribute controls</li>
                  <li>• Sales reporting & analytics</li>
                </ul>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="p-8 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Bell className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Notifications
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Instant order updates</li>
                  <li>• Custom push notifications</li>
                  <li>• Email & SMS integrations</li>
                  <li>• Activity and alert logs</li>
                  <li>• User preference management</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-primary to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready for Enterprise</h3>
              <p className="text-white mb-6 max-w-2xl mx-auto">
                Handle millions of products, thousands of concurrent users, and
                process high-volume transactions with confidence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">1M+</div>
                  <div className="text-blue-100">Products Supported</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-blue-100">Concurrent Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-blue-100">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-blue-100">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect with your favorite tools and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-4">
                Payment Gateways
              </h3>
              <div className="space-y-2 text-gray-600">
                <div>Stripe</div>
                <div>PayPal</div>
                <div>Square</div>
                <div>Authorize.Net</div>
                <div>Klarna</div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-4">
                Shipping Partners
              </h3>
              <div className="space-y-2 text-gray-600">
                <div>FedEx</div>
                <div>UPS</div>
                <div>DHL</div>
                <div>USPS</div>
                <div>ShipStation</div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-4">
                Marketing Tools
              </h3>
              <div className="space-y-2 text-gray-600">
                <div>Mailchimp</div>
                <div>Klaviyo</div>
                <div>Google Analytics</div>
                <div>Facebook Pixel</div>
                <div>HubSpot</div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-4">Marketplaces</h3>
              <div className="space-y-2 text-gray-600">
                <div>Amazon</div>
                <div>eBay</div>
                <div>Etsy</div>
                <div>Facebook Shop</div>
                <div>Google Shopping</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white mb-8">
            Try all features free for 14 days. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
