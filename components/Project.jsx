import SmallSkill from "./SmallSkill";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaEye,
} from "react-icons/fa";
import Link from "next/link";

export default function Project({
  project,
  description,
  imageUrl,
  alt,
  skillsUsed,
  gitLink,
  projectLink,
}) {
  return (
    <div className="bg-white relative dark:bg-slate-600 rounded-lg shadow-md dark:shadow-2xl dark:shadow-black overflow-hidden hover:scale-105 cursor-pointer duration-300 hover:shadow-xl">
      <Image
        src={imageUrl}
        alt={alt}
        className="h-48 w-full object-cover"
        width={500}
        height={400}
        priority={true}
      />
      <div className="p-6 gap-2 bg-gray-50 dark:bg-gray-800 min-h-full">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          {project}
        </h3>
        <p className="text-gray-700 dark:text-white">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {skillsUsed.map((skill, index) => (
            <SmallSkill key={index} skill={skill} />
          ))}
        </div>
        <div className="flex gap-4">
          <a target="_blank" rel="noopener noreferrer" href={gitLink}>
            <FaGithubSquare
              className="text-black mt-4 dark:text-white"
              size={25}
            />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={projectLink}>
            <FaEye className="text-black mt-4 dark:text-white" size={25} />
          </a>
        </div>
      </div>
    </div>
  );
}
