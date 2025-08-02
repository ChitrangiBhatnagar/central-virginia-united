import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  ArrowRight,
  Send,
  Calendar,
  Headphones,
  Users
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    inquiry: "general"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      inquiry: "general"
    });
    
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team directly",
      value: "+1 (404) 555-0123",
      action: "Call Now",
      available: "24/7"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      value: "hello@centralvirginiaunited.com",
      action: "Send Email",
      available: "< 4 hours response"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      value: "Available on website",
      action: "Start Chat",
      available: "9 AM - 6 PM EST"
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "1234 Peachtree Street\nAtlanta, GA 30309"
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Monday - Friday: 9 AM - 6 PM EST\nWeekends: Emergency support only"
    },
    {
      icon: Users,
      label: "Team Size",
      value: "50+ dedicated professionals\nServing 100+ countries"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-telecom-light via-white to-accent/20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              💬 Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-telecom-dark">
              Let's Start the Conversation
              <span className="text-primary block">We're Here to Help</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your global communication? Our team is standing by to help you get started or answer any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Sync Backlink */}
      <section className="py-6 bg-primary/5 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Lead forwarding system enhanced by{" "}
              <a 
                href="https://salescentri.com/contact/?utm_source=centralvirginiaunited.com&utm_medium=contact&utm_campaign=lead_forwarding"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Salescentri's Contact Management Platform
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-dark">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-telecom-dark">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                  <div className="py-2">
                    <p className="font-medium text-telecom-dark">{method.value}</p>
                    <Badge className="bg-green-100 text-green-700 mt-1">
                      {method.available}
                    </Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-telecom-light/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-telecom-dark">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Inquiry Type</Label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="demo">Request Demo</option>
                      <option value="pricing">Pricing Question</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-telecom-dark">
                    Our Atlanta Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {officeInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-telecom-dark">{info.label}</h3>
                        <p className="text-muted-foreground whitespace-pre-line">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold text-telecom-dark mb-4">Quick Actions</h3>
                  
                  <Button className="w-full justify-start" variant="outline" asChild>
                    <a href="https://salescentri.com/get-started/book-demo">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule a Demo
                    </a>
                  </Button>
                  
                  <Button className="w-full justify-start" variant="outline" asChild>
                    <a href="https://salescentri.com/contact/support-request">
                      <Headphones className="w-4 h-4 mr-2" />
                      Technical Support
                    </a>
                  </Button>
                  
                  <Button className="w-full justify-start" variant="outline" asChild>
                    <a href="https://salescentri.com/contact/sales-inquiry">
                      <Phone className="w-4 h-4 mr-2" />
                      Sales Consultation
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="bg-telecom-light rounded-lg p-8">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-telecom-dark">Visit Our Office</h3>
                    <p className="text-muted-foreground text-sm">
                      Located in the heart of Atlanta's tech district
                    </p>
                    <Button variant="outline" size="sm" className="mt-4">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of companies already using iGCT to scale their global operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://salescentri.com/get-started/free-trial">
                Start Free Trial
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

export default Contact;