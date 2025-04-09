import { motion } from "framer-motion";
import SoftSkills from "./SoftSkillComponent";

const techSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Next.js",
  "Git",
  "Node.js",
  "Express.js",
  "MySQL",
  "Framer Motion",
  "Python",
  "Figma",
  "AWS",
];
const repeatedSkills = Array(10).fill(techSkills).flat();

export default function AnimatedSkillsComponent() {
  return (
    <div
      className="overflow-hidden whitespace-nowrap w-full py-4 dark:bg-slate-800 bg-gray-100 relative"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <motion.div
        className="flex gap-10 w-max"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 150,
          ease: "linear",
        }}
      >
        {repeatedSkills.map((skill, index) => (
          <div
            key={index}
            className="text-xl text-black dark:bg-slate-700 dark:text-white rounded-lg font-medium px-4 py-2 bg-white shadow min-w-max"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
