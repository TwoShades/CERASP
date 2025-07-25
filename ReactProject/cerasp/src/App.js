import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";
import Header from "./components/layouts/Header";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Expertises from "./pages/Expertises";
import Sectors from "./pages/Sectors";
import Projects from "./pages/Projects";
import News from "./pages/News";
import useScrollTracker from "./hooks/useScrollTracker";
import { ScreenSizeProvider } from "./contexts/ScreenSizeContext";
import ContactButton from "./components/interactables/ContactButton";
import "./App.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import EquipmentsMasterList from "./pages/EquipmentsMasterList";

function App() {
  const { theme } = useContext(ThemeContext);
  const scrollProgress = useScrollTracker();
  return (
    <ScreenSizeProvider>
      {" "}
      <Header />
      {scrollProgress < 0.95 && <ContactButton />}
      <main className={`main-content app ${theme}`}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertises" element={<Expertises />} />
          <Route path="/sector-of-activities" element={<Sectors />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/equipment-list" element={<EquipmentsMasterList />} />
        </Routes>
      </main>
    </ScreenSizeProvider>
  );
}

export default App;
