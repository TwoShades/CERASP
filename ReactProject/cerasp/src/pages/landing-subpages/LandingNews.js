import React from "react";
import "./css/LandingNews.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";

const LandingNews = () => {
  // Sample news data - replace with your actual data
  const newsItems = [
    {
      id: 1,
      title: "Company Launches New Product Line",
      excerpt:
        "Exciting developments in our latest innovation that will transform the industry and create new opportunities for growth.",
      date: "June 12, 2025",
      category: "Product",
      image: "https://via.placeholder.com/400x300",
      stockimgname: "Blood Vial",
    },
    {
      id: 2,
      title: "Partnership Announcement",
      excerpt:
        "Strategic collaboration with industry leaders to enhance our service offerings and expand market reach.",
      date: "June 10, 2025",
      category: "Business",
      image: "https://via.placeholder.com/400x300",
      stockimgname: "Handshake",
    },
    {
      id: 3,
      title: "Award Recognition",
      excerpt:
        "Honored for excellence in customer service and innovative solutions that drive industry standards.",
      date: "June 8, 2025",
      category: "Awards",
      image: "https://via.placeholder.com/400x300",
      stockimgname: "Award Trophy",
    },
    {
      id: 4,
      title: "Technology Innovation",
      excerpt:
        "Breakthrough in AI-powered solutions that revolutionize how businesses operate and scale.",
      date: "June 6, 2025",
      category: "Technology",
      image: "https://via.placeholder.com/400x300",
      stockimgname: "Technology",
    },
  ];

  const handleViewAllNews = () => {
    // For React Router, you'd use navigate('/news') or <Link to="/news">
    window.location.href = "/news";
  };

  return (
    <section className="news-panel">
      <div className="news-container">
        <div className="news-header">
          <div className="header-content">
            <span className="section-label">News & Updates</span>
            <h2>What's happening</h2>
            <p>Stay in the loop with our latest stories and announcements</p>
          </div>
          <button
            className="landing-news-cta-button"
            onClick={handleViewAllNews}
          >
            All News →
          </button>
        </div>

        <div className="news-layout">
          <div className="featured-article">
            <article className="news-card featured">
              <div className="news-image">
                <StockImageFetch
                  searchTerm={newsItems[0].stockimgname}
                  imgSource="large"
                  orientation="landscape"
                  page={newsItems[0].id}
                  perPage={1}
                />
                <span className="category-tag">{newsItems[0].category}</span>
              </div>
              <div className="news-content">
                <span className="news-date">{newsItems[0].date}</span>
                <h3 className="news-title">{newsItems[0].title}</h3>
                <p className="news-excerpt">{newsItems[0].excerpt}</p>
              </div>
            </article>
          </div>

          <div className="secondary-articles">
            {newsItems.slice(1).map((item) => (
              <article key={item.id} className="news-card secondary">
                <div className="news-image">
                  <StockImageFetch
                    searchTerm={item.stockimgname}
                    imgSource="medium"
                    orientation="landscape"
                    page={item.id}
                    perPage={1}
                  />
                  <span className="category-tag">{item.category}</span>
                </div>
                <div className="news-content">
                  <span className="news-date">{item.date}</span>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-excerpt">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingNews;
