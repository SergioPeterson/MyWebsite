import React from "react";
import ExperienceComponent from "../generic/ExperienceComponent";
import { motion, useAnimation } from "framer-motion";
import { ExperienceProps } from "../../types";

const Experience: React.FC<ExperienceProps> = ({ windowWidth }) => {
  const paddingClass = windowWidth > 768 ? "pt-8" : "";

  const experiences = [
    {
      date: "Sep 2024 - Present",
      logo: "/assets/bair.png",
      title: "LLM Researcher | Berkeley Artificial Intelligence Research (BAIR)",
      description:
        "Researching advanced NLP techniques and game theory optimization to develop a language model specialized in poker strategy, aiming to enhance decision-making and reasoning abilities.",
      link: "https://bair.berkeley.edu/",
      skills: ["Python", "LLM", "GTO", "DL", "PyTorch", "NLP"],
      highlights: [
        "Developing a specialized LLM for poker strategy using Python, NLP techniques, and GTO poker theory.",
        "Conducting data analysis and visualization using Pandas, Matplotlib, and TensorFlow/PyTorch to evaluate model performance."
      ],
    },
    {
      date: "Apr 2024 - Present",
      logo: "/assets/airacingtech.jpeg",
      title: "Simulation and Perception Researcher | Robotics Open Autonomous Racing (ROAR)",
      description:
        "Enhancing simulation and cloud deployment processes for autonomous racing, with a focus on optimizing resource management and vehicle dynamics through advanced DevOps practices.",
      link: "https://roar.berkeley.edu/",
      skills: ["ROS", "Simulation", "Azure", "DevOps", "Docker", "Packer"],
      highlights: [
        "Built CI pipelines with GitHub Actions for automated testing and deployment on Azure VMs, leveraging custom Docker scripts for resource management.",
        "Optimized cloud infrastructure for the AI Racing Tech autonomy stack using Packer and Terraform, automating VM provisioning and resource deallocation.",
        "Integrated OSSDC Simulator and custom asset management through GitHub CLI, improving vehicle dynamics and testing.",
        "Developed a ghost car multi-agent system, improving controller model performance by a factor of 3x."
      ],
    },
    {
      date: "May 2024 - Aug 2024",
      logo: "/assets/lexius_logo.jpeg",
      title: "CV/ML Summer Intern | Lexius",
      description:
        "Improved model accuracy and performance by integrating advanced techniques in computer vision and optimization, while enhancing the scalability of training workflows through infrastructure migration.",
      link: "https://lexius.ai/",
      skills: [
        "CV",
        "Optimization API",
        "AWS",
        "GCP",
        "PyTorch",
        "RESTful APIs",
      ],
      highlights: [
        "Achieved a 5% accuracy and 19% F1-score improvement by integrating RGB data with varied window sizes, temporal resolutions, and normalization techniques.",
        "Migrated infrastructure from GCP Kubernetes to AWS Batch, improving scalability and training performance.",
        "Fine-tuned models like Video Swin Transformer and Conv3D, reducing false positives to under 3%.",
        "Designed and optimized database schemas, enhancing data retrieval speeds by 30% and ensuring data integrity.",
        "Implemented robust backend services using RESTful APIs, supporting high-performance, data-driven applications.",
        "Enhanced precision by 11% and recall by 19% through cross-attention mechanisms and person masking."
      ],
    },
    {
      date: "Jan 2024 - May 2024",
      logo: "/assets/kroai.png",
      title: "Web & Cloud Development Intern | Koer A.I., Inc. - Project AEI",
      description:
        "Developed an AI-driven platform to deliver wellness insights, leveraging advanced machine learning techniques and cloud infrastructure to optimize performance and user engagement.",
      link: "https://www.koer.ai/",
      skills: [
        "Python",
        "SQL",
        "ML/DL",
        "TypeScript",
        "AWS",
        "BigQuery",
        "React",
        "React Native",
      ],
      highlights: [
        "Developed a wellness analytics platform using React, React Native, and TypeScript, optimizing data retrieval with Firebase and BigQuery, increasing speed by 10%.",
        "Implemented AI-powered emotion recognition using Python, TensorFlow, and Hugging Face Transformers, enhancing user engagement and personalization.",
        "Streamlined user authentication with OAuth 2.0 and Firestore, providing secure Single Sign-On solutions for over 100k users."
      ],
    },
  ];
  

  const controls = useAnimation();

  return (
    <section id="experience">
      <div className={`experience-content ${paddingClass}`}>
        <div className="section-placeholder"></div>
        {experiences.slice(0, 4).map(
          (
            experience,
            index, // first 4 experiences
          ) => (
            <ExperienceComponent key={index} {...experience} />
          ),
        )}

        <motion.div
          onMouseEnter={() => controls.start({ x: 1, y: 0 })}
          onMouseLeave={() => controls.start({ x: 0, y: 0 })}
        >
          <div className="flex items-center gap-2 mt-3 cursor-pointer hover:underline decoration-green">
            <span className="text-white font-semibold text-base">
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Resume
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

export default Experience;
