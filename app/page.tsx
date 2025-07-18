"use client";

import type React from "react";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  // Star,
  Users,
  ShoppingBag,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Play,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  CreditCard,
  Smartphone,
  Search,
  Mail,
  Settings,
  // Quote,
  // MapPin,
  Phone,
  Clock,
  MessageCircle,
  Headphones,
  CheckCircle,
  Bell,
  Store,
  // X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Navigation from "@/components/shared/navigation";
import Footer from "@/components/shared/footer";

export default function EcommerceLanding() {
  const webCarouselImages = [
    { src: "/admin-dashboard.png", alt: "Web App - Dashboard" },
    { src: "/ecommerce-customer-1.png", alt: "Web App - Dashboard" },
    { src: "/ecommerce-customer-2.jpg", alt: "Web App - Products" },
    { src: "/ecommerce-customer-3.png", alt: "Web App - Orders" },
  ];
  const mpbileCarouselImages = [
    { src: "/mobile-app-1.jpeg", alt: "Web App - Dashboard" },
    { src: "/mobile-app-2.jpeg", alt: "Web App - Dashboard" },
  ];

  const logisticsCarouselImages = [
    { src: "/logistic-1.png", alt: "Logistics App - Overview" },
    { src: "/logistic-2.png", alt: "Logistics App - Delivery Map" },
    { src: "/logistic-3.png", alt: "Logistics App - Fleet Tracking" },
  ];

  const Carousel = ({ images }: { images: { src: string; alt: string }[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
      <div className="relative">
        <div className="relative w-full h-[720px] overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1280}
                  height={720}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
      </div>
    );
  };
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);
  // const [isAnnual, setIsAnnual] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const testimonials = [
  //   {
  //     name: "Sarah Johnson",
  //     role: "CEO, Fashion Forward",
  //     company: "Fashion Forward",
  //     content:
  //       "CommerceMax transformed our online business completely. The analytics dashboard helped us identify our best-selling products and optimize our inventory. Sales increased by 300% in just 3 months!",
  //     avatar: "/placeholder.svg?height=80&width=80",
  //     rating: 5,
  //     results: "300% increase in sales",
  //   },
  //   {
  //     name: "Mike Chen",
  //     role: "Founder, Tech Gadgets",
  //     company: "Tech Gadgets Pro",
  //     content:
  //       "The inventory management and analytics features are absolutely game-changing. We can now predict demand accurately and never run out of stock. The customer support is exceptional too.",
  //     avatar: "/placeholder.svg?height=80&width=80",
  //     rating: 5,
  //     results: "Zero stockouts achieved",
  //   },
  //   {
  //     name: "Emily Rodriguez",
  //     role: "Owner, Artisan Crafts",
  //     company: "Handmade Haven",
  //     content:
  //       "As a small business owner, I was worried about the complexity, but CommerceMax made everything so easy. The templates are beautiful, and the SEO tools helped us rank #1 for our main keywords.",
  //     avatar: "/placeholder.svg?height=80&width=80",
  //     rating: 5,
  //     results: "#1 Google ranking",
  //   },
  //   {
  //     name: "David Park",
  //     role: "Marketing Director, Sports Gear",
  //     company: "Athletic Pro",
  //     content:
  //       "The multi-channel selling feature allowed us to expand to Amazon and eBay seamlessly. Our revenue streams diversified, and we&apos;re now selling 40% more across all platforms.",
  //     avatar: "/placeholder.svg?height=80&width=80",
  //     rating: 5,
  //     results: "40% revenue increase",
  //   },
  //   {
  //     name: "Lisa Thompson",
  //     role: "E-commerce Manager, Beauty Brand",
  //     company: "Glow Beauty",
  //     content:
  //       "The abandoned cart recovery feature alone paid for our subscription. We&apos;re recovering 35% of abandoned carts and the email automation saves us hours every week.",
  //     avatar: "/placeholder.svg?height=80&width=80",
  //     rating: 5,
  //     results: "35% cart recovery rate",
  //   },
  // ];

  const mainFeatures = [
    {
      icon: <ShoppingBag className="h-12 w-12" />,
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
      icon: <CreditCard className="h-12 w-12" />,
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
      icon: <TrendingUp className="h-12 w-12" />,
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
      icon: <Users className="h-12 w-12" />,
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
      icon: <Smartphone className="h-12 w-12" />,
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
      icon: <BarChart3 className="h-12 w-12" />,
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
      icon: <Search className="h-12 w-12" />,
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
      icon: <Mail className="h-12 w-12" />,
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
      icon: <Globe className="h-12 w-12" />,
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
      icon: <Shield className="h-12 w-12" />,
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
      icon: <Settings className="h-12 w-12" />,
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
      icon: <Zap className="h-12 w-12" />,
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
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Shopping Cart",
      description: "Persistent cart with save for later",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "One-Click Checkout",
      description: "Streamlined checkout process",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Guest Checkout",
      description: "No account required to purchase",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Order Notifications",
      description: "Automated email & SMS alerts",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Inventory Alerts",
      description: "Low stock notifications",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-Language",
      description: "Support for 50+ languages",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "QR Code Payments",
      description: "Mobile payment solutions",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Product Comparison",
      description: "Side-by-side product comparison",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Tax Calculation",
      description: "Automated tax computation",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Age Verification",
      description: "Compliance for restricted products",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "A/B Testing",
      description: "Optimize conversion rates",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Sync",
      description: "Instant inventory updates",
    },
  ];

  // const pricingPlans = [
  //   {
  //     name: "Starter",
  //     monthlyPrice: 29,
  //     annualPrice: 24,
  //     description: "Perfect for small businesses just getting started",
  //     features: [
  //       "Up to 100 products",
  //       "Basic analytics dashboard",
  //       "Email support",
  //       "Mobile responsive themes",
  //       "SSL certificate",
  //       "Payment gateway integration",
  //       "Basic SEO tools",
  //     ],
  //     limitations: [
  //       "Limited customization",
  //       "Basic reporting only",
  //       "No API access",
  //     ],
  //     popular: false,
  //     cta: "Start Free Trial",
  //   },
  //   {
  //     name: "Professional",
  //     monthlyPrice: 79,
  //     annualPrice: 65,
  //     description: "Ideal for growing businesses with advanced needs",
  //     features: [
  //       "Unlimited products",
  //       "Advanced analytics & reporting",
  //       "Priority support",
  //       "Custom themes & branding",
  //       "Multi-channel selling",
  //       "Abandoned cart recovery",
  //       "Advanced SEO optimization",
  //       "Inventory management",
  //       "Customer segmentation",
  //       "Email marketing automation",
  //       "Discount & coupon system",
  //     ],
  //     limitations: [],
  //     popular: true,
  //     cta: "Start Free Trial",
  //   },
  //   {
  //     name: "Enterprise",
  //     monthlyPrice: 199,
  //     annualPrice: 165,
  //     description: "For large businesses requiring maximum flexibility",
  //     features: [
  //       "Everything in Professional",
  //       "Custom integrations",
  //       "Dedicated account manager",
  //       "Advanced API access",
  //       "White-label solution",
  //       "Custom reporting & analytics",
  //       "24/7 phone support",
  //       "Advanced security features",
  //       "Multi-store management",
  //       "Custom workflows",
  //       "Priority feature requests",
  //     ],
  //     limitations: [],
  //     popular: false,
  //     cta: "Contact Sales",
  //   },
  // ];

  // const stats = [
  //   { number: "50,000+", label: "Happy Customers" },
  //   { number: "4.9/5", label: "Average Rating" },
  //   { number: "$2.5B+", label: "Sales Processed" },
  //   { number: "99.9%", label: "Customer Satisfaction" },
  // ];

  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      contact: "support@commercemax.com",
      action: "Send Email",
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Phone Support",
      description: "Speak with our experts directly",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available 24/7",
      action: "Start Chat",
    },
  ];

  const supportOptions = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Sales Team",
      description: "Questions about pricing and plans",
      availability: "Mon-Fri, 9AM-6PM PST",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Technical Support",
      description: "Help with setup and troubleshooting",
      availability: "24/7 Support Available",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Customer Success",
      description: "Guidance on growing your business",
      availability: "Mon-Fri, 8AM-8PM PST",
    },
  ];

  // const officeLocations = [
  //   {
  //     city: "San Francisco",
  //     address: "123 Market Street, Suite 100",
  //     zipcode: "San Francisco, CA 94105",
  //     phone: "+1 (555) 123-4567",
  //   },
  //   {
  //     city: "New York",
  //     address: "456 Broadway, Floor 20",
  //     zipcode: "New York, NY 10013",
  //     phone: "+1 (555) 987-6543",
  //   },
  //   {
  //     city: "London",
  //     address: "789 Oxford Street",
  //     zipcode: "London, UK W1C 1JN",
  //     phone: "+44 20 7123 4567",
  //   },
  // ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, we offer a 14-day free trial for all plans. No credit card required to get started.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period.",
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer:
        "Yes, we offer custom solutions for large enterprises. Contact our sales team to discuss your specific requirements.",
    },
  ];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  //   }, 6000);
  //   return () => clearInterval(timer);
  // }, [testimonials.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              🚀 New: AI-Powered Product Recommendations
            </Badge>
            <h1 className="heading">Build Your Dream Ecommerce Store</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The most powerful, user-friendly ecommerce platform that helps you
              create stunning online stores, manage inventory, and grow your
              business with advanced analytics and AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-primary hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
              >
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-gray-600">Active Stores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">$2.5B+</div>
                <div className="text-gray-600">Sales Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">150+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Hero Image/Demo */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-4">
              <Image
                src="/hero-image.png"
                alt="Ecommerce Dashboard Preview"
                width={1280}
                height={600}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* What We Provide Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading">What We Provide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In addition to a feature-rich ecommerce web application, we also
              provide native mobile applications and a dedicated logistics
              application to support your business end-to-end.
            </p>
          </div>
          <div className="space-y-16">
            <div className="text-center ">
              <div className="shadow-2xl rounded-3xl  h-50 sm:h-80 md:h-[580px] lg:h-full w-full max-w-full mx-auto">
                <Carousel images={webCarouselImages} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mt-6">
                Web Application
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Full-featured ecommerce platform for both admin and customer
                with real-time dashboard.
              </p>
            </div>
            <div className="text-center">
              <div className="shadow-2xl rounded-3xl h-50 not-sm:h-70 sm:h-80 md:h-[580px] lg:h-full w-full max-w-full mx-auto">
                <Carousel images={mpbileCarouselImages} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mt-6">
                Mobile Application
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Native mobile apps for Android and iOS with seamless checkout
                and product browsing.
              </p>
            </div>
            <div className="text-center ">
              <div className="shadow-2xl rounded-3xl h-50 sm:h-80 md:h-[580px] lg:h-full w-full max-w-full mx-auto">
                <Carousel images={logisticsCarouselImages} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mt-6">
                Logistics Application
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Manage your deliveries and supply chain with our powerful
                logistics dashboard and app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              🚀 All Features Included
            </Badge>
            <h2 className="heading">Powerful Features for Modern Commerce</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, manage, and scale your ecommerce
              business. From inventory management to advanced analytics,
              we&apos;ve got you covered.
            </p>
          </div>

          {/* Main Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {mainFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white"
              >
                <CardContent className="p-0">
                  <div className="text-primary mb-6">{feature.icon}</div>
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

          {/* Additional Features Grid */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                And Much More
              </h3>
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
                    <div className="text-primary mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Architecture */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-16">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Built for Scale & Performance
              </h3>
              <p className="text-xl text-gray-600">
                Enterprise-grade architecture that grows with your business
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 bg-white">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    High Performance
                  </h4>
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
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Security First
                  </h4>
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
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Scalable Infrastructure
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Auto-scaling servers</li>
                    <li>• Load balancing</li>
                    <li>• 99.9% uptime SLA</li>
                    <li>• Microservices architecture</li>
                    <li>• Real-time monitoring</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary rounded-2xl p-8 text-white">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4">
                  Ready for Enterprise
                </h4>
                <p className=" mb-6 max-w-2xl mx-auto">
                  Handle millions of products, thousands of concurrent users,
                  and process high-volume transactions with confidence.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold">1M+</div>
                    <div>Products Supported</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">10K+</div>
                    <div>Concurrent Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">99.9%</div>
                    <div>Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">24/7</div>
                    <div>Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section
        id="pricing"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              💰 Simple, Transparent Pricing
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose the Perfect{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Plan for You
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Start with a free trial, then choose a plan that scales with your
              business. No hidden fees, no surprises.
            </p>

            <div className="flex items-center justify-center mb-12">
              <span
                className={`mr-3 ${
                  !isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? "bg-blue-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`ml-3 ${
                  isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"
                }`}
              >
                Annual
                <Badge className="ml-2 bg-green-100 text-green-800 text-xs">
                  Save 20%
                </Badge>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative p-8 bg-white ${
                  plan.popular ? "ring-2 ring-blue-600 shadow-xl scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600">/month</span>
                      {isAnnual && (
                        <div className="text-sm text-green-600 font-medium">
                          Save ${(plan.monthlyPrice - plan.annualPrice) * 12}
                          /year
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <li key={limitationIndex} className="flex items-center">
                        <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-500">{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    {plan.cta}
                    {plan.cta === "Start Free Trial" && (
                      <ArrowRight className="ml-2 h-4 w-4" />
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Compare All Features
              </h3>
              <p className="text-gray-600">
                See what&apos;s included in each plan
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Features
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Starter
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Professional
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Products
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      Up to 100
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      Unlimited
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      Unlimited
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Analytics
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      Basic
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      Advanced
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      Custom
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Support</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      Email
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      Priority
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      24/7 Phone
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      API Access
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section> */}

      {/* Reviews Section */}
      {/* <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              ⭐ 4.9/5 Average Rating
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Loved by{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                50,000+ Businesses
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              See what our customers have to say about their success with
              CommerceMax. Real stories, real results.
            </p>

            Stats
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

          <div className="relative mb-20">
            <Card className="p-8 lg:p-12 text-center bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <CardContent className="p-0">
                <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
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

          <div className="flex justify-center mb-16 space-x-2">
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

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-600 mb-12">
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
        </div>
      </section> */}

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              💬 We&apos;re Here to Help
            </Badge>
            <h2 className="heading">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-white"
              >
                <CardContent className="p-0">
                  <div className="text-primary mb-4 flex justify-center">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="font-semibold text-gray-900 mb-4">
                    {method.contact}
                  </p>
                  <Button className="bg-primary hover:from-blue-700 hover:to-purple-700">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          {isSubmitted ? (
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Thank You!
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  We&apos;ve received your message and will get back to you
                  within 24 hours.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Send Another Message
                </Button>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Send Us a Message
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you soon
                </p>
              </div>

              <Card className="p-8 bg-white">
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:from-blue-700 hover:to-purple-700"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Support Options */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Support Options
              </h3>
              <p className="text-gray-600">Get the right help for your needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {supportOptions.map((option, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-white"
                >
                  <CardContent className="p-0">
                    <div className="text-primary mb-4 flex justify-center">
                      {option.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {option.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      {option.availability}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Office Locations */}
          {/* <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Our Offices
              </h3>
              <p className="text-gray-600">
                Visit us at one of our global locations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {officeLocations.map((office, index) => (
                <Card key={index} className="p-6 bg-white">
                  <CardContent className="p-0">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {office.city}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">{office.address}</p>
                          <p className="text-gray-700">{office.zipcode}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-400 mr-3" />
                        <p className="text-gray-700">{office.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and platform
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FF5A5F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful businesses already using CommerceMax.
            Start your free trial today!
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
