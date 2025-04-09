import { motion } from "framer-motion";

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

export default function AnimatedSkillsComponent({ direction = "left" }) {
  const distance = 10000; // adjust depending on how far you want it to scroll
  const from = direction === "left" ? 0 : -distance;
  const to = direction === "left" ? -distance : 0;

  return (
    <div
      className="overflow-hidden shadow-2xl shadow-red-500 whitespace-nowrap w-full py-4 dark:bg-slate-800 relative"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <motion.div
        className="flex gap-10 w-max"
        animate={{ x: [from, to] }}
        transition={{
          repeat: Infinity,
          duration: 85,
          ease: "linear",
        }}
      >
        {repeatedSkills.map((skill, index) => (
          <div
            key={index}
            className="text-xl text-black dark:bg-slate-700 dark:text-white rounded-3xl font-medium px-4 py-2 bg-white shadow min-w-max"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
