import { useContext } from "react";
import AppContext from "../contexts/PortfolioContext";

export default function Projects() {
  const { projectsText } = useContext(AppContext);

  return (
    <div>
      <div className="mt-10 flex flex-col container mx-auto mb-4">
        <div>
          {" "}
          <h1 className="text-center text-4xl font-bold text-gray-800 mb-4">
            My projects
          </h1>{" "}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 p-10 ">
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
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 cursor-pointer duration-300 hover:shadow-xl">
            <img
              src=""
              alt="Infinity running game"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 bg-gray-50 min-h-full">
              <h3 className="text-xl font-semibold mb-2">Willie the runner</h3>
              <p className="text-gray-700">
                Collect coins, unlock characters, and beat your high score in
                this fun 2D game. Level up complete missions after mission and
                get rewarded.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                  Css
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                  Javascript
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                  Html
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 cursor-pointer duration-300 hover:shadow-xl">
            <img
              src=""
              alt="Pokedex project"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 bg-gray-50 min-h-full">
              <h3 className="text-xl font-semibold mb-2">Pokédex project</h3>
              <p className="text-gray-700">
                Pokédex where you can bookmark. Listen to pokeCries and check
                pokémons indeviduallies stats
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                  Html
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                  JavaScript
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                  React
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                  Next js
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 cursor-pointer duration-300 hover:shadow-xl">
            <img src="" alt="Quizmaster" className="h-48 w-full object-cover" />
            <div className="p-6 bg-gray-50 min-h-full">
              <h3 className="text-xl font-semibold mb-2">QuizMaster</h3>
              <p className="text-gray-700">
                A quiz game with questions from different subjects. See result
                from every game. Check the leaderboard too see your knowledge
                and compete with yourself
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                  Html
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                  JavaScript
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                  React
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                  Next js
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
