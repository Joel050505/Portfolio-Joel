import Link from "next/link";
export default function AboutPage() {
  const handleScroll = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start", // Aligns the section at the top
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-6 justify-center mt-40 mb-48">
        {" "}
        <div className="flex flex-col gap-4 w-8/12">
          <h1 className="text-4xl dark:text-white font-bold text-gray-800">
            About Me
          </h1>
          <p className="font-bold text-md  w-full flex gap-2">
            <span>Front end Developer Student </span>

            {/* <span className="">Chas Academy</span> */}
          </p>
          <p>
            I'm a passionate developer with a love for creating innovative web
            solutions that make a real difference. With 1+ years of experience
            in Front-end development with a small touch of backend, I specialize
            in turning complex problems into elegant, user-friendly
            applications.
          </p>
          My approach combines technical expertise with creative
          problem-solving, always aiming to deliver high-quality, scalable
          solutions.
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleScroll}
            className="p-2 bg-blue-600 text-white rounded-md w-32 hover:bg-blue-700 transition-all ease-out duration-300"
          >
            View Projects
          </button>

          <button className="p-2 bg-gray-200 dark:bg-gray-500 dark:hover:bg-gray-600 rounded-md w-32 hover:bg-gray-300 transition-all ease-out duration-300">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
