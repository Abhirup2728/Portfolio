import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Globe, Palette, Server } from "lucide-react";

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

const skills = [
  "C/C++", //PHP, MySQL, HTML, CSS
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

export default function About() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* About Me Section */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            About Me
          </h1>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="md:w-80 md:h-80   rounded-lg mx-auto flex items-center justify-center text-6xl font-bold text-accent-foreground">
                <img src="/Picture1.jpeg" alt="Abhirup Gumtya"  className="md:w-80 md:h-70 sm:w-40  sm:mx-auto   rounded-lg mx-auto flex items-center justify-center  font-bold " />
                {/* style={{borderRadius: "10%"}} */}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold sm:text-center mb-6">Software Engineer</h2>
              <p className="text-muted-foreground sm:text-center mb-6 leading-relaxed">
                I am a dedicated software enginner with a strong foundation in creating robust, scalable, and user-friendly web applications. My expertise extends to database management, ensuring efficient data storage, retrieval, and integrity. I'm also deeply passionate about data science and machine learning (ML), leveraging data-driven insights and intelligent algorithms to build innovative solutions.
              </p>
              <p className="text-muted-foreground sm:text-center mb-6 leading-relaxed">
                My core competencies include crafting machine learning models with latest python libraries, developing powerful back-end systems, optimizing database performance, and implementing advanced data analysis and machine learning models. I am committed to writing clean, maintainable code and continuously learning to stay at the forefront of these rapidly evolving fields.
              </p>
              
            </div>
          </div>
        </section>

        {/* What I'm Doing Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            What I'm Doing
          </h2>
          <div className="grid  gap-8">
            {/* md:grid-cols-2 lg:grid-cols-4 */}
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  {/* <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4"> */}
                    {/* <service.icon className="h-8 w-8 text-accent" /> */}
                  {/* </div> */}
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
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Skills
          </h2>
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
        </section>
      </div>
    </div>
  );
}
