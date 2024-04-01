import { useState, useEffect } from "react";
import "./App.css";
import { requestPhotos } from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";

const AppNew = () => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  console.log("query: ", query);

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

  const onsearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  };

  return (
    <div>
      <SearchBar onsearchQuery={onsearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos && <ImageGallery photos={photos} />}
    </div>
  );
};

export default AppNew;
