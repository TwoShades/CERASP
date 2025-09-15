const scrollToTop = () => {
  const pageContent = document.querySelector(".page-content");
  if (pageContent?.firstElementChild) {
    pageContent.firstElementChild.scrollIntoView({
      behavior: "instant",
      block: "start",
    });
  }
};

export default scrollToTop;
