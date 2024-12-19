import React from "react";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type ProjectCardProps = {
  imgUrl: string;
  title: string;
  description: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  tag,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative group">
        <Image
          src={imgUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 cursor-pointer">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            {" "}
            <CodeBracketIcon className="w-10 h-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            {" "}
            <EyeIcon className="w-10 h-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="p-4 text-white rounded-b-xl mt-3 bg-[#181818] py-6">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {tag.map((t, index) => (
            <li
              key={index}
              className="bg-blue-500 text-xs px-2 py-1 rounded-full"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
