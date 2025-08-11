import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Database, 
  Network, 
  Shield, 
  Cpu, 
  Zap,
  Cloud,
  Monitor,
  Server,
  Users
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: <Code className="w-6 h-6" />,
      color: "neon-blue",
      skills: [
        { name: "Python", level: 85 },
        { name: "C++", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "SQL", level: 88 },
        { name: "Assembly", level: 75 }
      ]
    },
    {
      title: "Microsoft Power Platform",
      icon: <Cloud className="w-6 h-6" />,
      color: "neon-purple",
      skills: [
        { name: "Power Apps", level: 92 },
        { name: "Power BI", level: 88 },
        { name: "Power Automate", level: 85 },
        { name: "SharePoint", level: 80 },
        { name: "Microsoft Forms", level: 85 }
      ]
    },
    {
      title: "Network & Infrastructure",
      icon: <Network className="w-6 h-6" />,
      color: "neon-cyan",
      skills: [
        { name: "Network Maintenance", level: 95 },
        { name: "Server Management", level: 90 },
        { name: "Cable Management", level: 88 },
        { name: "Printer Installation", level: 85 },
        { name: "Equipment Configuration", level: 87 }
      ]
    },
    {
      title: "Security & Systems",
      icon: <Shield className="w-6 h-6" />,
      color: "electric-blue",
      skills: [
        { name: "Security Architecture", level: 82 },
        { name: "System Installation", level: 90 },
        { name: "User Access Management", level: 88 },
        { name: "Network Troubleshooting", level: 92 },
        { name: "Microsoft Office 365", level: 85 }
      ]
    }
  ];

  const operatingSystems = [
    { name: "Windows", icon: <Monitor className="w-5 h-5" />, level: 95 },
    { name: "Kali Linux", icon: <Server className="w-5 h-5" />, level: 80 }
  ];

  const softSkills = [
    { name: "Leadership", icon: <Users className="w-5 h-5" /> },
    { name: "Communication", icon: <Users className="w-5 h-5" /> },
    { name: "Problem Solving", icon: <Cpu className="w-5 h-5" /> },
    { name: "Team Work", icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="glass-card text-neon-cyan border-neon-cyan/30 px-4 py-2 mb-6">
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-6">
            <span className="text-gradient">Technical</span> Proficiency
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, programming languages, 
            and expertise across various IT domains.
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="glass-card border-white/10 hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-gradient-to-r from-${category.color} to-${category.color}/50`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className={`text-${category.color} font-semibold`}>{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Operating Systems & Soft Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Operating Systems */}
          <Card className="glass-card border-white/10 hover-lift animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-orbitron font-bold text-foreground">
                  Operating Systems
                </h3>
              </div>

              <div className="space-y-4">
                {operatingSystems.map((os, index) => (
                  <div key={index} className="flex items-center justify-between p-3 glass-card rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="text-neon-blue">
                        {os.icon}
                      </div>
                      <span className="text-foreground font-medium">{os.name}</span>
                    </div>
                    <span className="text-neon-purple font-semibold">{os.level}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="glass-card border-white/10 hover-lift animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-neon-purple to-neon-cyan">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-orbitron font-bold text-foreground">
                  Leadership Skills
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 glass-card rounded-lg hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="text-neon-cyan">
                      {skill.icon}
                    </div>
                    <span className="text-foreground font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Skills */}
        <Card className="glass-card border-white/10 hover-lift animate-fade-in mt-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-orbitron font-bold text-foreground mb-6 text-center">
              Additional Technical Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Digital Electronics", "Circuit Troubleshooting", "Logic Design", 
                "Ladder Diagram", "Security Architecture Design", "System Testing",
                "User Acceptance Testing", "Cost Benefit Analysis", "SLA Reporting",
                "Microsoft Office Suite", "Intranet Management", "Equipment Configuration"
              ].map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="glass-card text-foreground border-white/20 px-3 py-1 hover:border-neon-blue/50 hover:text-neon-blue transition-all duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;