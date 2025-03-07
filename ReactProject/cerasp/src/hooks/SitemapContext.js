import { createContext, useContext } from "react";
import sitemap from "../sitemap.json";

const SitemapContext = createContext();

export const SitemapProvider = ({ children }) => {
  return (
    <SitemapContext.Provider value={sitemap}>
      {children}
    </SitemapContext.Provider>
  );
};

export const useSitemap = () => {
  return useContext(SitemapContext);
};
