import { Calendar, MapPin, Building, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    id: '1',
    title: 'Research Assistant',
    company: 'CITIES Lab, NYU Abu Dhabi',
    location: 'Abu Dhabi, UAE',
    period: 'May 2024 – July 2024',
    type: 'Research Fellowship',
    description:
      'Contributed to a data visualization project focused on large-scale graph-based datasets. Improved reliability and scalability of the system infrastructure and fixed key performance issues.',
    achievements: [
      'Built a dataset visualization tool to explore large graph datasets 2x faster',
      'Improved system reliability using Docker Swarm, cutting downtime 3x',
      'Resolved 10+ issues in backend logic, increasing stability by 40%'
    ],
    technologies: ['Next.js', 'Node.js', 'D3', 'Docker Swarm']
  },
  {
    id: '2',
    title: 'Software Engineer',
    company: 'NYU Shanghai, Research & Instructional Technology Services',
    location: 'Shanghai, China',
    period: 'Sep 2023 – Dec 2023',
    type: 'Part-time',
    description:
      'Built and deployed an internal document analysis chatbot for university staff, enhancing security and usability. Improved backend performance and deployment stability.',
    achievements: [
      'Created a secure internal chatbot for document analysis',
      'Automated deployments using CI/CD and Docker, reducing errors by 20%',
      'Enhanced backend with Redis, boosting performance by 1.5x',
      'Conducted user interviews leading to 60% higher satisfaction'
    ],
    technologies: ['React', 'Node.js', 'Docker', 'Redis', 'MySQL']
  },
  {
    id: '3',
    title: 'Software Engineering Intern',
    company: 'Metana',
    location: 'Chicago, IL',
    period: 'Jul 2023 – Aug 2023',
    type: 'Internship',
    description:
      'Developed a content analysis API combining web scraping and summarization. Enhanced backend reliability and system latency through architecture improvements.',
    achievements: [
      'Built a web scraping & summarization API with ML integration',
      'Refactored backend for scalability and error resilience',
      'Improved processing speed by 40% using distributed data storage'
    ],
    technologies: ['FastAPI', 'PyTorch', 'Redis', 'Docker']
  },
  {
    id: '4',
    title: 'Front-End Development & UI/UX Intern',
    company: 'Shoptaki',
    location: 'New York, NY',
    period: 'Sep 2022 – Jul 2023',
    type: 'Internship',
    description:
      'Led front-end development of a biometric data platform. Focused on responsive design, scalability, and integration of authentication services.',
    achievements: [
      'Developed a biometric storage platform used by 1,000+ users',
      'Ensured responsive and scalable front-end architecture',
      'Integrated authentication APIs, reducing failures by 25%'
    ],
    technologies: ['React', 'Redux', 'JavaScript', 'Biometric APIs']
  }
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'New York University Shanghai',
    location: 'Shanghai, CHina',
    period: '2021 - 2025',
    details: 'Relevant coursework: Software Engineering, Computer Architecture, Data Structures, Algorithms, Databases, Artificial Intelligence, Operating Systems, Information Visualization. Completed capstone on Bitcoin price prediction using sentiment analysis.'
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I’m at the beginning of my professional journey, fueled by a passion for 
            solving problems through code and creating meaningful digital experiences.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Work Experience</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                
                {/* Content */}
                <div className="ml-12 md:ml-20 flex-1">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow border-border bg-card/50 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <CardTitle className="text-xl font-bold text-foreground">
                          {exp.title}
                        </CardTitle>
                        <Badge variant="outline" className="w-fit">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-primary font-semibold">
                          <Building className="h-4 w-4 mr-2" />
                          {exp.company}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground text-sm">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Award className="h-4 w-4 mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Education</h2>

          {education.map((edu, index) => (
            <div
              key={index}
              className="rounded-xl shadow-lg border border-border bg-card/50 backdrop-blur-sm p-8 space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                  <div className="flex items-center text-primary font-semibold mb-2">
                    <Building className="h-4 w-4 mr-2" />
                    {edu.school}
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 text-muted-foreground text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {edu.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {edu.location}
                  </div>
                </div>
              </div>

              {/* Embedded Video */}
              <video
                src="/video/graduated.MOV" // Ensure this path matches your actual file in /public/video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-lg"
              />

              <p className="text-muted-foreground leading-relaxed">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}