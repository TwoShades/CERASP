import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/StockImageFetch.css";

const StockImageFetch = ({
  searchTerm = "person",
  page = 1,
  perPage = 1,
  orientation = "vertical",
  imgSource = "medium",
}) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "JkuN1YWaHHSEKvZ4gHFIw363G1F2hAKZcOKPnm1v7csZr9deoW5CNmIN";

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=${searchTerm}&orientation=${orientation}&page=${page}&per_page=${perPage}`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );

        setImage(response.data.photos[0]);
      } catch (err) {
        setError("An error occurred while fetching the image.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [page, perPage, orientation, searchTerm]);

  if (loading) return <p>Loading image...</p>;
  if (error) return <p>{error}</p>;

  const imageSrc = image ? image.src[imgSource] : null;

  return imageSrc ? (
    <img className="stock-image" src={imageSrc} alt={image.alt} />
  ) : null;
};

export default StockImageFetch;
