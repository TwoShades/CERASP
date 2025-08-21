import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/layouts/Header";
import "./App.css";
import useLenis from "./hooks/useLenis";

// LANDING PAGE
import LandingPage from "./pages/LandingPage.js";

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
import SectorsPharmaBiopharma from "./pages/sectors-subpages/SectorsPharmaBiopharma.js";
import SectorsNHP from "./pages/sectors-subpages/SectorsNHP.js";
import SectorsDermoCosmeceuticals from "./pages/sectors-subpages/SectorsDermoCosmeceuticals.js";
import SectorsAnimalHealth from "./pages/sectors-subpages/SectorsAnimalHealth.js";
import SectorsMedicalDevices from "./pages/sectors-subpages/SectorsMedicalDevices.js";

// EXPERTISES AND ITS SUBPAGES
import ExpertiseLayout from "./pages/expertise-subpages/ExpertiseLayout.js";
import ExpertiseIdeation from "./pages/expertise-subpages/ExpertiseIdeation.js";
import ExpertiseProofConcept from "./pages/expertise-subpages/ExpertiseProofConcept.js";
import ExpertiseScaleUp from "./pages/expertise-subpages/ExpertiseScaleUp.js";
import ExpertiseProductDev from "./pages/expertise-subpages/ExpertiseProductDev.js";
import ExpertiseTechTransfer from "./pages/expertise-subpages/ExpertiseTechTransfer.js";

// PROJECTS PAGE
import ProjectsLayout from "./pages/projects-subpages/ProjectsLayout.js";

// NEWS PAGE
import News from "./pages/News";

// CONTACT PAGE
import ContactUs from "./pages/contact-us/ContactUs.js";

// TESTING/landing PAGE
import { ScreenSizeProvider } from "./contexts/ScreenSizeContext";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  useLenis();
  const location = useLocation();
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
            path="pharmaceutical-biopharmaceutical"
            element={<SectorsPharmaBiopharma />}
          />
          <Route
            path="animal-health"
            element={<SectorsAnimalHealth />}
          />
          <Route
            path="natural-health-products"
            element={<SectorsNHP />}
          />
          <Route
            path="dermo-cosmeceuticals"
            element={<SectorsDermoCosmeceuticals />}
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
        ></Route>

        {/* NEWS */}
        <Route path="/news" element={<News />} />

        {/* OTHER LINKS - MIGHT NEED REWORK */}

        <Route path="/contact-us" element={<ContactUs />} />

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
