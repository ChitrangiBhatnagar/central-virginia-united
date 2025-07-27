import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Globe, 
  BarChart3, 
  Headphones, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle,
  ArrowRight,
  Mic,
  Settings,
  Database,
  Clock
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Phone,
      title: "Smart Dialers",
      description: "AI-powered calling with intelligent routing",
      features: [
        "Predictive dialing algorithms",
        "Real-time call optimization",
        "Automatic retry logic",
        "Local presence dialing"
      ]
    },
    {
      icon: Globe,
      title: "Virtual Global Numbers",
      description: "Local numbers in 100+ countries",
      features: [
        "Instant number activation",
        "Local caller ID",
        "Number porting support",
        "SMS capabilities"
      ]
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive call insights and reporting",
      features: [
        "Live call monitoring",
        "Performance dashboards",
        "Custom reporting",
        "Export capabilities"
      ]
    },
    {
      icon: Headphones,
      title: "CRM Integrations",
      description: "Seamless integration with leading platforms",
      features: [
        "Salesforce integration",
        "HubSpot compatibility",
        "Zoho connectivity",
        "Custom API support"
      ]
    }
  ];

  const integrations = [
    {
      name: "Salesforce",
      description: "Complete call logging and contact sync",
      logo: "🏢"
    },
    {
      name: "HubSpot",
      description: "Automated lead tracking and scoring",
      logo: "🎯"
    },
    {
      name: "Zoho",
      description: "Unified customer communication",
      logo: "📊"
    },
    {
      name: "Freshsales",
      description: "Enhanced sales pipeline management",
      logo: "🌟"
    },
    {
      name: "Copper",
      description: "Google Workspace integration",
      logo: "⚡"
    },
    {
      name: "Pipedrive",
      description: "Visual sales pipeline tracking",
      logo: "📈"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-telecom-light via-white to-accent/20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              ✨ iGCT Platform Features
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-telecom-dark">
              Enterprise-Grade Cloud Telephony
              <span className="text-primary block">Built for Global Scale</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how iGCT transforms your communication infrastructure with AI-powered features, global reach, and seamless integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/pricing">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Integration Showcase */}
      <section className="py-6 bg-primary/5 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Enhanced CRM voice synchronization powered by{" "}
              <a 
                href="https://salescentri.com/features/?utm_source=centralvirginiaunited.com&utm_medium=features&utm_campaign=crm_voice_sync"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Salescentri's Advanced Integration Platform
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-dark">
              Core Platform Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run a global communication operation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-telecom-dark">{feature.title}</CardTitle>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="py-20 bg-telecom-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-dark">
              Explore Advanced Capabilities
            </h2>
          </div>

          <Tabs defaultValue="ai" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="ai">AI Features</TabsTrigger>
              <TabsTrigger value="global">Global Reach</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ai" className="mt-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <Zap className="w-8 h-8 text-primary" />
                        <h3 className="text-2xl font-bold text-telecom-dark">AI-Enhanced Calling</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Our AI engine optimizes call quality, reduces latency, and provides real-time insights to improve your team's performance.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Real-time noise cancellation</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Intelligent call routing</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Conversation analytics</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Predictive dialing optimization</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Call Quality Score</span>
                          <Badge className="bg-green-100 text-green-700">98.5%</Badge>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '98.5%' }}></div>
                        </div>
                        <div className="text-xs text-muted-foreground">AI-optimized in real-time</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="global" className="mt-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <Globe className="w-8 h-8 text-primary" />
                        <h3 className="text-2xl font-bold text-telecom-dark">Global Infrastructure</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Connect with customers worldwide using our extensive network of local numbers and optimized routing.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">100+</div>
                          <div className="text-sm text-muted-foreground">Countries</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">500+</div>
                          <div className="text-sm text-muted-foreground">Area Codes</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-6">
                      <div className="space-y-3">
                        <div className="text-sm font-medium mb-3">Active Regions</div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">North America</span>
                          <Badge className="bg-green-100 text-green-700">Online</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Europe</span>
                          <Badge className="bg-green-100 text-green-700">Online</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Asia Pacific</span>
                          <Badge className="bg-green-100 text-green-700">Online</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Latin America</span>
                          <Badge className="bg-green-100 text-green-700">Online</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="mt-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <BarChart3 className="w-8 h-8 text-primary" />
                        <h3 className="text-2xl font-bold text-telecom-dark">Advanced Analytics</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Get deep insights into your calling performance with our comprehensive analytics dashboard.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Real-time call monitoring</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Custom report builder</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Performance benchmarking</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>ROI calculations</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-6">
                      <div className="space-y-4">
                        <div className="text-sm font-medium mb-3">Today's Performance</div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm">Calls Made</span>
                            <span className="font-semibold">1,247</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Connect Rate</span>
                            <span className="font-semibold text-green-600">84.2%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Avg Duration</span>
                            <span className="font-semibold">4:32</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Cost Savings</span>
                            <span className="font-semibold text-primary">$2,847</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-8 h-8 text-primary" />
                        <h3 className="text-2xl font-bold text-telecom-dark">Enterprise Security</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Bank-grade security and compliance features to protect your communications and data.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>End-to-end encryption</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>GDPR & HIPAA compliance</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>SOC 2 Type II certified</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Multi-factor authentication</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-6">
                      <div className="space-y-4">
                        <div className="text-sm font-medium mb-3">Security Status</div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Encryption</span>
                            <Badge className="bg-green-100 text-green-700">Active</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Compliance</span>
                            <Badge className="bg-green-100 text-green-700">Verified</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Monitoring</span>
                            <Badge className="bg-green-100 text-green-700">24/7</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Backup</span>
                            <Badge className="bg-green-100 text-green-700">Redundant</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CRM Integration Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-dark">
              Seamless CRM Integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with your favorite CRM platform and sync all call data automatically
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-4xl">{integration.logo}</div>
                  <h3 className="font-semibold text-telecom-dark">{integration.name}</h3>
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
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
            Ready to Experience iGCT?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Start your free trial today and see how our platform can transform your global communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/pricing">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Book Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;