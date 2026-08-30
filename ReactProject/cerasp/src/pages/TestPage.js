import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ScreenSizeContext } from "../contexts/ScreenSizeContext";
import "./_css/TestPage.css";

const TestPage = () => {
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet, isFullScreen } = useContext(
    ScreenSizeContext,
  );

  return (
    <div className="all-front-and-center">
      <h1>TEST PAGE IS WORKING</h1>
    </div>
  );
};

export default TestPage;
