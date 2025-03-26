import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaGraduationCap } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { IoMoon } from "react-icons/io5";
import { useState } from "react";
import { LuSunMoon } from "react-icons/lu";
import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

export default function Header() {
  const [nightMode, setNightMode] = useState(false);
  return (
    <header className="flex flex-col h-screen p-10">
      <div className="relative w-6 h-6">
        <IoMoon
          className={`cursor-pointer absolute transition-opacity duration-300 ${
            nightMode ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setNightMode(!nightMode)}
          size={20}
        />
        <LuSunMoon
          className={`cursor-pointer absolute transition-opacity duration-300 ${
            nightMode ? "opacity-0" : "opacity-100"
          }`}
          onClick={() => setNightMode(!nightMode)}
          size={20}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-4 place-items-center p-16 w-full">
        <div className="bg-gray-200 w-40 h-40 rounded-full border-2 border-gray-300"></div>
        <h1 className="text-gray-800 font-bold text-xl w-full">
          Hello, I'm <span className="text-blue-600">Joel Kilic</span>
        </h1>
      </div>
      {/* <hr className="border-t-2 border-black my-4" /> */}

      <div className="flex flex-col gap-2 font-semibold">
        <p className="font-semibold text-xl"> Contact</p>
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
      <hr className="border-t-2 border-black my-4" />
      <div className="flex flex-col gap-2 font-semibold">
        <p className="font-semibold text-xl"> Socials</p>
        <div className="flex flex-col gap-4">
          {" "}
          <div className="flex items-center gap-4">
            <FaGithubSquare
              size={35}
              className=" hover:cursor-pointer hover:scale-110 duration-300"
            />{" "}
            GitHub
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedin
              size={35}
              className=" hover:cursor-pointer duration-300 hover:scale-110"
            />
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
      <hr className="border-t-2 border-black my-4" />
      <div className="flex flex-col gap-4">
        <p className="font-semibold text-xl mb-2 flex gap-4 items-center">
          Education <PiStudentFill />{" "}
        </p>
        <div className="flex flex-col gap-4 text-sm font-semibold">
          <p className="flex gap-2 flex-wrap bg-gray-200 p-2 rounded-xl">
            {" "}
            YH - Chas Academy, Frontend deveolper for mobile & webb, 2024-2026
            current
          </p>
          <p className="flex gap-2 flex-wrap bg-gray-200 p-2 rounded-xl">
            {" "}
            Gymnasium - Barn & fritid, 2021-2024{" "}
          </p>
        </div>
      </div>

      <hr className="border-t-2 border-black my-4" />
      <div>
        <p className="font-semibold text-xl mb-2">Hobbies</p>
        <ul className="list-disc pl-5 space-y-2 font-semibold">
          <li>Gym</li>
          <li>Travel</li>
          <li>Hiking</li>
          <li>Programming</li>
        </ul>
      </div>
      <hr className="border-t-2 border-black my-4" />
      <div>
        <p className="font-semibold text-xl mb-2">Languages</p>
        <ul className="list-disc pl-5 space-y-2 font-semibold">
          <li>Swedish</li>
          <li>English</li>
          <li>Turkish</li>
          <li>Spanish</li>
        </ul>
      </div>
    </header>
  );
}
