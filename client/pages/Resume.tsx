import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree:
      "Bachelor of Science in Computer Science and Information Technology",
    institution: "Brainware University, Kolkata",
    period: "2022 – 2026",
    location: "West Bengal,India",
  },
  {
    degree: "Higher Secondary School",
    institution: "Hindu School",
    period: "2015 – 2017",
    location: "West Bengal",
  },
];

const experience = [
  {
    position: "Engineering Associate",
    company: "Focused Professional Development",
    period: "Aug 2024 – Feb 2025",
    location: "Remote",
    description:"Dedicated a period to intensive professional development, focusing on the foundational principles of engineering and problem-solving methodologies. Engaged in structured learning to enhance analytical capabilities and systematic approaches to technical challenges.",
    
    achievements: [
      "Applied systematic problem-solving frameworks to complex theoretical and practical scenarios.",
      "Developed strategies for optimizing processes and resource utilization through analytical assessment.",
      "Cultivated a rigorous approach to data analysis and logical deduction for informed decision-making",
      "Enhanced understanding of core engineering principles for robust solution design.",
    ],

  },
  // {
  //   position: "Flutter Developer",
  //   company: "Inflancer Technology",
  //   period: "Oct 2022 – Aug 2024",
  //   location: "Nepal",
  //   description:
  //     "Specialized in Flutter development for various client projects. Collaborated with design and backend teams to deliver high-quality mobile applications.",
  //   achievements: [
  //     "Delivered 8+ mobile applications",
  //     "Integrated REST APIs and Firebase services",
  //     "Collaborated with UI/UX designers",
  //     "Maintained 99% crash-free app stability",
  //   ],
  // },
  // {
  //   position: "Flutter Developer Intern",
  //   company: "YAJ Tech Pvt. Ltd",
  //   period: "May 2022 – Sep 2022",
  //   location: "Nepal",
  //   description:
  //     "Gained hands-on experience in Flutter development and mobile app lifecycle. Worked on real-world projects under senior developer guidance.",
  //   achievements: [
  //     "Completed 3 internship projects successfully",
  //     "Learned Flutter best practices and patterns",
  //     "Contributed to code reviews and testing",
  //     "Gained experience with version control systems",
  //   ],
  // },
];

const skills = [
  {
    category: "Programming Languages",
    items: ["C/C++", "JavaScript", "Python", "Java"],
  },
  // {
  //   category: "Mobile Development",
  //   items: [
  //     "Flutter",
  //     "Android Development",
  //     "iOS Development",
  //     "Cross-Platform Apps",
  //   ],
  // },
  // {
  //   category: "Backend & APIs",
  //   items: ["Firebase", "REST APIs", "Node.js", "Express.js"],
  // },
  {
    category: "Tools & Technologies",
    items: ["Git", "Postman", "VS Code"],
  },
  // {
  //   category: "Design",
  //   items: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping"],
  // },
];

export default function Resume() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Resume</h1>
          <p className="text-lg text-muted-foreground mb-6">
            My professional journey and qualifications
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90" variant="outline" onClick={()=>window.open("/Abhirup_Gumtya_CV.pdf", "_blank")}>
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-accent font-medium mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div>
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-accent font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 lg:mt-0">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
