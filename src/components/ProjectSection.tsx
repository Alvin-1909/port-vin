"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { projectsData } from "./ProjectList";
import { motion, useInView } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
};

type ProjectListProps = {
  projectsData: Project[];
  tag: string;
};

const ProjectSection: React.FC = () => {
  const [tag, setTag] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filterProjectsByTag = (
    projects: Project[],
    tag: string | null
  ): Project[] => {
    if (!tag || tag === "All") {
      return projects;
    }
    return projects.filter((project) => project.tag.includes(tag));
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const filteredProjects = filterProjectsByTag(projectsData, tag);
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* <ProjectTag
          name="All"
          onClick={() => handleTagChange("All")}
          isSelected={tag === "All"}
        /> */}
        <ProjectTag
          name="Web"
          onClick={() => handleTagChange("Web")}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={() => handleTagChange("Mobile")}
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              tag={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
