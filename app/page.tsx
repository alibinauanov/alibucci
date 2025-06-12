import { Github, Linkedin, Mail, MapPin, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import mePic from './assets/me.jpg';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-primary-foreground text-4xl font-bold shadow-lg">
              <Image src={mePic} alt="Portrait of Alibi Nauanov" width={128} height={128} className="rounded-full object-cover w-32 h-32" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Alibi Nauanov
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Software Engineer
            </p>
            <div className="flex items-center justify-center text-muted-foreground mb-8">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Almaty, Kazakhstan</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/projects">
                View Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <a href="/Alibi_CV.pdf" download>
              <Button variant="outline" className="border-border">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/alibinauanov"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/alibinauanov/"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:alibi.nauanov@nyu.edu"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="shadow-lg border-border bg-card/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">About Me</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="mb-4">
                I'm a software engineer with a passion for building scalable, reliable, and 
                user-focused digital products. I earned my degree in Computer Science from 
                NYU Shanghai, where I also worked across research labs and industry roles 
                throughout my studies, gaining hands-on experience while refining my technical and problem-solving skills.
              </p>
              <p className="mb-4">
                My background includes building internal tools, data-driven applications, and intelligent 
                systems in both academic and startup environments. I enjoy turning complex challenges into 
                clean, maintainable solutions that serve real user needs, and I take pride in writing thoughtful, efficient code.M
              </p>
              <p>
                Outside of work, I enjoy playing football and basketball, hiking, gaming, and contributing 
                to side projects that keep me learning and inspired. I'm always looking for opportunities to 
                grow, collaborate, and build technology that makes a difference.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Core Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              category: "Programming Languages",
              skills: ["Python", "Java", "JavaScript", "TypeScript", "C"]
            },
            {
              category: "Frontend",
              skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
            },
            {
              category: "Backend",
              skills: ["Node.js", "Express.js", "MySQL", "MongoDB", "FastAPI", "Django"]
            },
            {
              category: "Cloud & DevOps",
              skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"]
            },
            {
              category: "Machine Learning & Data",
              skills: ["PyTorch", "Scikit-learn", "Pandas", "Sentiment Analysis (LSTM, CNN)", "Data Visualization"]
            },
            {
              category: "Tools & Methods",
              skills: ["Git", "Agile", "Testing", "Microservices", "APIs", "JSON", "Figma"]
            },
            {
              category: "Leadership",
              skills: ["Architecture", "Code Review", "Scrum"]
            }
          ].map((skillGroup, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}