import { Check, Star } from 'lucide-react'
import { Button } from "@workspace/ui/components/button"
import Link from 'next/link'

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for getting started with AI creativity",
    features: [
      "50 AI generations per month",
      "Basic editing tools",
      "Access to stock library",
      "Community support",
      "Export up to 2K resolution",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For serious creators and professionals",
    features: [
      "500 AI generations per month",
      "Advanced editing suite",
      "Premium stock assets",
      "Priority support",
      "Export up to 4K resolution",
      "Custom AI model training",
      "Team collaboration",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for teams and businesses",
    features: [
      "Unlimited generations",
      "Full feature access",
      "Dedicated account manager",
      "24/7 phone support",
      "Unlimited resolution",
      "API access",
      "White-label options",
    ],
  },
]

export function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-semibold mb-6 tracking-wide uppercase">
            <Star size={12} className="fill-current" />
            Simple Pricing
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mb-4">
            Choose your creative plan
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            Start free, upgrade when you're ready to unlock the full power of AI creativity
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={[
                "relative rounded-3xl border p-8 bg-white shadow-sm transition-all duration-300 hover:shadow-lg",
                plan.featured
                  ? "border-orange-200 shadow-orange-900/5 scale-105 z-10"
                  : "border-stone-200",
              ].join(" ")}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1.5 bg-orange-600 text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-stone-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-stone-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-stone-500">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-stone-500">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check
                      size={16}
                      className={[
                        "mt-0.5 shrink-0",
                        plan.featured ? "text-orange-600" : "text-stone-400",
                      ].join(" ")}
                    />
                    <span className="text-stone-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link href="/dashboard">
                <Button
                  variant={plan.featured ? "default" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.name === "Free"
                    ? "Start Free"
                    : plan.name === "Pro"
                    ? "Start Free Trial"
                    : "Contact Sales"}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-sm text-stone-500">
            ✨ Trusted by 700,000+ creatives worldwide
          </p>
        </div>
      </div>
    </section>
  )
}