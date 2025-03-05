const TwoColLayout = ({ bannerContent, children }) => {
  return (
    <div className="container">
      <div className="banner">{bannerContent}</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TwoColLayout;
