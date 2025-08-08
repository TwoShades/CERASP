import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import "./App.css";
import useLenis from "./hooks/useLenis";

// ABOUT AND ITS SUBPAGES
import AboutLayout from "./pages/about-subpages/AboutLayout";
import AboutOverview from "./pages/about-subpages/AboutOverview";
import AboutFacilities from "./pages/about-subpages/AboutFacilities";
import AboutEquipments from "./pages/about-subpages/AboutEquipments";
import AboutTeam from "./pages/about-subpages/AboutTeam";
import AboutBoard from "./pages/about-subpages/AboutBoard";
import EquipmentsMasterList from "./pages/EquipmentsMasterList";

// SECTOR OF ACTIVITIES AND ITS SUBPAGES
import SectorsLayout from "./pages/sectors-subpages/SectorsLayout.js";
import SectorsOverview from "./pages/sectors-subpages/SectorsOverview.js";
import SectorsNHP from "./pages/sectors-subpages/SectorsNHP.js";
import SectorsPharmaceutical from "./pages/sectors-subpages/SectorsPharmaceutical.js";
import SectorsBiopharmaceutical from "./pages/sectors-subpages/SectorsBiopharmaceutical.js";
import SectorsbioTechBioMan from "./pages/sectors-subpages/SectorsBiotechBiomanufacturing.js";
import SectorsCosmeceuticals from "./pages/sectors-subpages/SectorsCosmeceuticals.js";
import SectorsDiagnosticTools from "./pages/sectors-subpages/SectorsDiagnosticTools.js";
import SectorsAnimalHealth from "./pages/sectors-subpages/SectorsAnimalHealth.js";
import SectorsNutraceutical from "./pages/sectors-subpages/SectorsNutraceutical.js";
import SectorsMedicalDevices from "./pages/sectors-subpages/SectorsMedicalDevices.js";

// EXPERTISES AND ITS SUBPAGES
import ExpertiseLayout from "./pages/expertise-subpages/ExpertiseLayout.js";
import ExpertiseOverview from "./pages/expertise-subpages/ExpertiseOverview.js";
import ExpertiseIdeation from "./pages/expertise-subpages/ExpertiseIdeation.js";
import ExpertiseProofConcept from "./pages/expertise-subpages/ExpertiseProofConcept.js";
import ExpertiseScaleUp from "./pages/expertise-subpages/ExpertiseScaleUp.js";
import ExpertiseProductDev from "./pages/expertise-subpages/ExpertiseProductDev.js";
import ExpertiseTechTransfer from "./pages/expertise-subpages/ExpertiseTechTransfer.js";

// PROJECTS AND ITS SUBPAGES
import ProjectsLayout from "./pages/projects-subpages/ProjectsLayout.js";
import ProjectsOverview from "./pages/projects-subpages/ProjectsOverview.js";
import ProjectsGrants from "./pages/projects-subpages/ProjectsGrants.js";

// NEWS AND ITS SUBPAGES
import News from "./pages/News";

// TESTING/landing PAGE
import LandingPage from "./pages/LandingPage.js";
import { ScreenSizeProvider } from "./contexts/ScreenSizeContext";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  useLenis();
  return (
    <ScreenSizeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* ABOUT */}
        <Route path="/about" element={<AboutLayout />}>
          <Route
            path="overview"
            element={<AboutOverview />}
          />
          <Route
            path="facilities"
            element={<AboutFacilities />}
          />
          <Route
            path="equipment"
            element={<AboutEquipments />}
          />
          <Route path="our-team" element={<AboutTeam />} />
          <Route path="board" element={<AboutBoard />} />
        </Route>

        {/* SECTOR */}
        <Route
          path="/sector-of-activities"
          element={<SectorsLayout />}
        >
          <Route
            path="overview"
            element={<SectorsOverview />}
          />
          <Route
            path="natural-health-products"
            element={<SectorsNHP />}
          />
          <Route
            path="pharmaceutical"
            element={<SectorsPharmaceutical />}
          />
          <Route
            path="biopharmaceutical"
            element={<SectorsBiopharmaceutical />}
          />
          <Route
            path="biotech-biomanufacturing"
            element={<SectorsbioTechBioMan />}
          />
          <Route
            path="cosmeceuticals"
            element={<SectorsCosmeceuticals />}
          />
          <Route
            path="diagnostic-tools"
            element={<SectorsDiagnosticTools />}
          />
          <Route
            path="animal-health"
            element={<SectorsAnimalHealth />}
          />
          <Route
            path="nutraceutical"
            element={<SectorsNutraceutical />}
          />
          <Route
            path="medical-devices"
            element={<SectorsMedicalDevices />}
          />
        </Route>

        {/* EXPERTISE */}
        <Route
          path="/expertise"
          element={<ExpertiseLayout />}
        >
          <Route
            path="overview"
            element={<ExpertiseOverview />}
          />
          <Route
            path="ideation"
            element={<ExpertiseIdeation />}
          />
          <Route
            path="proof-of-concept"
            element={<ExpertiseProofConcept />}
          />
          <Route
            path="product-development"
            element={<ExpertiseProductDev />}
          />
          <Route
            path="scale-up-manufacturing"
            element={<ExpertiseScaleUp />}
          />
          <Route
            path="technology-transfer"
            element={<ExpertiseTechTransfer />}
          />
        </Route>

        {/* PROJECTS */}
        <Route
          path="/projects"
          element={<ProjectsLayout />}
        >
          <Route
            path="overview"
            element={<ProjectsOverview />}
          />
          <Route
            path="grants"
            element={<ProjectsGrants />}
          />
        </Route>

        {/* NEWS */}
        <Route path="/news" element={<News />} />

        {/* OTHER LINKS - MIGHT NEED REWORK */}
        <Route
          path="/privacy"
          element={<PrivacyPolicy />}
        />
        <Route
          path="/equipment-list"
          element={<EquipmentsMasterList />}
        />
        <Route
          path="/landing-page"
          element={<LandingPage />}
        />
      </Routes>
    </ScreenSizeProvider>
  );
}

export default App;
