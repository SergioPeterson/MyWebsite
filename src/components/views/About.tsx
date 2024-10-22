import React, { FC } from "react";
import { AboutProps } from "../../types";

const About: FC<AboutProps> = ({ windowWidth }) => {
  const paddingClass = windowWidth > 768 ? "pt-8" : "";
  return (
    <section id="about">
      <div
        className={`about-content text-base text-left font-thin text-slate pr-8 pl-3 ${paddingClass}`}
      >
        <br />
        <p className="indent-8">
          I am a Senior student at{" "}
          <a
            href="https://cdss.berkeley.edu/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-green"
          >
            University of California, Berkeley
          </a>
          , where I am dedicated to obtaining a Bachelor&apos;s in{" "}
          <a
            href="https://cdss.berkeley.edu/dsus/academics/data-science-major"
            target="_blank"
            rel="noreferrer"
            className=" text-white hover:text-green"
          >
            Data Science 
          </a>
          , with a focus on{" "} 
          
          <a
            href="https://cdss.berkeley.edu/degrees/domain-emphasis/robotics"
            target="_blank"
            rel="noreferrer"
            className=" text-white hover:text-green"
          >
            Robotics 
          </a>
          , and{" "} 
          <a
            href="https://www2.eecs.berkeley.edu/Courses/CS169/"
            target="_blank"
            rel="noreferrer"
            className=" text-white hover:text-green"
          >
            Software Engineering
          </a>
          . Since I was a child, I have been captivated
          by puzzles and solving problems, and the world of computer science
          offers a vast amount of novel solutions for the problems of today and
          the future.
        </p>
        <br />
        <p className="indent-8">
          I aspire to acquire the necessary technical skills from UC Berkely 
          to create significant and meaningful contributions that
          address the ever-growing issues in our interconnected world. With a
          relentless drive to continually push my boundaries, I am confident in
          my ability to make a positive impact.
        </p>
        <p className="indent-8"></p>
        <br />
        <p className="indent-8">
          Throughout my academic journey, I am excited about establishing
          connections with industry professionals, fellow students, and
          potential mentors. I believe that by engaging in thought-provoking
          discussions and exchanging ideas, we can collectively explore
          opportunities within the realms of computer science and data science.
          I am eager to participate in internships, research collaborations, and
          networking opportunities that will further enrich my skills and allow
          me to contribute to impactful projects.
        </p>
        <br />
        <p className="indent-8">
          Please feel free to reach out to me via email or connect with me on
          LinkedIn. I welcome any opportunity to connect and collaborate.
        </p>
      </div>
    </section>
  );
};

export default About;
