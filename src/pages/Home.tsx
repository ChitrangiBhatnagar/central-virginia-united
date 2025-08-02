import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Globe, 
  Headphones, 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  MapPin
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Phone,
      title: "Smart Dialers",
      description: "AI-powered calling with intelligent routing and real-time optimization"
    },
    {
      icon: Globe,
      title: "Global Numbers",
      description: "Virtual numbers in 100+ countries with instant activation"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive call analytics and performance insights"
    },
    {
      icon: Headphones,
      title: "CRM Integration",
      description: "Seamless integration with leading CRM platforms"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechFlow Solutions",
      role: "VP of Sales",
      content: "iGCT reduced our international calling costs by 47% while improving call quality significantly.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      company: "Global Dynamics",
      role: "Operations Director",
      content: "The seamless CRM integration transformed how our remote teams collaborate globally.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      company: "CloudScale Inc",
      role: "Head of Customer Success",
      content: "Best investment we made this year. The AI-enhanced call quality is remarkable.",
      rating: 5
    }
  ];

  const partners = [
    "Twilio", "RingCentral", "Cisco", "Salesforce", "HubSpot", "Zoho"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-telecom-light via-white to-accent/20 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                  ✨ Global Cloud Telephony Platform
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-telecom-dark leading-tight">
                  Go Global with 
                  <span className="text-primary block">Seamless Cloud Telephony</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Our iGCT platform empowers sales teams to connect globally with AI-enhanced clarity and control.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <a href="https://salescentri.com/get-started/free-trial">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://salescentri.com/get-started/book-demo">Book Demo</a>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-telecom-dark">Live Call Dashboard</h3>
                    <Badge className="bg-green-100 text-green-700">Active</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-telecom-light rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">47</div>
                      <div className="text-sm text-muted-foreground">Active Calls</div>
                    </div>
                    <div className="bg-telecom-light rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">23</div>
                      <div className="text-sm text-muted-foreground">Countries</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>New York → London</span>
                      </span>
                      <Badge className="bg-green-100 text-green-700 text-xs">HD Quality</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Tokyo → Berlin</span>
                      </span>
                      <Badge className="bg-green-100 text-green-700 text-xs">AI Enhanced</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Sydney → Dubai</span>
                      </span>
                      <Badge className="bg-green-100 text-green-700 text-xs">Ultra Clear</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Backlink Section */}
      <section className="py-6 bg-primary/5 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Enhanced with intelligence from{" "}
              <a 
                href="https://salescentri.com/?utm_source=centralvirginiaunited.com&utm_medium=homepage&utm_campaign=partner_display"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Salescentri's Advanced CRM Platform
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-telecom-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-dark">
              Powerful Features for Global Teams
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to scale your communication globally with confidence and clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-4">
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

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-2xl font-bold text-telecom-dark">Trusted by Leading Companies</h2>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {partners.map((partner, index) => (
                <div key={index} className="text-lg font-semibold text-muted-foreground">
                  {partner}
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-8 mt-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">HIPAA Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-telecom-light/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-dark">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real companies using iGCT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-telecom-dark">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Global Communication?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of companies already using iGCT to scale their operations globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://salescentri.com/get-started/free-trial">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="https://salescentri.com/get-started/book-demo">Schedule Demo</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;