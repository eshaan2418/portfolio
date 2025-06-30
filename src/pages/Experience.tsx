
import React, { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ExperienceEntry {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  description: string[];
  isActive?: boolean;
}

const experienceData: ExperienceEntry[] = [
  {
    id: '1',
    company: 'Stealth Biotech Startup',
    location: 'Remote',
    role: 'Machine Learning Software Engineering Intern',
    period: 'May 2025 – Present',
    description: [
      'Led PyTorch-based ML model development for IBM-funded drug discovery, improving MOA classification accuracy by 15%, reducing analysis time by 25%, saving $5K+.',
      'Applied weakly/self-supervised learning to cut labeling costs by 40% and reduce data footprint by 60%.',
      'Built transfer learning pipelines using Docker, improving benchmark performance by 12%, reducing training time by 45%, saving $3K.',
      'Integrated unsupervised learning techniques with senior researchers, boosting candidate selection by 30%.'
    ],
    isActive: true
  },
  {
    id: '2',
    company: 'YU Blueprint',
    location: 'Toronto',
    role: 'Software Developer Intern',
    period: 'May 2025 – Present',
    description: [
      'Developed open source projects with non-profits.',
      'Improved accessibility and UX on web apps.',
      'Contributed to feature development, bug fixes, and agile code reviews.'
    ],
    isActive: true
  },
  {
    id: '3',
    company: 'ITREB Canada',
    location: 'Toronto, Hybrid',
    role: 'Full Stack Developer Intern',
    period: 'May 2024 – December 2024',
    description: [
      'Developed Spring Boot microservices and REST APIs with TDD.',
      'Implemented API rate limiting and security.',
      'Revamped frontend/backend of iicanada.org, reducing data retrieval time by 20% for 30,000+ users.',
      'Improved UX by reducing user clicks by 16% and integrating React Query for efficient data fetching.'
    ]
  },
  {
    id: '4',
    company: 'Prince Aly Khan Hospital',
    location: 'Remote',
    role: 'Software Engineer Intern',
    period: 'January – August 2024',
    description: [
      'Built secure, scalable healthcare workflow solutions.',
      'Developed responsive, user-friendly React interfaces.',
      'Ensured data privacy and compliance across remote teams.'
    ]
  },
  {
    id: '5',
    company: 'AIESEC',
    location: 'Toronto',
    role: 'VP of Tech',
    period: '2023 – 2024',
    description: [
      'Ran cross-cultural exchange and leadership development initiatives.',
      'Helped with web development and organized events.'
    ]
  }
];

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    experienceData.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-red-500 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <div className="text-red-500 font-medium text-lg">Experience</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-red-500 mb-4">
              Professional Experience
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              A journey through innovative technology roles, from healthcare solutions to biotech research
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-red-400 to-red-600 transform md:-translate-x-0.5"></div>

            {/* Experience Entries */}
            <div className="space-y-12">
              {experienceData.map((entry, index) => (
                <div
                  key={entry.id}
                  id={entry.id}
                  className={`relative transition-all duration-700 ${
                    visibleItems.has(entry.id) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-2 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-2 ${
                    entry.isActive 
                      ? 'bg-red-500 shadow-lg shadow-red-500/50 animate-pulse' 
                      : 'bg-red-600'
                  }`}>
                    <div className="absolute inset-1 bg-black rounded-full"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8 md:text-right md:mr-1/2' : 'md:pl-8 md:ml-1/2'
                  }`}>
                    <div className="bg-black/60 backdrop-blur-sm border border-red-900/30 rounded-lg p-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2 text-red-500">
                          <Calendar size={16} />
                          <span className="text-sm font-medium">{entry.period}</span>
                          {entry.isActive && (
                            <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {entry.role}
                        </h3>
                        <div className="flex items-center gap-2 text-red-400">
                          <span className="font-medium">{entry.company}</span>
                          <span className="text-white/60">•</span>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span className="text-sm">{entry.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-2">
                        {entry.description.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-white/90 text-sm leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 rounded font-medium">
              <span>Want to collaborate?</span>
              <ExternalLink size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
