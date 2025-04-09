import SmallSkill from "./SmallSkill";
import Image from "next/image";
import { FaGithubSquare, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Project({
  project,
  description,
  imageUrl,
  alt,
  skillsUsed,
  gitLink,
  projectLink,
}) {
  const DropIn = ({ children, delay = 0.2 }) => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );

  return (
    <DropIn>
      <div className="relative rounded-lg overflow-hidden group cursor-pointer shadow-md hover:scale-105 transition-transform duration-300 dark:shadow-black">
        {/* Background image */}
        <Image
          src={imageUrl}
          alt={alt}
          className="w-full sm:h-62 h-72 object-cover"
          width={500}
          height={400}
          priority={true}
        />

        {/* Sliding overlay */}
        <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-white dark:bg-slate-800 text-black dark:text-white overflow-hidden transition-all duration-500 ease-in-out p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">{project}</h3>
            <p className="text-sm">{description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {skillsUsed.map((skill, index) => (
                <SmallSkill key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <a target="_blank" rel="noopener noreferrer" href={gitLink}>
              <FaGithubSquare size={28} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={projectLink}>
              <FaEye size={28} />
            </a>
          </div>
        </div>
      </div>
    </DropIn>
  );
}
