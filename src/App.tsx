import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import { SelectedPage } from "@/shared/types";
import Home from "@/screens/home";
import Skills from "@/screens/skills";
import Experiences from "@/screens/experiences";
import Porjects from "@/screens/projects";
import Contact from "@/screens/contact";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleSrcoll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("srcoll", handleSrcoll);
    return () => window.removeEventListener("scroll", handleSrcoll);
  }, []);

  return (
    <div className="m-0 bg-black w-full h-screen">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Skills setSelectedPage={setSelectedPage} />
      <Experiences setSelectedPage={setSelectedPage} />
      <Porjects setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
