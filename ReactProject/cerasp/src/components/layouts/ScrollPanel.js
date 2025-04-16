import sitemap from "../../sitemap.json";
import "./css/ScrollPanel.css";
import ContactButton from "../interactables/ContactButton";

const ScrollPanel = ({ children, colorTheme = "themeA", id, title }) => {
  const isValidSection = (id) => {
    const page = sitemap.pages.find((page) => page.title === title);
    return page?.["sub-pages"].includes(id);
  };

  if (isValidSection(id)) {
    return (
      <div className={`scroll-panel ${colorTheme}`} id={id}>
        {children}
        {/* {id !== "contact-us-form" && <ContactButton />} */}
      </div>
    );
  }

  return (
    <div className={`scroll-panel ${colorTheme} scroll-panel-error`}>
      <h2 style={{ color: "red" }}>Invalid ID: {id}</h2>
      <p>The section ID "{id}" is not valid.</p>
    </div>
  );
};

export default ScrollPanel;
