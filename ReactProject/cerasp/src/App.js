import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Header from "./components/layouts/Header";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Expertises from "./pages/Expertises";
import Sectors from "./pages/Sectors";
import Projects from "./pages/Projects";
import News from "./pages/News";
import useSmoothScroll from "./hooks/useSmoothScroll";
import useScrollTracker from "./hooks/useScrollTracker";
import BackgroundCircle from "./components/uicomponents/BackgroundCircle";
import "./App.css";

function App() {
  const mainRef = useSmoothScroll();
  const { theme } = useContext(ThemeContext);
  const { scrollRef, scrollProgress } = useScrollTracker();

  // Set the custom property for scroll progress
  if (scrollRef.current) {
    scrollRef.current.style.setProperty("--scroll-progress", scrollProgress);
  }

  return (
    <>
      <Header />
      <main
        className={`main-content app ${theme} background-gradient`}
        ref={(el) => {
          mainRef.current = el;
          scrollRef.current = el;
        }}
      >
        <BackgroundCircle top={50} left={50} scrollProgress={scrollProgress} />
        <BackgroundCircle top={10} left={10} scrollProgress={scrollProgress} />
        <BackgroundCircle top={50} left={50} scrollProgress={scrollProgress} />
        <BackgroundCircle top={50} left={50} scrollProgress={scrollProgress} />
        {/* Move it directly here */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertises" element={<Expertises />} />
          <Route path="/sector-of-activities" element={<Sectors />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
