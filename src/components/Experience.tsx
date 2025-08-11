import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "WIL for ICT Security",
      company: "Limpopo COGHSTA",
      location: "Limpopo, Polokwane",
      period: "March 2024 - April 2025",
      type: "Work Integrated Learning",
      responsibilities: [
        "Assisted in the installation of work programs (BAS, PERSAL, LOGIS)",
        "Assisted in cramping RJ45 and RJ11 cables",
        "Assisted in installing Microsoft Office 365",
        "Assisted with intranet management",
        "Assisted in updating URs for all 7 systems"
      ],
      color: "neon-purple"
    },
    {
      title: "WIL for ICT Infrastructure and Systems",
      company: "Limpopo COGHSTA",
      location: "Limpopo, Polokwane",
      period: "March 2024 - April 2025",
      type: "Work Integrated Learning",
      responsibilities: [
        "Assisted in maintaining and providing 98% ICT Network Infrastructure",
        "Assisted in maintaining network and desktop environment",
        "Assisted in maintaining server environment",
        "Assisted in creating new accounts on request and review users' access",
        "Assisted in troubleshooting network connection problems",
        "Assisted in installing printers",
        "Assisted in configuration of new equipment"
      ],
      color: "neon-blue"
    },
    {
      title: "WIL for Systems Development",
      company: "Limpopo COGHSTA",
      location: "Limpopo, Polokwane",
      period: "March 2024 - April 2025",
      type: "Work Integrated Learning",
      responsibilities: [
        "Assisted in performing cost benefit analysis to produce outline designs of new IT Systems",
        "Assisted in maintaining new and existing systems",
        "Assisted in developing test cases and user acceptance test",
        "Assisted in preparing detailed system requirement specification for system in Department and Municipalities",
        "Assisted in testing with end user",
        "Assisted in adding new users to Permis System and gave technical support",
        "Assisted in uploading content and review monthly SLA report"
      ],
      color: "neon-cyan"
    },
    {
      title: "Learnership for Microsoft Power Platform",
      company: "Net-campus",
      location: "Gauteng, Centurion",
      period: "February 2023 - January 2024",
      type: "Learnership",
      responsibilities: [
        "Built Applications using Microsoft Power Apps",
        "Captured data in Microsoft SharePoint",
        "Analyzed and Formulated reports using Microsoft Power BI",
        "Automated canvas Power Apps with Microsoft Power Automate",
        "Created Forms and Surveys using Microsoft Forms"
      ],
      color: "electric-blue"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="glass-card text-neon-blue border-neon-blue/30 px-4 py-2 mb-6">
            Experience
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-6">
            <span className="text-gradient">Professional</span> Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my professional experience in IT systems, 
            network infrastructure, and Microsoft Power Platform development.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="glass-card border-white/10 hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left side - Main info */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge 
                        variant="outline" 
                        className={`glass-card text-${exp.color} border-${exp.color}/30 px-3 py-1`}
                      >
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-orbitron font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                      {exp.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-neon-blue" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-neon-purple" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-neon-cyan" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mt-6">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full bg-${exp.color} mt-2 flex-shrink-0`}></div>
                          <span className="text-foreground text-sm leading-relaxed">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right side - Visual accent */}
                  <div className="lg:col-span-1 flex items-center justify-center">
                    <div className={`w-32 h-32 rounded-full bg-gradient-to-r from-${exp.color} to-${exp.color}/50 opacity-20 animate-float group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;