import { useContext } from "react";
import AppContext from "../contexts/PortfolioContext";
import Project from "./Project";
import { motion } from "framer-motion";

export default function Projects() {
  const { projectsText } = useContext(AppContext);

  return (
    <div id="projects">
      <div className="mt-10 flex flex-col container mx-auto mb-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {" "}
          <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My projects
          </h1>
          <p className="text-center font-bold">
            Hover over card to show details
          </p>
        </motion.div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-8 p-10 ">
          {projectsText.map((item) => {
            return (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={item.ImgUrl}
                  alt="Infinity running game"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.skillsUsed.map((item) => {
                      return (
                        <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs">
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          <Project
            project="Willie the runner"
            description="Collect coins, unlock characters, and beat your high score in
                this fun 2D game. Level up complete missions after mission and
                get rewarded."
            imageUrl="/Willie-the-runner.jpg"
            alt="Infinity running game"
            skillsUsed={["Css", "Javascript", "Html"]}
            gitLink={"https://github.com/Joel050505/JumpGame"}
          />
          <Project
            imageUrl="/chas_pokemon.png"
            alt="Pokedex project"
            description="Pokédex where you can bookmark. Listen to pokeCries and check
                pokémons indeviduallies stats"
            project="Pokédex project"
            skillsUsed={["Html", "JavaScript", "React", "Next.JS", "Tailwind"]}
            gitLink={"https://github.com/Joel050505/chas_pokemon"}
          />
          <Project
            project="QuizMaster"
            description="A quiz game with questions from different subjects. See result
                from every game. Check a personal leaderboard"
            imageUrl="/chas_quiz.png"
            alt="Quizmaster"
            skillsUsed={["Html", "JavaScript", "React", "Next js", "Tailwind"]}
            gitLink={"https://github.com/Joel050505/chas_pokemon"}
          />
          <Project
            alt="Chase the rabbit"
            project="Chase the rabbit"
            description="Chase the rabbit is a snake(classic) inspired game where you can collect coins, check your highscore and buy new characters"
            imageUrl="/favicon-rabbit.jpg"
            skillsUsed={["Html", "JavaScript", "React", "Next js", "Tailwind"]}
            gitLink={"https://github.com/Dantilldev/chase-the-rabbit"}
          />
        </div>
      </div>
    </div>
  );
}
