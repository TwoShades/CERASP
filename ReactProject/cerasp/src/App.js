import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Expertises from "./pages/Expertises";
import Solutions from "./pages/Solutions";
import Projects from "./pages/Projects";
import News from "./pages/News";
import useSmoothScroll from "./hooks/useSmoothScroll";

import "./App.css";

function App() {
  const mainRef = useSmoothScroll();

  return (
    <Router>
      <Header />
      <main className="main-content" ref={mainRef}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertises" element={<Expertises />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
