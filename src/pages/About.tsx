import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Users, 
  Globe, 
  Award, 
  MapPin,
  ArrowRight,
  Linkedin,
  Mail,
  Target,
  Heart,
  Shield
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Michael Chen",
      role: "CEO & Founder",
      bio: "Former Twilio executive with 15+ years in telecom innovation.",
      image: "👨‍💼"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      bio: "Ex-Google engineer specializing in cloud infrastructure and AI.",
      image: "👩‍💻"
    },
    {
      name: "David Rodriguez",
      role: "VP of Sales",
      bio: "Global sales leader with expertise in B2B communication solutions.",
      image: "👨‍💼"
    },
    {
      name: "Emily Park",
      role: "Head of Customer Success",
      bio: "Customer experience expert ensuring client success worldwide.",
      image: "👩‍💼"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We continuously push the boundaries of what's possible in cloud telephony."
    },
    {
      icon: Heart,
      title: "Customer Obsessed",
      description: "Every decision we make is driven by our commitment to customer success."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We maintain the highest standards of security and compliance globally."
    },
    {
      icon: Globe,
      title: "Global Mindset",
      description: "We think globally and act locally to serve businesses worldwide."
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to democratize global communication"
    },
    {
      year: "2020",
      title: "First Million Minutes",
      description: "Processed our first million call minutes across 50 countries"
    },
    {
      year: "2021",
      title: "AI Integration",
      description: "Launched AI-powered call optimization and analytics"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to 100+ countries with local number support"
    },
    {
      year: "2023",
      title: "Enterprise Scale",
      description: "Serving Fortune 500 companies with enterprise-grade security"
    },
    {
      year: "2024",
      title: "Next Generation",
      description: "Launched iGCT 2.0 with advanced CRM integrations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-telecom-light via-white to-accent/20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              🚀 Our Story
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-telecom-dark">
              Connecting the World
              <span className="text-primary block">One Call at a Time</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to make global business communication as simple as a local phone call. Founded in Atlanta, serving the world.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Credibility Backlink */}
      <section className="py-6 bg-primary/5 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Verified partner network powered by{" "}
              <a 
                href="https://salescentri.com/about/?utm_source=centralvirginiaunited.com&utm_medium=about&utm_campaign=verified_partners"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Salescentri's Partner Verification System
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-telecom-dark">
                Our Journey to Global Scale
              </h2>
              <p className="text-muted-foreground text-lg">
                Centralvirginiaunited Solutions was born from a simple observation: global business communication was still stuck in the past. High costs, poor quality, and complex setups were barriers to growth.
              </p>
              <p className="text-muted-foreground">
                Our founders, veterans from companies like Twilio and Google, came together with a vision to democratize global communication. We wanted to make it as easy for a startup in Atlanta to call customers in Tokyo as it is to call across the street.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to serve thousands of companies worldwide, processing millions of minutes monthly across our global infrastructure. But we're just getting started.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500K+</div>
                  <div className="text-sm text-muted-foreground">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100M+</div>
                  <div className="text-sm text-muted-foreground">Minutes Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-telecom-dark">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To eliminate communication barriers and empower businesses to connect globally with the same ease and quality as local calls.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-telecom-dark">Our Vision</h3>
                  <p className="text-muted-foreground">
                    A world where geography is no longer a barrier to business communication and collaboration.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-telecom-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-dark">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-telecom-dark">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-dark">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0">
                    <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-lg font-bold">
                      {milestone.year}
                    </Badge>
                  </div>
                  <Card className="flex-1 border-none shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-telecom-dark mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-telecom-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-dark">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind Centralvirginiaunited Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-none shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="text-6xl">{member.image}</div>
                  <div>
                    <h3 className="font-bold text-telecom-dark">{member.name}</h3>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                  <div className="flex justify-center space-x-2">
                    <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    <Mail className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-telecom-dark">
                Based in Atlanta, Serving the World
              </h2>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground">
                    <strong>Headquarters</strong><br />
                    1234 Peachtree Street<br />
                    Atlanta, GA 30309<br />
                    United States
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Atlanta's thriving tech ecosystem provides the perfect base for our global operations. From here, we serve customers across six continents while maintaining our Southern hospitality and commitment to customer service.
              </p>
              <Button asChild>
                <a href="https://salescentri.com/contact">
                  Visit Our Office
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="bg-telecom-light rounded-lg p-6 text-center space-y-4">
                  <div className="text-6xl">🏢</div>
                  <h3 className="text-xl font-bold text-telecom-dark">Our Atlanta Office</h3>
                  <p className="text-muted-foreground">
                    State-of-the-art facility in the heart of Atlanta's tech district
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Operations</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Team Members</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Join Our Story?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Whether you're a potential customer, partner, or team member, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://salescentri.com/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="https://salescentri.com/pricing">View Pricing</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;