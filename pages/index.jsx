import Header from "../components/Header";
import Skills from "../components/SkillsPageComponent";
import Projects from "../components/ProjectsPageComponent";
import AboutPage from "../components/AboutPageComponent";
import ScrollToTopButton from "../components/ScrollToTop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col duration-1000 md:flex-row dark:bg-gray-800 dark:text-white subpixel-antialiase">
      <div className="flex flex-col border-gray-200 border-r-2">
        <Header />
      </div>

      <div className="flex flex-col">
        <ScrollToTopButton />
        <AboutPage />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
