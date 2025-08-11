import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Network, Shield, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "System Development",
      description: "Microsoft Power Platform, Full-stack Development"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Network Infrastructure",
      description: "98% Uptime Maintenance, Server Environment Management"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "ICT Security",
      description: "Security Architecture, System Installation & Configuration"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automation",
      description: "Digital Electronics, Power Automate, Process Optimization"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="glass-card text-neon-purple border-neon-purple/30 px-4 py-2 mb-6">
            About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-6">
            <span className="text-gradient">Professional</span> Summary
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Results-driven IT Specialist with 2 years of experience in managing and supporting IT systems, 
            networks, and infrastructure across diverse business environments. Proven expertise in troubleshooting 
            hardware and software issues, maintaining secure network environments, and implementing efficient 
            technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="glass-card border-white/10 hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple mb-4 group-hover:animate-glow">
                  <div className="text-white">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="font-orbitron font-semibold text-lg mb-2 text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8 lg:p-12 hover-lift animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-orbitron font-bold text-gradient">
                Key Achievements
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon-blue mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">Maintained 98% ICT Network Infrastructure uptime</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon-purple mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">Built applications using Microsoft Power Platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">Automated workflows with Power Automate</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-electric-blue mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">Collaborated with cross-functional teams on IT strategies</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-orbitron font-bold text-gradient">
                Core Competencies
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Problem Solving</span>
                  <span className="text-neon-blue">Expert</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Team Collaboration</span>
                  <span className="text-neon-purple">Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Technical Support</span>
                  <span className="text-neon-cyan">Expert</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">System Optimization</span>
                  <span className="text-electric-blue">Advanced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;