import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "National Diploma in Information Technology",
      institution: "Tshwane University of Technology",
      location: "Gauteng, Soshanguve",
      period: "2025",
      status: "In Progress",
      description: "Comprehensive program covering software development, network infrastructure, database management, and IT systems analysis.",
      color: "neon-blue"
    },
    {
      degree: "National Senior Certificate",
      institution: "Njeyeza Senior Secondary School",
      location: "Mpumalanga, Nelspruit",
      period: "2018",
      status: "Completed",
      description: "Successfully completed secondary education with focus on mathematics, science, and computer literacy.",
      color: "neon-purple"
    }
  ];

  const certifications = [
    {
      title: "Microsoft Power Platform Specialist",
      issuer: "Net-campus",
      period: "February 2023 - January 2024",
      skills: ["Power Apps", "Power BI", "Power Automate", "SharePoint", "Microsoft Forms"]
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="glass-card text-neon-purple border-neon-purple/30 px-4 py-2 mb-6">
            Education & Certifications
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-6">
            <span className="text-gradient">Academic</span> Foundation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My educational journey and professional certifications that form the foundation 
            of my technical expertise and knowledge in information technology.
          </p>
        </div>

        {/* Education */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="glass-card border-white/10 hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  {/* Left side - Icon and Status */}
                  <div className="lg:col-span-1 flex flex-col items-center lg:items-start space-y-4">
                    <div className={`p-4 rounded-full bg-gradient-to-r from-${edu.color} to-${edu.color}/50 group-hover:animate-glow`}>
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`glass-card text-${edu.color} border-${edu.color}/30 px-3 py-1`}
                    >
                      {edu.status}
                    </Badge>
                  </div>

                  {/* Middle section - Main info */}
                  <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-2xl font-orbitron font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                      {edu.degree}
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Award className="w-4 h-4 text-neon-blue" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-neon-purple" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-neon-cyan" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <p className="text-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  {/* Right side - Visual accent */}
                  <div className="lg:col-span-1 flex items-center justify-center">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-r from-${edu.color}/20 to-${edu.color}/10 animate-float group-hover:from-${edu.color}/30 group-hover:to-${edu.color}/20 transition-all duration-300`}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="glass-card border-white/10 hover-lift animate-fade-in">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-orbitron font-bold text-gradient mb-4">
                Professional Certifications
              </h3>
              <p className="text-muted-foreground">
                Specialized training and certifications that enhance my technical capabilities
              </p>
            </div>

            {certifications.map((cert, index) => (
              <div key={index} className="glass-card rounded-xl p-6 mb-6 last:mb-0">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-orbitron font-bold text-foreground">
                      {cert.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {cert.issuer} • {cert.period}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-neon-blue" />
                    <span className="text-neon-blue font-medium">Certified</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-foreground font-medium">Core Skills Acquired:</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline" 
                        className="glass-card text-neon-blue border-neon-blue/30 px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;