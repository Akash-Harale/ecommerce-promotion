"use client"

import Navigation from "@/components/shared/navigation"
import Footer from "@/components/shared/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, X } from "lucide-react"
import { useState } from "react"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const pricingPlans = [
    {
      name: "Starter",
      monthlyPrice: 29,
      annualPrice: 24,
      description: "Perfect for small businesses just getting started",
      features: [
        "Up to 100 products",
        "Basic analytics dashboard",
        "Email support",
        "Mobile responsive themes",
        "SSL certificate",
        "Payment gateway integration",
        "Basic SEO tools",
      ],
      limitations: ["Limited customization", "Basic reporting only", "No API access"],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      monthlyPrice: 79,
      annualPrice: 65,
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Unlimited products",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom themes & branding",
        "Multi-channel selling",
        "Abandoned cart recovery",
        "Advanced SEO optimization",
        "Inventory management",
        "Customer segmentation",
        "Email marketing automation",
        "Discount & coupon system",
      ],
      limitations: [],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      monthlyPrice: 199,
      annualPrice: 165,
      description: "For large businesses requiring maximum flexibility",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced API access",
        "White-label solution",
        "Custom reporting & analytics",
        "24/7 phone support",
        "Advanced security features",
        "Multi-store management",
        "Custom workflows",
        "Priority feature requests",
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to get started.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
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
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">💰 Simple, Transparent Pricing</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Choose the Perfect{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Plan for You
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Start with a free trial, then choose a plan that scales with your business. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${!isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"}`}>Monthly</span>
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
            <span className={`ml-3 ${isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"}`}>
              Annual
              <Badge className="ml-2 bg-green-100 text-green-800 text-xs">Save 20%</Badge>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative p-8 ${plan.popular ? "ring-2 ring-blue-600 shadow-xl scale-105" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600">/month</span>
                      {isAnnual && (
                        <div className="text-sm text-green-600 font-medium">
                          Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
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
                    {plan.cta === "Start Free Trial" && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Compare All Features</h2>
            <p className="text-xl text-gray-600">See what&apos;s included in each plan</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Starter</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Professional</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Products</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Up to 100</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Unlimited</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Unlimited</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Analytics</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Basic</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Advanced</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Custom</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Support</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Email</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Priority</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">24/7 Phone</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">API Access</td>
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
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing</p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Start your free trial today. No credit card required.</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
