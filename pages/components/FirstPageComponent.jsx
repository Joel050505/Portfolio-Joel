import { useContext } from "react";

import PortfolioContext from "../contexts/PortfolioContext";
import Link from "next/link";

export default function FirstPage() {
  const { activePage, setActivePage } = useContext(PortfolioContext);

  return (
    <div>
      <div className="md:flex-row flex-col flex justify-center items-center gap-20 mt-10 mb-28 bg-gray-50">
        <div className="flex flex-col gap-2">
          {" "}
          <h1 className="text-gray-800 font-bold text-5xl">
            Hello, I'm <span className="text-blue-600">Joel Kilic</span>
          </h1>
          <p className="text-xl flex items-center text-gray-600 mb-8">
            Front end Developer | Student | Chas Academy{" "}
          </p>
          <div className="flex gap-4">
            <Link href="/projects">
              <button
                onClick={() => {
                  setActivePage("projects");
                }}
                className="p-2 bg-blue-600 text-white rounded-md w-32 hover:bg-blue-700 transition-all ease-out duration-300"
              >
                View Projects
              </button>
            </Link>
            <button className="p-2 bg-gray-200 rounded-md w-32 hover:bg-gray-300 transition-all ease-out duration-300">
              Download CV
            </button>
          </div>
        </div>
        <div>
          <img
            src="/blank-profile-pic.webp"
            alt="Profile"
            className="h-96 w-96 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
