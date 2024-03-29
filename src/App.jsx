import { useState, useEffect } from "react";
import "./App.css";
import { params, requestPhotos } from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    async function fetchPhotos(searchTerm) {
      setIsLoading(true);

      try {
        const data = await requestPhotos({ term: searchTerm, params });
        setPhotos(data);
      } catch (error) {
        setErrorMessage(true);
      } finally {
        setIsLoading(false);
      }

      fetchPhotos();
    }
  }, []);
  return (
    <div>
      <SearchBar />
      {isLoading && <Loader />}
      {errorMessage && <ErrorMessage />}
      {photos && <ImageGallery photos={photos} />}
    </div>
  );
}

export default App;
