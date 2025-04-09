import { FaReact, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import SoftSkills from "./SoftSkillComponent";
import SkillBar from "./SkillsComponent";
import { motion } from "framer-motion";
import AnimatedSkillsComponent from "./AnimatedSkillsComponent";

export default function Skills() {
  // This is the part where the skills are displayed
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
    <div>
      <div className="mt-10 sm:flex flex-col justify-center mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-1 p-20 gap-10">
          <div className="flex flex-col gap-2">
            <DropIn delay={0.1}>
              <h2 className="text-3xl mb-8 text-gray-800 dark:text-white font-bold">
                Technical Skills
              </h2>
              <DropIn delay={0.07}>
                <AnimatedSkillsComponent direction="left" />
              </DropIn>
              <DropIn delay={0.2}>
                <AnimatedSkillsComponent direction="right" />
              </DropIn>
            </DropIn>
          </div>
          {/* his is the part where the soft skills are displayed */}
          <DropIn delay={0.3}>
            <div>
              <h2 className="text-3xl mb-8 text-gray-800 dark:text-white font-bold">
                Soft Skills
              </h2>
              <div className="flex flex-wrap gap-4">
                {" "}
                <SoftSkills text="Problem solving" />
                <SoftSkills text="Teamwork" />
                <SoftSkills text="Communication" />
                <SoftSkills text="Creativity" />
                <SoftSkills text="Adaptability" />
                <SoftSkills text="Time Management" />
              </div>
            </div>
          </DropIn>
        </div>
      </div>
    </div>
  );
}
