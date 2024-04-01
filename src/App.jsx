import { useState, useEffect } from "react";
import "./App.css";
import { requestPhotos } from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";

const AppNew = () => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setIsLoading(true);
        const data = await requestPhotos();
        setPhotos(data);
        console.log("data: ", data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos && <ImageGallery photos={photos} />}
    </div>
  );
};

export default AppNew;
