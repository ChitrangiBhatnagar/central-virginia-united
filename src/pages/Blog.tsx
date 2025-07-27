import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  Search, 
  Calendar, 
  User, 
  ArrowRight, 
  Phone, 
  Globe, 
  Shield,
  BarChart3,
  Users,
  Zap,
  Clock,
  TrendingUp
} from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Future of Cloud Telephony: 5 Trends Shaping 2025",
    excerpt: "Discover how AI, 5G, and edge computing are revolutionizing business communications worldwide.",
    author: "Sarah Chen",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "📡"
  };

  const blogPosts = [
    {
      title: "Cloud Telephony vs Traditional VoIP: Complete Comparison Guide",
      excerpt: "Understanding the key differences and why cloud telephony is the future of business communication.",
      author: "Michael Rodriguez",
      date: "March 12, 2025",
      readTime: "6 min read",
      category: "Technology",
      icon: Phone
    },
    {
      title: "How to Manage Remote Sales Teams with Global Calling",
      excerpt: "Best practices for coordinating distributed teams across time zones with cloud telephony.",
      author: "Emily Park",
      date: "March 10, 2025",
      readTime: "7 min read",
      category: "Sales Strategy",
      icon: Users
    },
    {
      title: "Telecom Compliance Made Easy with iGCT",
      excerpt: "Navigate GDPR, HIPAA, and international regulations with confidence using our platform.",
      author: "David Kim",
      date: "March 8, 2025",
      readTime: "5 min read",
      category: "Compliance",
      icon: Shield
    },
    {
      title: "ROI Calculator: Measuring Your Cloud Telephony Investment",
      excerpt: "Learn how to calculate and maximize your return on investment with cloud telephony solutions.",
      author: "Lisa Thompson",
      date: "March 5, 2025",
      readTime: "9 min read",
      category: "Business",
      icon: BarChart3
    },
    {
      title: "Global Number Strategy: Localizing Your International Presence",
      excerpt: "How virtual numbers in local markets can boost your international customer trust and conversion.",
      author: "James Wilson",
      date: "March 3, 2025",
      readTime: "6 min read",
      category: "Global Strategy",
      icon: Globe
    },
    {
      title: "AI-Powered Call Analytics: Insights That Drive Results",
      excerpt: "Harness the power of AI to understand call patterns, customer behavior, and sales performance.",
      author: "Rachel Martinez",
      date: "March 1, 2025",
      readTime: "8 min read",
      category: "AI & Analytics",
      icon: Zap
    },
    {
      title: "Scaling Customer Support Globally: Best Practices",
      excerpt: "Essential strategies for providing world-class customer support across multiple time zones.",
      author: "Alex Johnson",
      date: "February 28, 2025",
      readTime: "7 min read",
      category: "Customer Success",
      icon: Users
    },
    {
      title: "Security in Cloud Communications: What You Need to Know",
      excerpt: "Comprehensive guide to ensuring your cloud telephony solution meets enterprise security standards.",
      author: "Mark Chen",
      date: "February 25, 2025",
      readTime: "10 min read",
      category: "Security",
      icon: Shield
    },
    {
      title: "The Economics of International Calling: Cost Optimization Strategies",
      excerpt: "Practical tips to reduce international calling costs while maintaining high-quality connections.",
      author: "Jennifer Adams",
      date: "February 22, 2025",
      readTime: "6 min read",
      category: "Cost Management",
      icon: TrendingUp
    }
  ];

  const categories = [
    "All Posts",
    "Technology", 
    "Sales Strategy",
    "Compliance",
    "Business",
    "Global Strategy",
    "AI & Analytics",
    "Customer Success",
    "Security",
    "Cost Management"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-telecom-light via-white to-accent/20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              📚 Knowledge Hub
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-telecom-dark">
              Insights & Expertise
              <span className="text-primary block">from Industry Leaders</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay ahead of the curve with expert insights, best practices, and industry trends in cloud telephony and global communications.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 py-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Telecom Insights Backlink */}
      <section className="py-6 bg-primary/5 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Enhanced with industry insights from{" "}
              <a 
                href="https://salescentri.com/blog/?utm_source=centralvirginiaunited.com&utm_medium=blog&utm_campaign=telecom_insights"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Salescentri's Research & Analytics Team
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-telecom-dark mb-4">Featured Article</h2>
            </div>
            
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="bg-primary/10 text-primary border-primary/20 w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-3xl font-bold text-telecom-dark mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button size="lg" className="w-fit">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <div className="bg-telecom-light/50 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-8xl">{featuredPost.image}</div>
                    <h4 className="text-xl font-semibold text-telecom-dark">
                      Industry Leading Research
                    </h4>
                    <p className="text-muted-foreground">
                      Deep insights from our team of telecom experts
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-telecom-light/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <post.icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-3">
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full justify-between p-0 h-auto">
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-telecom-light/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-dark">
              Stay Updated with Industry Insights
            </h2>
            <p className="text-xl text-muted-foreground">
              Get the latest articles, trends, and best practices delivered to your inbox weekly.
            </p>
            
            <div className="max-w-md mx-auto flex space-x-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Join 10,000+ professionals already subscribed. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Put These Insights to Work?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Transform your global communication strategy with our cloud telephony platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/pricing">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;