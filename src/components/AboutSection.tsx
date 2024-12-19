"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import { startTransition as reactStartTransition } from "react";
import TabButton from "./TabButton";
import { title } from "process";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Figma</li>
        <li>Contentful</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Fullstack Web Development Bootcamp</li>
        <li>at Purwadhika Digital Technology School</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>soon</li>
        <li>soon</li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("");
  const [isPending, reactStartTransition] = useTransition();

  const handleTabChange = (id: string) => {
    reactStartTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={"/images/aboutme.png"}
          typeof="image"
          alt="about"
          width={500}
          height={500}
          className="position relative"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            {" "}
            I am a Fullstack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript , React , Redux, Node.js , HTML, CSS , and
            Git. I am a quick learner and I am always looking for new challenges
            and opportunities to improve my skills. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start  mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>{" "}
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>{" "}
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certificatoins
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
