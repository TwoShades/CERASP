// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Expertises from "./pages/Expertises";
import Sectors from "./pages/Sectors";
import Projects from "./pages/Projects";
import News from "./pages/News";
import useSmoothScroll from "./hooks/useSmoothScroll";
import { SitemapProvider } from "./hooks/SitemapContext";

import "./App.css";

function App() {
  const mainRef = useSmoothScroll();

  return (
    <>
      <SitemapProvider>
        <Header />
        <main className="main-content" ref={mainRef}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertises" element={<Expertises />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
      </SitemapProvider>
    </>
  );
}

export default App;
