'use client';

import { useState } from 'react';
import ProjectCard, { Project } from '@/components/project-card';
import ProjectModal from '@/components/project-modal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import XLogo from '../assets/X-Logo.png';

const projects: Project[] = [
  {
    id: '1',
    title: 'X (Twitter) Clone - Full Stack App',
    description: 'A modern Twitter/X clone built with Next.js 15, delivering real-time features, rich user interactions, and scalable architecture.',
    longDescription: 'This full-stack social media platform replicates core Twitter functionalities using a modern tech stack. Built with Next.js 15, React 18, TypeScript, and Tailwind CSS on the frontend, and Prisma ORM with MySQL/PostgreSQL on the backend, it supports real-time notifications via Socket.io, infinite scrolling, and advanced user profiles. Authentication is powered by Clerk with GitHub/Google OAuth, and media is optimized using ImageKit CDN. The app is deployable via Vercel and Docker, and designed for performance, security, and developer-friendly extensibility.',
    image: XLogo,
    technologies: [
      'Next.js 15',
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'Prisma ORM',
      'MySQL',
      'PostgreSQL',
      'Socket.io',
      'Clerk',
      'ImageKit',
      'Docker'
    ],
    githubUrl: 'https://github.com/alibinauanov/x-twitter-clone',
    liveUrl: 'https://x-twitter-clone-production.up.railway.app/',
    featured: true
  },
  {
    id: '2',
    title: 'CanQr – Quantum Drug Optimization',
    description: 'A hybrid quantum-classical framework for drug optimization using quantum chemistry and variational quantum algorithms.',
    longDescription: 'CanQr is a cutting-edge framework that combines classical quantum chemistry simulations (via PySCF) with quantum computing techniques (VQE using PennyLane) to optimize drug molecules for selective binding. The system simulates molecule-target interactions with an emphasis on maximizing efficacy against disease sites while minimizing harm to healthy tissue. This dual-approach enables precise binding energy calculations and efficient candidate screening in pharmaceutical research.',
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'PySCF', 'PennyLane', 'Quantum Computing', 'VQE', 'Molecular Simulation'],
    githubUrl: 'https://github.com/alibinauanov/hackathon2025-canQr',

    featured: true
  },
  {
    id: '3',
    title: 'Bitcoin Price Prediction with Sentiment Analysis',
    description: 'Predictive modeling of Bitcoin price using sentiment analysis and ensemble learning on social media data.',
    longDescription: 'This capstone project combines social media sentiment data with Bitcoin price indicators to forecast market trends. Using VADER, TextBlob, and BERT for sentiment scoring, and integrating financial metrics, the system feeds data into a Random Forest ensemble and an LSTM model for time-series prediction. The model achieved 78% accuracy and provided insights into sentiment-driven price volatility.',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'BERT', 'LSTM', 'Random Forest', 'VADER', 'TextBlob'],
    githubUrl: 'https://github.com/alibinauanov/Bitcoin-Price-Prediction-Using-Sentiment-Analysis-and-Ensemble-Methods',
    featured: true
  },
  {
    id: '4',
    title: 'Movix – Movie Database Web App',
    description: 'Interactive movie database app using React, Redux, and SCSS with dynamic API integration and modern UI.',
    longDescription: 'Movix is a sleek and responsive web application for browsing and discovering movies. Built with React and Redux, the app features component-based architecture, state management, API integration, and dynamic rendering. The app showcases advanced UI interactivity and clean SCSS styling, offering a smooth user experience for movie lovers.',
    image: 'https://images.pexels.com/photos/7991379/pexels-photo-7991379.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'Redux', 'JavaScript', 'SCSS', 'Vite', 'REST API'],
    githubUrl: 'https://github.com/alibinauanov/movie-app',
    liveUrl: 'https://movie-app-alibi.vercel.app/'
  },
  {
    id: '5',
    title: 'Ticket Reservation System',
    description: 'A Python-based ticket booking system with Flask frontend and MySQL backend, developed for efficient event reservations.',
    longDescription: 'Developed as a final project, this system manages ticket reservations with a Python backend and Flask-powered frontend. The project integrates with MySQL for persistent storage and supports key operations like booking, cancelation, and seat management. Designed for simplicity and scalability, it runs locally with XAMPP for backend services.',
    image: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Flask', 'MySQL', 'XAMPP', 'HTML/CSS'],
    githubUrl: 'https://github.com/alibinauanov/ticket_booking'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here&apos;s a collection of projects I&apos;ve worked on, ranging from full-stack web applications 
            to AI-powered solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-card rounded-lg p-1 shadow-md border border-border">
            <Button
              variant={filter === 'all' ? 'default' : 'ghost'}
              onClick={() => setFilter('all')}
              className="rounded-md"
            >
              All Projects ({projects.length})
            </Button>
            <Button
              variant={filter === 'featured' ? 'default' : 'ghost'}
              onClick={() => setFilter('featured')}
              className="rounded-md"
            >
              Featured ({projects.filter(p => p.featured).length})
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found for the selected filter.</p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}