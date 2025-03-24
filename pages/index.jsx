import { useContext } from "react";
import PortfolioContext from "./contexts/PortfolioContext";
import Header from "./components/header";
import FirstPage from "./components/FirstPageComponent";
import Skills from "./components/SkillsPageComponent";
import Projects from "./components/ProjectsPageComponent";
import AboutPage from "./components/AboutPageComponent";

export default function Home() {
  const { activePage, setActivePage } = useContext(PortfolioContext);

  return (
    <div className="flex">
      <div className="flex flex-col">
        <Header />
      </div>
      <div className="flex flex-col"></div>
    </div>
  );
}
