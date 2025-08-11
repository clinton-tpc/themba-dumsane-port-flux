import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-neon-blue/10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-neon-purple/10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-neon-cyan/10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="outline" className="glass-card text-neon-blue border-neon-blue/30 px-4 py-2 text-sm font-medium animate-glow">
                IT Specialist
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-orbitron font-bold leading-tight">
                <span className="text-gradient">Themba</span>
                <br />
                <span className="text-foreground">Dumsane Lebo</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">
                Results-driven IT Specialist with expertise in{" "}
                <span className="text-neon-blue font-medium">Microsoft Power Platform</span>,{" "}
                <span className="text-neon-purple font-medium">Network Infrastructure</span>, and{" "}
                <span className="text-neon-cyan font-medium">System Development</span>
              </p>
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-neon-blue" />
                <span>Pretoria, South Africa</span>
              </div>
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <Phone className="w-4 h-4 text-neon-purple" />
                <span>(+27) 71-312-2131</span>
              </div>
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <Mail className="w-4 h-4 text-neon-cyan" />
                <span>lebo2747@gmail.com</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 neon-glow hover-lift"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass-card border-neon-purple/30 text-neon-purple hover:bg-neon-purple/10 font-medium px-8 py-3 hover-lift"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Experience
              </Button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex-shrink-0 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-75 blur-xl animate-neon-pulse"></div>
              <div className="relative glass-card rounded-full p-2 hover-lift">
                <img
                  src="/lovable-uploads/9a3e8762-7ed9-4a10-9427-e92948ec1e39.png"
                  alt="Themba Dumsane Lebo"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;