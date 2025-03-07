// ScrollPanel.js
import { useSitemap } from "../../hooks/SitemapContext"; // Import the custom hook
import "./css/ScrollPanel.css";

const ScrollPanel = ({ children, colorTheme = "themeA", id, title }) => {
  const sitemap = useSitemap(); // Get sitemap from context

  // Function to check if the section is valid
  const isValidSection = (id) => {
    const page = sitemap?.pages.find((page) => page.title === title);
    return page?.["sub-pages"].includes(id);
  };

  // Render the content if valid, else show error message
  if (isValidSection(id)) {
    return (
      <div className={`scroll-panel ${colorTheme}`} id={id}>
        {children}
      </div>
    );
  }

  return (
    <div className={`scroll-panel ${colorTheme} scroll-panel-error`}>
      <div className="error-message">
        <h2 style={{ color: "red" }}>Invalid ID: {id}</h2>
        <p>
          The section ID "{id}" is not valid. Please check the sitemap or ensure
          that the ID matches a valid section.
        </p>
      </div>
    </div>
  );
};

export default ScrollPanel;
