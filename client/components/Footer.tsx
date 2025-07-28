import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Abhirup2728", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abhirupgumtya", icon: Linkedin },
  { name: "Email", href: "mailto:abhirup2728@gmail.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="sm"
                asChild
                className="hover:text-accent"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center">
            <p>© 2024 Portfolio. All rights reserved.</p>
            <p className="mt-1">Built with React + TypeScript + Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
