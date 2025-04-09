import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { IoMoon } from "react-icons/io5";
import { useState, useEffect } from "react";
import { LuSunMoon } from "react-icons/lu";
import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const DropIn = ({ children, delay = 0.2 }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  function handleCopyEmail() {
    const email = "Joel.kilic@icloud.com";
    navigator.clipboard.writeText(email);
  }

  return (
    <header className="flex flex-col p-10">
      <motion.div className="relative w-6 h-6">
        <IoMoon
          className={`cursor-pointer absolute transition-opacity duration-300 ${
            darkMode ? "opacity-0" : "opacity-100"
          }`}
          onClick={toggleDarkMode}
          size={20}
        />
        <LuSunMoon
          className={`cursor-pointer absolute text-cyan-400 transition-opacity duration-300 ${
            darkMode ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleDarkMode}
          size={20}
        />
      </motion.div>

      <div className="flex flex-col justify-center items-center gap-4 place-items-center p-16 w-full">
        <motion.div
          className="bg-gray-200 w-40 h-40 rounded-full border-2 border-gray-300"
          initial={{ x: "-100vw" }} // Start off-screen (from left)
          animate={{ x: 0 }} // End up in the center
          transition={{ duration: 1 }} // Customize the transition
        >
          <Image
            src={"/6502423.jpg"}
            alt="Picture of A keyboard and a mouse"
            width={180}
            height={180}
            className="rounded-full"
          />
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-gray-800 dark:text-white font-bold text-xl w-full text-center">
            Hello, I'm <span className="text-blue-600">Joel</span>
          </h1>
        </motion.div>
      </div>

      <DropIn delay={0.2}>
        <div className="flex flex-col gap-2 font-semibold">
          <p className="font-semibold text-xl">Contact</p>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-6">
              <BsFillTelephoneFill /> <span>072-329-63-33</span>
            </li>
            <li
              onClick={handleCopyEmail}
              className="flex items-center gap-6 cursor-pointer"
            >
              <IoMdMail />
              <span>Joel.kilic@icloud.com</span>
            </li>
            <li className="flex items-center gap-6">
              <FaLocationDot />
              <span>Stockholm</span>
            </li>
            <li className="flex items-center gap-6">
              <PiStudentFill />
              <span>Student</span>
            </li>
          </ul>
        </div>
      </DropIn>

      <hr className="border-t-2 border-black my-4 dark:border-gray-400" />

      <DropIn delay={0.3}>
        <div className="flex flex-col gap-2 font-semibold">
          <p className="font-semibold text-xl">Socials</p>
          <div className="flex items-start flex-col gap-4">
            <a
              href="https://github.com/Joel050505/JumpGame"
              className="flex items-center gap-4 hover:scale-105 cursor-pointer duration-300"
            >
              <FaGithubSquare size={35} /> GitHub
            </a>
            <a
              className="flex items-center gap-4 hover:cursor-pointer duration-300 hover:scale-105"
              href="https://www.linkedin.com/in/joel-kilic-90b315327/"
            >
              <FaLinkedin size={35} /> LinkedIn
            </a>
            <a className="flex items-center gap-4 hover:cursor-pointer duration-300 hover:scale-105">
              <FaTwitterSquare size={35} /> Twitter
            </a>
          </div>
        </div>
      </DropIn>

      <hr className="border-t-2 border-black my-4 dark:border-gray-400" />

      <DropIn delay={0.4}>
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-xl mb-2 flex gap-4 items-center">
            Education <PiStudentFill />
          </p>
          <div className="flex flex-col gap-4 text-sm font-semibold">
            <div className="flex gap-2 flex-wrap bg-gray-200 p-2 rounded-xl dark:bg-slate-600">
              <p>Chas Academy</p>
              <p>Frontend developer for mobile & webb</p>
              <p>2024- </p>
            </div>
            <p className="flex gap-2 flex-wrap bg-gray-200 dark:bg-slate-600 p-2 rounded-xl">
              Barn & fritid, 2021-2024
            </p>
          </div>
        </div>
      </DropIn>

      <hr className="border-t-2 border-black my-4 dark:border-gray-400 " />

      <DropIn delay={0.5}>
        <div>
          <p className="font-semibold text-xl mb-2">Hobbies</p>
          <ul className="list-disc pl-5 space-y-2 font-semibold">
            <li>Gym</li>
            <li>Travel</li>
            <li>Hiking</li>
            <li>Programming</li>
          </ul>
        </div>
      </DropIn>

      <hr className="border-t-2 border-black my-4 dark:border-gray-400" />

      <DropIn delay={0.6}>
        <div>
          <p className="font-semibold text-xl mb-2">Languages</p>
          <ul className="list-disc pl-5 space-y-2 font-semibold">
            <li>Swedish</li>
            <li>English</li>
            <li>Turkish-Beginner to intermediate</li>
            <li>Spanish Beginner-level</li>
          </ul>
        </div>
      </DropIn>
    </header>
  );
}
