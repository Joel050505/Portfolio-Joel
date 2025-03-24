import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { useContext } from "react";
import PortfolioContext from "../contexts/PortfolioContext";
import Link from "next/link";
import { motion } from "motion/react";
import { easeInOut } from "framer-motion";

export default function Header() {
  const { activePage, setActivePage } = useContext(PortfolioContext);

  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const credentials = {
    username: process.env.NEXT_PUBLIC_USERNAME,
    password: process.env.NEXT_PUBLIC_PASSWORD,
  };

  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });

  function handleLogin() {
    if (
      inputValues.password == credentials.password &&
      inputValues.username == credentials.username
    ) {
      setLoggedIn(true);
      window.location.href = "/admin";
    } else {
      alert("Username or password was wrong");
    }
  }

  function handleClick(page) {
    setActivePage(page);
    setMobileMenuOpen(false);
  }

  return (
    <div>
      <div className="p-4 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="pl-4 md:pl-16">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              Joel Kilic
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:flex-col space-x-6 items-center">
            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: activePage === "home" ? "100%" : 0 }}
                transition={{ duration: 0.3, ease: easeInOut }}
                className="absolute bottom-0 left-0 bg-blue-600 h-[2px]"
              />
              <Link
                onClick={() => handleClick("home")}
                className={`${
                  activePage === "home"
                    ? "text-blue-600 font-bold scale-105 transition-all duration-300"
                    : "text-black transition-all duration-300"
                }`}
                href="/"
              >
                {" "}
                <span> Home </span>
              </Link>
            </div>

            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: activePage === "about" ? "100%" : 0 }}
                transition={{ duration: 0.3, ease: easeInOut }}
                className="absolute bottom-0 left-0 bg-blue-600 h-[2px]"
              />
              <Link
                onClick={() => handleClick("about")}
                className={`${
                  activePage === "about"
                    ? "text-blue-600 font-bold  scale-105 transition-all duration-300"
                    : "text-black transition-all duration-300"
                }`}
                href="/about"
              >
                About
              </Link>
            </div>
            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: activePage === "projects" ? "100%" : 0 }}
                transition={{ duration: 0.3, ease: easeInOut }}
                className="absolute bottom-0 left-0 bg-blue-600 h-[2px]"
              />
              <Link
                onClick={() => handleClick("projects")}
                className={`${
                  activePage === "projects"
                    ? "text-blue-600 font-bold scale-105 transition-all duration-300"
                    : "text-black transition-all duration-300"
                }`}
                href="/projects"
              >
                Projects
              </Link>
            </div>

            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: activePage === "skills" ? "100%" : 0 }}
                transition={{ duration: 0.3, ease: easeInOut }}
                className="absolute bottom-0 left-0 bg-blue-600 h-[2px]"
              />

              <Link
                onClick={() => handleClick("skills")}
                className={`${
                  activePage === "skills"
                    ? "text-blue-600 font-bold scale-105 transition-all duration-300"
                    : "text-black transition-all duration-300"
                }`}
                href="/skills"
              >
                Skills
              </Link>
            </div>

            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: activePage === "contact" ? "100%" : 0 }}
                transition={{ duration: 0.3, ease: easeInOut }}
                className="absolute bottom-0 left-0 bg-blue-600 h-[2px]"
              />

              <Link
                onClick={() => handleClick("contact")}
                className={`${
                  activePage === "contact"
                    ? "text-blue-600 font-bold scale-105 transition-all duration-300"
                    : "text-black transition-all duration-300"
                }`}
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-10 pr-16">
            <button className="p-2 bg-blue-600 text-white rounded-xl w-24 font-bold hover:bg-blue-700 transition-all ease-out duration-300">
              Hire Me
            </button>
            {/* <button onClick={() => setShowModal(!showModal)}>
              <User size={40} className="hover:text-gray-600" />
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4 pr-4">
            <button className="p-2 bg-blue-600 text-white rounded-xl w-24 font-bold hover:bg-blue-700 transition-all ease-out duration-300">
              Hire Me
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 border-t pt-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div className="flex flex-col space-y-4 px-4">
              <Link
                onClick={() => handleClick("home")}
                className={`${
                  activePage === "home"
                    ? "text-blue-600 font-bold underline underline-offset-8"
                    : "text-black"
                }`}
                href="/"
              >
                Home
              </Link>
              <Link
                onClick={() => handleClick("about")}
                className={`${
                  activePage === "about"
                    ? "text-blue-600 font-bold underline underline-offset-8"
                    : "text-black"
                }`}
                href="/about"
              >
                About
              </Link>
              <Link
                onClick={() => handleClick("projects")}
                className={`${
                  activePage === "projects"
                    ? "text-blue-600 font-bold underline underline-offset-8"
                    : "text-black"
                }`}
                href="/projects"
              >
                Projects
              </Link>
              <Link
                onClick={() => handleClick("skills")}
                className={`${
                  activePage === "skills"
                    ? "text-blue-600 font-bold underline underline-offset-8"
                    : "text-black"
                }`}
                href="/skills"
              >
                Skills
              </Link>
              <Link
                onClick={() => handleClick("contact")}
                className={`${
                  activePage === "contact"
                    ? "text-blue-600 font-bold underline underline-offset-8"
                    : "text-black"
                }`}
                href="/contact"
              >
                Contact
              </Link>
              {/* <button
                onClick={() => {
                  setShowModal(!showModal);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-gray-600"
              >
                <User size={24} />
                <span>Admin Login</span>
              </button> */}
            </motion.div>
          </motion.div>
        )}
      </div>
      {/* // Modal for admin page, need to log in */}
      {showModal ? (
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center gap-4 bg-white shadow-md w-74 p-10 absolute rounded-xl mt-10 ">
            <button
              onClick={() => setShowModal(false)}
              className="text-red-500 absolute right-4 top-4 cursor-pointer hover:text-red-700 bg-white"
            >
              <X size={25} />
            </button>

            <p className="bg-white font-bold underline underline-offset-2">
              Admin log in page
            </p>
            <div className="bg-white flex flex-col">
              <label htmlFor="" className="bg-white">
                Enter username
              </label>
              <input
                onChange={(e) => {
                  setInputValues({ ...credentials, username: e.target.value });
                }}
                className="p-2 rounded-md border-2 border-gray-500 bg-white"
                type="text"
                placeholder="Username..."
              />
            </div>
            <div className="bg-white flex flex-col">
              <label className="bg-white" htmlFor="password">
                Enter password
              </label>
              <input
                onChange={(e) => {
                  setInputValues({ ...credentials, password: e.target.value });
                }}
                id="password"
                className="bg-white p-2 rounded-md border-2 border-gray-500"
                type="text"
                placeholder="Password"
              />
            </div>
            <div>
              <button
                onClick={handleLogin}
                className="p-2 bg-gray-200 w-28 rounded-xl hover:bg-gray-300"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
