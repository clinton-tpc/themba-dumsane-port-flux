import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="font-orbitron font-bold text-2xl text-gradient">
              Themba Dumsane Lebo
            </div>
            <p className="text-muted-foreground">
              IT Specialist passionate about creating innovative technology solutions 
              and delivering excellence in every project.
            </p>
            <Badge variant="outline" className="glass-card text-neon-blue border-neon-blue/30 w-fit">
              Available for Opportunities
            </Badge>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-orbitron font-bold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Experience', href: '#experience' },
                { label: 'Skills', href: '#skills' },
                { label: 'Education', href: '#education' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-neon-blue transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-orbitron font-bold text-foreground">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:lebo2747@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-neon-blue transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">lebo2747@gmail.com</span>
              </a>
              <a 
                href="tel:+27713122131"
                className="flex items-center gap-2 text-muted-foreground hover:text-neon-purple transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">(+27) 71-312-2131</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm">Pretoria, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Themba Dumsane Lebo. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and cutting-edge technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;