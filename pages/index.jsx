import { useContext } from "react";
import PortfolioContext from "./contexts/PortfolioContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FirstPage from "./components/FirstPageComponent";
import Skills from "./components/SkillsPageComponent";
import Projects from "./components/ProjectsPageComponent";
import AboutPage from "./components/AboutPageComponent";
import ScrollToTopButton from "./components/ScrollToTop";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex flex-col border-gray-200 border-r-2">
        <Header />
      </div>
      <div className="flex flex-col w-full">
        {/* <FirstPage /> */}
        <ScrollToTopButton />
        <AboutPage />
        <Projects />
        <Skills />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
