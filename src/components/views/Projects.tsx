import React from "react";
import ProjectComponent from "../generic/ProjectComponent";
import { motion, useAnimation } from "framer-motion";
import { Project, ProjectsProps } from "../../types";

const Projects: React.FC<ProjectsProps> = ({ windowWidth }) => {
  const paddingClass = windowWidth > 768 ? "pt-8" : "";

  const projects: Project[] = [
    {
      image: "/assets/trans.png",
      title: "VoidFormer",
      description:
        "Developed a state-of-the-art translation model from scratch using the Transformer architecture, focusing on Spanish-to-English translation. Utilized the attention mechanism to fine-tune the model, achieving high translation accuracy. The project involved custom model architecture design, hyperparameter tuning, and extensive testing to optimize performance.",
      link: "https://github.com/yourusername/voidformer",
      skills: ["PyTorch", "Transformers", "Attention Mechanism", "Machine Translation", "Hyperparameter Tuning"],
    },  
    {
      image: "/assets/mal.png",
      title: "Rate My Anime Software",
      description:
        "Developed an AI-powered system that ranks users' anime preferences using a K-Nearest Neighbors algorithm, providing personalized responses through the Llama 2 API. Built a full-stack web application using ReactJS and PostgreSQL, integrating OAuth 2.0 and the MyAnimeList API for secure user authentication and data retrieval.",
      link: "https://github.com/yourusername/rate-my-anime",
      skills: ["ReactJS", "PostgreSQL", "OAuth 2.0", "Llama 2 API", "KNN"],
    },
    {
      image: "/assets/yelp.png",
      title: "Yelp Restaurant Review Score Prediction",
      description:
        "Analyzed a large Yelp dataset to predict restaurant review scores using machine learning models like Neural Networks, Random Forest, and Linear Regression. Achieved 88% accuracy and conducted advanced sentiment analysis using VADER to gain insights into customer preferences and feedback trends.",
      link: "https://github.com/yourusername/yelp-review-prediction",
      skills: ["Python", "Pandas", "NLTK", "Sklearn", "VADER", "Word2Vec"],
    },
    {
      image: "/assets/voicecontroller.png",
      title: "Voice Recognition Automobile",
      description:
        "Designed a voice-controlled car that responds to user commands in real-time, leveraging machine learning techniques like linear regression, SVD, and PCA for voice detection. Implemented linear feedback for motor synchronization and path correction, enabling smooth and accurate navigation.",
      link: "https://github.com/yourusername/voice-recognition-automobile",
      skills: ["Python", "Machine Learning", "Linear Regression", "PCA", "Control Systems"],
    },  
    {
      image: "/assets/website.png",
      title: "Personal Website",
      description:
        "Designed and developed a personal website as a portfolio to showcase my projects and skills. The website is built using React and Tailwind CSS and is hosted on GitHub Pages. The website also serves as a reflection of my growth as a developer as I continue to add new projects and skills.",
      link: "https://github.com/SergioPeterson/MyWebsite",
      skills: ["React", "Node", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    },
  ];

  const controls = useAnimation();

  return (
    <section id="projects">
      <div className={`projects-content ${paddingClass}`}>
        <div className="">
          {projects.map((project: Project, index: number) => (
            <ProjectComponent key={index} {...project} />
          ))}
        </div>
        <motion.div
          onMouseEnter={() => controls.start({ x: 1, y: 0 })}
          onMouseLeave={() => controls.start({ x: 0, y: 0 })}
        >
          <div className="flex items-center gap-2 mt-3 cursor-pointer hover:underline decoration-green">
            <span className="text-white font-semibold text-base">
              <a
                href="https://github.com/SergioPeterson?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Project List
              </a>
            </span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              animate={controls}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
