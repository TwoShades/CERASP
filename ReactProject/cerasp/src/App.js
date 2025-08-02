import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import LandingPage from "./pages/LandingPage";

// ABOUT AND ITS SUBPAGES
import AboutLayout from "./pages/about-subpages/AboutLayout";
import AboutOverview from "./pages/about-subpages/AboutOverview";
import AboutFacilities from "./pages/about-subpages/AboutFacilities";
import AboutEquipments from "./pages/about-subpages/AboutEquipments";
import AboutTeam from "./pages/about-subpages/AboutTeam";
import AboutBoard from "./pages/about-subpages/AboutBoard";

import Expertises from "./pages/Expertises";
import Sectors from "./pages/Sectors";
import Projects from "./pages/Projects";
import News from "./pages/News";
import { ScreenSizeProvider } from "./contexts/ScreenSizeContext";
import "./App.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import EquipmentsMasterList from "./pages/EquipmentsMasterList";

function App() {
  return (
    <ScreenSizeProvider>
      {" "}
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/about" element={<AboutLayout />}>
          <Route path="history" element={<AboutOverview />} />
          <Route path="facilities" element={<AboutFacilities />} />
          <Route path="equipment" element={<AboutEquipments />} />
          <Route path="our-team" element={<AboutTeam />} />
          <Route path="board" element={<AboutBoard />} />
        </Route>

        <Route path="/expertises" element={<Expertises />} />
        <Route path="/sector-of-activities" element={<Sectors />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/equipment-list" element={<EquipmentsMasterList />} />
      </Routes>
    </ScreenSizeProvider>
  );
}

export default App;
