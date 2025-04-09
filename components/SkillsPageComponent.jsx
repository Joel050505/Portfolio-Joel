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
              <AnimatedSkillsComponent />
            </DropIn>

            <DropIn delay={0.2}>
              <SkillBar
                label="React"
                icon={<FaReact className="text-blue-400" size={25} />}
                percentage={60}
              />
            </DropIn>

            <DropIn delay={0.3}>
              <SkillBar
                label="Javascript"
                icon={
                  <IoLogoJavascript size={25} className="text-yellow-500" />
                }
                percentage={70}
              />
            </DropIn>

            <DropIn delay={0.4}>
              <SkillBar
                label="Html5"
                icon={<FaHtml5 className="text-orange-500" size={25} />}
                percentage={85}
              />
            </DropIn>

            <DropIn delay={0.5}>
              <SkillBar
                label="CSS"
                percentage={80}
                icon={<FaCss3Alt size={25} className="text-blue-600" />}
              />
            </DropIn>

            <DropIn delay={0.6}>
              <SkillBar
                percentage={70}
                label="TailwindCSS"
                icon={<RiTailwindCssFill size={25} className="text-cyan-400" />}
              />
            </DropIn>

            <DropIn delay={0.7}>
              <SkillBar
                label="Next.js"
                percentage={65}
                icon={
                  <SiNextdotjs
                    size={25}
                    className="text-black dark:text-white"
                  />
                }
              />
            </DropIn>

            <DropIn delay={0.8}>
              <SkillBar
                label="Python"
                percentage={30}
                icon={
                  <FaPython
                    size={25}
                    className="text-blue-600 dark:text-blue-500"
                  />
                }
              />
            </DropIn>
          </div>
          {/* his is the part where the soft skills are displayed */}
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
        </div>
      </div>
    </div>
  );
}
