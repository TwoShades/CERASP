import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Expertises from "./pages/Expertises";
import Solutions from "./pages/Solutions";
import Projects from "./pages/Projects";
import News from "./pages/News";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h2>Welcome to CERASP</h2>} />
        <Route path="/about" element={<About />} />
        <Route path="/expertises" element={<Expertises />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
