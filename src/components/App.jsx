import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import { FallingLines } from "react-loader-spinner";
import "./App.css";
import ImageGallery from "./ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn";
import ImageModal from "./ImageModal";
import ErrorMessage from "./ErrorMessage";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [pickedImage, setPickedImage] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = "-bkFfOktiRIdMMk9kwId863hI2S74cIjviODRnBkppE";

  const fetchImages = async (query) => {
    setIsLoading(true);
    setHasSearched(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            query: query,
            client_id: apiKey,
            page: currentPage,
          },
        }
      );
      setImages((prev) => [...prev, ...response.data.results]);
    } catch (error) {
      setError("Failed to fetch images. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  //wywołania zapytania jak current page się zmieni (ale nie po pierwszym wyświetleniu obrazów)
  useEffect(() => {
    if (currentPage > 1) {
      fetchImages(query);
    }
  }, [currentPage]);

  const handleSubmit = (query) => {
    setImages([]);
    setQuery(query);
    setCurrentPage(1);
    fetchImages(query);
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const openModal = (image) => {
    setPickedImage(image);
  };

  const closeModal = () => {
    setPickedImage(null);
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && (
        <FallingLines
          color="bisque"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      )}
      {error && <ErrorMessage message={error} />}
      {hasSearched && !error && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {images.length % 10 == 0 && images.length > 0 && !isLoading && !error && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal image={pickedImage} onClose={closeModal} />
    </>
  );
}

export default App;
