import { useState, useEffect } from "react";
import "./App.css";
import { params, requestPhotos } from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setIsLoading(true);
        const data = await requestPhotos(params);
        setPhotos(data);
      } catch (error) {
        setErrorMessage(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPhotos();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {errorMessage && <ErrorMessage />}
      {photos && <ImageGallery photos={photos} />}
    </div>
  );
}

export default App;
