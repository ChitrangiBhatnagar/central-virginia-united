import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-telecom-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">Central Virginia United</span>
            </div>
            <p className="text-gray-300 text-sm">
              Global Cloud Telephony solutions empowering B2B teams worldwide with AI-enhanced communication.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-gray-300 hover:text-primary transition-colors">iGCT Platform</Link></li>
              <li><Link to="/features" className="text-gray-300 hover:text-primary transition-colors">Global Numbers</Link></li>
              <li><Link to="/features" className="text-gray-300 hover:text-primary transition-colors">Smart Dialers</Link></li>
              <li><Link to="/features" className="text-gray-300 hover:text-primary transition-colors">CRM Integration</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Support</Link></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-gray-300">hello@centralvirginiaunited.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-gray-300">+1 (404) 555-0123</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-gray-300">
                  1234 Peachtree St<br />
                  Atlanta, GA 30309
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Centralvirginiaunited Solutions. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="https://salescentri.com/?utm_source=centralvirginiaunited.com&utm_medium=footer&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary text-sm transition-colors"
            >
              Powered by Sales Intelligence Platform
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;