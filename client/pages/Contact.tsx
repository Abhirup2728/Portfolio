import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "abhirup2728@gmail.com",
    href: "mailto:abhirup2728@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 – 8902294828",
    href: "tel:+918902294828",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "WestBengal, India",
    href: "https://maps.app.goo.gl/ojGRPiCvYMEVEeyv6",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's talk and
            bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-muted-foreground">
                          {info.title}
                        </p>
                        <a
                          href={info.href}
                          className="text-foreground hover:text-accent transition-colors"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold">Let's Work Together</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question about Flutter development,
                need a consultation, or want to start a project together, feel
                free to reach out.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Send Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Enter the subject"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter your message"
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your ideas and create something amazing together. I'm
            here to help bring your vision to life with clean code and beautiful
            design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><a href="mailto:abhirup2728@gmail.com">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Mail className="mr-2 h-5 w-5" />
              Get Started
            </Button></a><a href="/">
            <Button size="lg" variant="outline">
              View Portfolio
            </Button></a>
          </div>
        </div>
      </div>
    </div>
  );
}
