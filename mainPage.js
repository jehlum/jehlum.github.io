import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, ArrowLeft, Link as LinkIcon } from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'rag-system',
      title: "Advanced RAG System",
      description: "Built a domain-specific RAG system implementing hybrid search combining dense and sparse retrievals, multiple embedding models comparison, and custom evaluation metrics. The system demonstrates sophisticated document chunking strategies and efficient vector storage solutions.",
      tags: ["Python", "LangChain", "Elasticsearch", "Transformers"],
      github: "https://github.com/yourusername/rag-system",
      demo: "https://demo-link.com",
      image: "/api/placeholder/800/400",
      technicalDetails: [
        "Implemented hybrid search combining BM25 and dense retrievals",
        "Integrated multiple embedding models for comparison",
        "Built custom evaluation pipeline"
      ],
      features: [
        "Smart document chunking",
        "Vector store optimization",
        "Custom relevance scoring"
      ],
      challenges: [
        "Overcame context length limitations through smart chunking",
        "Improved search accuracy by 40% using hybrid approach",
        "Reduced latency by 60% through caching and optimization"
      ]
    },
    {
      id: 'llm-finetuning',
      title: "LLM Fine-tuning Pipeline",
      description: "Developed an end-to-end pipeline for fine-tuning Llama 2 models. Implemented PEFT techniques, custom loss functions, and comprehensive evaluation frameworks. Achieved 25% improvement in domain-specific tasks while maintaining general capabilities.",
      tags: ["PyTorch", "Transformers", "PEFT", "MLOps"],
      github: "https://github.com/yourusername/llm-finetuning",
      image: "/api/placeholder/800/400",
      technicalDetails: [
        "Implemented LoRA and QLoRA fine-tuning",
        "Built custom dataset preprocessing pipeline",
        "Developed comprehensive evaluation suite"
      ],
      features: [
        "Parameter-efficient fine-tuning",
        "Custom loss functions",
        "Automated evaluation"
      ],
      challenges: [
        "Optimized memory usage for large models",
        "Maintained base model capabilities",
        "Automated evaluation pipeline"
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const ProjectDetails = ({ project, onBack }) => (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>
        
        <article className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold mb-4 font-serif">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-sm">
                {tag}
              </span>
            ))}
          </div>

          <img 
            src={project.image} 
            alt={project.title}
            className="w-full rounded-lg mb-6"
          />

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mt-6 mb-4 font-serif">Overview</h2>
            <p className="text-gray-600 mb-6">{project.description}</p>

            <h2 className="text-2xl font-bold mt-6 mb-4 font-serif">Technical Details</h2>
            <ul className="list-disc pl-6 mb-6">
              {project.technicalDetails.map((detail, index) => (
                <li key={index} className="text-gray-600 mb-2">{detail}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mt-6 mb-4 font-serif">Key Features</h2>
            <ul className="list-disc pl-6 mb-6">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-600 mb-2">{feature}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mt-6 mb-4 font-serif">Challenges & Solutions</h2>
            <ul className="list-disc pl-6 mb-6">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="text-gray-600 mb-2">{challenge}</li>
              ))}
            </ul>
          </div>

          <div className="flex space-x-4 mt-8">
            <a 
              href={project.github} 
              className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </a>
            {project.demo && (
              <a 
                href={project.demo}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            )}
          </div>
        </article>
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold font-serif">Your Name</h1>
            <div className="space-x-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600"
              >
                Projects
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="about" className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 font-serif">AI/ML Engineer</h1>
            <p className="text-xl text-gray-600 mb-8">
              Masters student specializing in Large Language Models and Generative AI
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <a 
                href="https://github.com/yourusername" 
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://medium.com/@yourusername" 
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
                title="Read my blog on Medium"
              >
                <LinkIcon className="w-6 h-6" />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="text-gray-600 hover:text-gray-900"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">About Me</h2>
            <p className="text-gray-600 mb-6">
              I'm a passionate AI engineer with 3 years of industry experience, currently pursuing my Master's degree. 
              My focus is on developing practical AI solutions using Large Language Models and Generative AI technologies. 
              I combine strong technical skills with business acumen to deliver impactful AI solutions.
            </p>
          </div>

          <div className="text-center mb-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-gray-900 animate-bounce"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-serif">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentPage('project');
                  window.scrollTo(0, 0);
                }}
                className="text-left bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-2 font-serif">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-blue-600 hover:text-blue-500">
                  Learn more →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <>
      {currentPage === 'home' ? (
        <HomePage />
      ) : (
        <ProjectDetails 
          project={selectedProject} 
          onBack={() => {
            setCurrentPage('home');
            setSelectedProject(null);
          }} 
        />
      )}
    </>
  );
};

export default Portfolio;