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
import { ScreenSizeProvider } from "./hooks/ScreenSizeContext";
import HeightTest from "./components/layouts/HeightTest";
import "./App.css";

function App() {
  const mainRef = useSmoothScroll();
  const { theme } = useContext(ThemeContext);
  const { scrollRef, scrollProgress } = useScrollTracker();

  if (scrollRef.current) {
    scrollRef.current.style.setProperty("--scroll-progress", scrollProgress);
  }

  return (
    <ScreenSizeProvider>
      {" "}
      {/* Wrap everything in ScreenSizeProvider */}
      <Header />
      <HeightTest />
      <main
        className={`main-content app ${theme} background-gradient`}
        ref={(el) => {
          mainRef.current = el;
          scrollRef.current = el;
        }}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertises" element={<Expertises />} />
          <Route path="/sector-of-activities" element={<Sectors />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>
    </ScreenSizeProvider>
  );
}

export default App;
