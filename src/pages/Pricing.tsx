import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Star, Phone, Users, BarChart3 } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 29,
      yearlyPrice: 24,
      features: [
        "500 minutes/month",
        "2 virtual numbers",
        "Basic analytics",
        "Email support",
        "CRM integration",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional", 
      description: "Ideal for growing sales teams",
      monthlyPrice: 79,
      yearlyPrice: 65,
      features: [
        "2,000 minutes/month",
        "10 virtual numbers",
        "Advanced analytics",
        "Priority support",
        "All CRM integrations",
        "Call recording",
        "AI-powered insights",
        "Team management"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      monthlyPrice: 199,
      yearlyPrice: 165,
      features: [
        "Unlimited minutes",
        "Unlimited virtual numbers",
        "Custom analytics",
        "Dedicated support",
        "White-label options",
        "Advanced security",
        "API access",
        "Custom integrations",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const features = [
    {
      icon: Phone,
      title: "Global Calling",
      description: "Make calls to 100+ countries with local rates"
    },
    {
      icon: Users,
      title: "Team Management", 
      description: "Manage your entire team from one dashboard"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights into your calling performance"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-telecom-light via-white to-accent/20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              💰 Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-telecom-dark">
              Simple, Transparent Pricing
              <span className="text-primary block">No Hidden Fees</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your team. All plans include a 14-day free trial with no credit card required.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-sm ${!isYearly ? 'text-telecom-dark font-medium' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-primary"
              />
              <span className={`text-sm ${isYearly ? 'text-telecom-dark font-medium' : 'text-muted-foreground'}`}>
                Yearly
              </span>
              {isYearly && (
                <Badge className="bg-green-100 text-green-700 ml-2">
                  Save 20%
                </Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Framework Backlink */}
      <section className="py-6 bg-primary/5 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Voice plan comparison framework enhanced by{" "}
              <a 
                href="https://salescentri.com/pricing/?utm_source=centralvirginiaunited.com&utm_medium=pricing&utm_campaign=voice_plan_comparison"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Salescentri's Pricing Intelligence
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-none shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-primary transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-telecom-dark">
                    {plan.name}
                  </CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                  
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-telecom-dark">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      <span className="text-lg font-normal text-muted-foreground">/month</span>
                    </div>
                    {isYearly && (
                      <p className="text-sm text-muted-foreground">
                        Billed annually (${(isYearly ? plan.yearlyPrice : plan.monthlyPrice) * 12}/year)
                      </p>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                    asChild
                  >
                    {plan.name === "Enterprise" ? (
                      <Link to="/contact">
                        {plan.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    ) : (
                      <Link to="/contact">
                        {plan.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 bg-telecom-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-dark">
              What's Included in Every Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All plans come with these core features to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-telecom-dark">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-dark">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-telecom-dark mb-2">
                  Can I change plans anytime?
                </h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-telecom-dark mb-2">
                  What happens if I exceed my minutes?
                </h3>
                <p className="text-muted-foreground">
                  Additional minutes are charged at competitive per-minute rates. We'll notify you when you're approaching your limit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-telecom-dark mb-2">
                  Is there a setup fee?
                </h3>
                <p className="text-muted-foreground">
                  No, there are no setup fees or hidden costs. You only pay the monthly subscription fee for your chosen plan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-telecom-dark mb-2">
                  Can I cancel anytime?
                </h3>
                <p className="text-muted-foreground">
                  Yes, you can cancel your subscription at any time. There are no cancellation fees or long-term contracts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Start Your Free Trial Today
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            No credit card required. Get full access to all features for 14 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;