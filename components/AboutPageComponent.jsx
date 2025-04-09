import Link from "next/link";
import { motion } from "framer-motion";

// Helper component to animate text word-by-word
function AnimatedText({
  text,
  delayPerWord = 0.08,
  className = "",
  delayPerLetter = 0.01,
}) {
  const words = text.split(" ");

  return (
    <p className={`flex flex-wrap gap-[5px] ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${wordIndex}-${letterIndex}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: (wordIndex * word.length + letterIndex) * delayPerLetter,
                duration: 0.4,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
          {/* Add space between words */}
          <motion.span
            key={`space-${wordIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: (wordIndex * word.length + word.length) * delayPerLetter,
              duration: 0.1,
            }}
          >
            &nbsp;
          </motion.span>
        </span>
      ))}
    </p>
  );
}

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/Cv Joel Kilic - Coding.pdf"; // path to your file
  link.download = "CV-Joel-Kilic"; // name to save as
  link.click();
};

export default function AboutPage() {
  const handleScroll = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-6 justify-center mt-40 mb-48">
        <div className="flex flex-col gap-6 w-8/12">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl dark:text-white font-bold text-gray-800"
          >
            About Me
          </motion.h1>

          <AnimatedText
            text="Front end Developer Student"
            className="font-bold text-md dark:text-white"
          />

          <AnimatedText
            text="I'm a passionate developer with a love for creating innovative web solutions that make a real difference. With 1+ year of experience in Front-end development with a small touch of backend, I specialize in turning complex problems into elegant, user-friendly applications."
            delayPerWord={0.05}
            className="text-md dark:text-gray-300"
          />
        </div>

        <motion.div
          className="flex place-content-start gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <button
            onClick={handleScroll}
            className="p-2 bg-blue-600 text-white rounded-md w-32 hover:bg-blue-700 transition-all ease-out duration-300"
          >
            View Projects
          </button>

          <button
            onClick={handleDownload}
            className="p-2 bg-gray-200 dark:bg-gray-500 dark:hover:bg-gray-600 rounded-md w-32 hover:bg-gray-300 transition-all ease-out duration-300"
          >
            Download CV
          </button>
        </motion.div>
      </div>
    </div>
  );
}
