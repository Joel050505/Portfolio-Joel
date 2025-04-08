import { FaReact, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import SoftSkills from "./SoftSkillComponent";
import SkillBar from "./SkillsComponent";

export default function Skills() {
  return (
    <div>
      <div className="mt-10 sm:flex flex-col justify-center mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-1 p-20 gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl mb-8 text-gray-800 dark:text-white font-bold">
              Technical Skills
            </h2>

            <SkillBar
              label="React"
              icon={<FaReact className="text-blue-400" size={25} />}
              percentage={60}
            />

            <SkillBar
              label="Javascript"
              icon={<IoLogoJavascript size={25} className="text-yellow-500" />}
              percentage={70}
            />

            <SkillBar
              label="Html5"
              icon={<FaHtml5 className="text-orange-500" size={25} />}
              percentage={85}
            />

            <SkillBar
              label="CSS"
              percentage={80}
              icon={<FaCss3Alt size={25} className="text-blue-600" />}
            />

            <SkillBar
              percentage={70}
              label="TailwindCSS"
              icon={<RiTailwindCssFill size={25} className="text-cyan-400" />}
            />

            <SkillBar
              label="Next.js"
              percentage={65}
              icon={
                <SiNextdotjs size={25} className="text-black dark:text-white" />
              }
            />

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
          </div>

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
