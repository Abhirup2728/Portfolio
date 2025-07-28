import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Smartphone,
  Globe,
  Palette,
  Server,
} from "lucide-react";

const skills = [
  "C/C++",
  "PHP",
  "Python",
  "MySQL",
  "HTML",
  "CSS",
  "Data Analytics Job Simulation",
  "Cloud Computing",
  "Machine Learning",
  "Microsoft Azure AI Fundamentals",
  "⁠DSA (Data Structures and Algorithms)",
];

const services = [
  {
    title: "",
    description: "Dedicated and innovative Computer Science Engineer specializing in Artificial Intelligence, Machine Learning, and Full Stack Web Development Proficient in building intelligent systems using Python alongside developing dynamic and responsive web applications with React.js, Node.js, and Django. Strong problem-solving skills, expertise in data structures and algorithms, and experience with cloud technologies (AWS, Firebase). Passionate about leveraging AI and web technologies to create impactful solutions ",
    icon: Smartphone,
  },
  // {
  //   title: "Web Development",
  //   description:
  //     "Modern web applications with responsive design and optimal user experience using latest technologies.",
  //   icon: Globe,
  // },
  // {
  //   title: "UI/UX Design",
  //   description:
  //     "User-centered design solutions that combine aesthetic appeal with functional usability and accessibility.",
  //   icon: Palette,
  // },
  // {
  //   title: "Backend Development",
  //   description:
  //     "Robust backend services and APIs with Firebase, REST APIs, and cloud-based solutions.",
  //   icon: Server,
  // },
];

export default function Index() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Hi, I'm <div className="text-accent">Abhirup Gumtya</div>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
                Software Engineer
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Dedicated and innovative Computer Science Engineer specializing in Artificial Intelligence, Machine Learning, and Full 
Stack Web Development. Proficient in building intelligent systems using Python alongside developing dynamic and 
responsive web applications with React.js, Node.js, and Django. Strong problem-solving skills, expertise in data structures 
and algorithms, and experience with cloud technologies (AWS, Firebase). Passionate about leveraging AI and web 
technologies to create impactful solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8"><a href="mailto:abhirup2728@gmail.com">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button></a>
                <Button size="lg" variant="outline" onClick={() => window.open("/Abhirup_Gumtya_CV.pdf", "_blank")}>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>abhirup2728@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 – 8902294828 / 8910846475</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>WestBengal, India</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-accent rounded-full flex items-center justify-center text-6xl font-bold text-accent-foreground">
                <img src="./public/Picture1-modified.png" alt="Abhirup Gumtya" width={320} height={320} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Dedicated and innovative Computer Science Engineer specializing in Artificial Intelligence, Machine Learning, and Full 
Stack Web Development. Proficient in building intelligent systems using Python alongside developing dynamic and 
responsive web applications with React.js, Node.js, and Django. Strong problem-solving skills, expertise in data structures 
and algorithms, and experience with cloud technologies (AWS, Firebase). Passionate about leveraging AI and web 
technologies to create impactful solutions
            </p>
          </div>
        </div>
      </section>

      {/* What I'm Doing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What I'm Doing
            </h2>
          </div>

          <div className="grid  gap-8"> 
            {/* //md:grid-cols-2 //lg:grid-cols-4 */}
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center font-semibold hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="w-full">
                  {/* <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div> */}
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Skills
            </h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm py-2 px-4"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to
            life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><a href="mailto:abhirup2728@gmail.com">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button></a><a href="/portfolio">
            <Button size="lg" variant="outline">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Portfolio
            </Button></a>
          </div>
        </div>
      </section>
    </div>
  );
}
