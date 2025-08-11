import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  User,
  Calendar
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "lebo2747@gmail.com",
      href: "mailto:lebo2747@gmail.com",
      color: "neon-blue"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "(+27) 71-312-2131",
      href: "tel:+27713122131",
      color: "neon-purple"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "0613 Alec's Place, 321 DS Bosman Street, Pretoria 0002",
      href: "https://maps.google.com/?q=Pretoria,South+Africa",
      color: "neon-cyan"
    }
  ];

  const reference = {
    name: "Mrs Mothiba MR",
    role: "Mentor",
    phone: "(+27) 64-848-4895"
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="glass-card text-neon-blue border-neon-blue/30 px-4 py-2 mb-6">
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-6">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative IT solutions? I'm available for full-time positions, 
            consulting opportunities, and exciting projects. Let's discuss how I can contribute to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <Card className="glass-card border-white/10 hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold text-foreground">
                    Contact Information
                  </h3>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-4 glass-card rounded-lg hover:bg-white/5 transition-all duration-300 group"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r from-${contact.color} to-${contact.color}/50 group-hover:animate-glow`}>
                        <div className="text-white">
                          {contact.icon}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className={`font-medium text-${contact.color}`}>
                          {contact.label}
                        </p>
                        <p className="text-foreground">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reference */}
            <Card className="glass-card border-white/10 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-neon-purple to-neon-cyan">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-orbitron font-bold text-foreground">
                    Professional Reference
                  </h4>
                </div>
                
                <div className="space-y-2">
                  <p className="text-foreground font-medium">{reference.name}</p>
                  <p className="text-muted-foreground">{reference.role}</p>
                  <a 
                    href={`tel:${reference.phone.replace(/[^\d+]/g, '')}`}
                    className="text-neon-blue hover:text-neon-purple transition-colors duration-300"
                  >
                    {reference.phone}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="glass-card border-white/10 hover-lift">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="p-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple mx-auto w-fit animate-glow">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-orbitron font-bold text-gradient">
                    Ready to Start?
                  </h3>
                  
                  <p className="text-muted-foreground">
                    I'm excited to discuss opportunities and explore how my technical expertise 
                    can contribute to your organization's success.
                  </p>

                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 neon-glow hover-lift"
                      onClick={() => window.open('mailto:lebo2747@gmail.com?subject=Job Opportunity&body=Hi Themba, I would like to discuss a potential opportunity with you.', '_blank')}
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="w-full glass-card border-neon-purple/30 text-neon-purple hover:bg-neon-purple/10 font-medium px-8 py-3 hover-lift"
                      onClick={() => window.open('tel:+27713122131', '_blank')}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="glass-card border-white/10 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-neon-cyan to-electric-blue">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-orbitron font-bold text-foreground">
                    Availability
                  </h4>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Status</span>
                    <Badge variant="outline" className="glass-card text-neon-blue border-neon-blue/30">
                      Available for Opportunities
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="text-foreground">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Preferred Contact</span>
                    <span className="text-foreground">Email or Phone</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;