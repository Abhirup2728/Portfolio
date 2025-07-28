import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Applications", "Web Development", "UI/UX Design"];

const projects = [
  {
    title: "Nagarik App",
    category: "Applications",
    description:
      "A comprehensive citizen service mobile application for government services and civic engagement.",
    image: "/placeholder.svg",
    technologies: ["Flutter", "Dart", "Firebase"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Ambition Guru",
    category: "Applications",
    description:
      "Educational platform mobile app for students and teachers with course management and learning tools.",
    image: "/placeholder.svg",
    technologies: ["Flutter", "Firebase", "REST API"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Sociair",
    category: "Applications",
    description:
      "Social networking mobile application with real-time messaging and community features.",
    image: "/placeholder.svg",
    technologies: ["Flutter", "Dart", "Socket.io"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Tokma",
    category: "Applications",
    description:
      "Business management and communication platform for teams and organizations.",
    image: "/placeholder.svg",
    technologies: ["Flutter", "Firebase", "REST API"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Saara",
    category: "Applications",
    description:
      "E-commerce mobile application with product catalog, cart, and payment integration.",
    image: "/placeholder.svg",
    technologies: ["Flutter", "Stripe", "Firebase"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "iFood",
    category: "Applications",
    description:
      "Food delivery mobile app with restaurant listings, ordering, and tracking features.",
    image: "/placeholder.svg",
    technologies: ["Flutter", "Google Maps", "Payment Gateway"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "MeroDate",
    category: "Applications",
    description:
      "Dating mobile application with user matching, chat, and profile management.",
    image: "/placeholder.svg",
    technologies: ["Flutter", "Firebase", "Real-time Database"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Weather App",
    category: "Applications",
    description:
      "Weather forecast mobile app with location-based weather information and alerts.",
    image: "/placeholder.svg",
    technologies: ["Flutter", "Weather API", "Geolocation"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Car Zone",
    category: "Web Development",
    description:
      "Automotive marketplace website with car listings, search, and dealer management.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Movfix",
    category: "Web Development",
    description:
      "Movie streaming platform with user accounts, watchlists, and content management.",
    image: "/placeholder.svg",
    technologies: ["React", "Express", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Fitness Zone",
    category: "Web Development",
    description:
      "Fitness and wellness website with workout plans, nutrition guides, and progress tracking.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "TypeScript", "Firebase"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "E-Commerce",
    category: "Web Development",
    description:
      "Full-featured e-commerce website with product management, orders, and payment processing.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "Stripe"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Netflix Clone",
    category: "Web Development",
    description:
      "Video streaming platform clone with user authentication and content browsing.",
    image: "/placeholder.svg",
    technologies: ["React", "Firebase", "Movie API"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Houseman UI/UX",
    category: "UI/UX Design",
    description:
      "Complete UI/UX design system for home service booking platform with modern interface.",
    image: "/placeholder.svg",
    technologies: ["Figma", "Adobe XD", "Prototype"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
          Portfolio
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A showcase of my work across machine learning, web development , backend development and other projects
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-accent hover:bg-accent/90"
                  : ""
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="ghost" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
