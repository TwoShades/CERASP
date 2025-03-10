// App.js
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
import Solutions from "./pages/Solutions";
import useSmoothScroll from "./hooks/useSmoothScroll";
import "./App.css";

function App() {
  const mainRef = useSmoothScroll();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <main className={`main-content app ${theme}`} ref={mainRef}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertises" element={<Expertises />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/solutions" element={<Solutions />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
