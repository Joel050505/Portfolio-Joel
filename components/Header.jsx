import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaGraduationCap } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { IoMoon } from "react-icons/io5";
import { useState, useEffect } from "react";
import { LuSunMoon } from "react-icons/lu";
import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user's preference from localStorage
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
          className={`cursor-pointer absolute transition-opacity duration-300 ${
            darkMode ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleDarkMode}
          size={20}
        />
      </motion.div>

      <div className="flex flex-col justify-center items-center gap-4 place-items-center p-16 w-full">
        <div className="bg-gray-200 w-40 h-40 rounded-full border-2 border-gray-300">
          <Image
            src={"/6502423.jpg"}
            alt="DEV"
            width={180}
            height={180}
            className="rounded-full"
          />
        </div>
        <h1 className="text-gray-800 dark:text-white font-bold text-xl w-full text-center">
          Hello, I'm <span className="text-blue-600">Joel</span>
        </h1>
      </div>
      {/* <hr className="border-t-2 border-black my-4" /> */}

      <div className="flex flex-col gap-2 font-semibold">
        <p className="font-semibold text-xl">Contact</p>
        <li className="flex items-center gap-6">
          {" "}
          <BsFillTelephoneFill /> <span>072-329-63-33</span>
        </li>
        <li className="flex items-center gap-6">
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
      </div>
      <hr className="border-t-2 border-black my-4 dark:border-gray-400" />
      <div className="flex flex-col gap-2 font-semibold">
        <p className="font-semibold text-xl"> Socials</p>
        <div className="flex flex-col gap-4">
          {" "}
          <div className="flex items-center gap-4">
            <a href="https://github.com/Joel050505/JumpGame">
              <FaGithubSquare
                size={35}
                className=" hover:cursor-pointer hover:scale-110 duration-300"
              />{" "}
            </a>
            GitHub
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/joel-kilic-90b315327/">
              <FaLinkedin
                size={35}
                className=" hover:cursor-pointer duration-300 hover:scale-110"
              />
            </a>
            LinkedIn
          </div>
          <div className="flex items-center gap-4">
            <FaTwitterSquare
              size={35}
              className=" hover:cursor-pointer duration-300 hover:scale-110"
            />
            Twitter
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-black my-4 dark:border-gray-400" />
      <div className="flex flex-col gap-4">
        <p className="font-semibold text-xl mb-2 flex gap-4 items-center">
          Education <PiStudentFill />
        </p>
        <div className="flex flex-col gap-4 text-sm font-semibold">
          <p className="flex gap-2 flex-wrap bg-gray-200 p-2 rounded-xl dark:bg-slate-600">
            <p>Chas Academy</p>
            <p>Frontend developer for mobile & webb</p>
            <p>2024- </p>
          </p>
          <p className="flex gap-2 flex-wrap bg-gray-200 dark:bg-slate-600 p-2 rounded-xl">
            Barn & fritid, 2021-2024
          </p>
        </div>
      </div>

      <hr className="border-t-2 border-black my-4 dark:border-gray-400 " />
      <div>
        <p className="font-semibold text-xl mb-2">Hobbies</p>
        <ul className="list-disc pl-5 space-y-2 font-semibold">
          <li>Gym</li>
          <li>Travel</li>
          <li>Hiking</li>
          <li>Programming</li>
        </ul>
      </div>
      <hr className="border-t-2 border-black my-4 dark:border-gray-400" />
      <div>
        <p className="font-semibold text-xl mb-2">Languages</p>
        <ul className="list-disc pl-5 space-y-2 font-semibold">
          <li>Swedish</li>
          <li>English</li>
          <li>Turkish-Beginner to intermediate </li>
          <li>Spanish Beginner-level</li>
        </ul>
      </div>
    </header>
  );
}
