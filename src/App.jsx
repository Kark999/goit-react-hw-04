import { useState, useEffect } from "react";
import "./App.css";
import { requestPhotosByQuery } from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");

  // useEffect(() => {
  //   const fetchPhotos = async () => {
  //     try {
  //       setIsLoading(true);
  //       const data = await requestPhotos();
  //       setPhotos(data);
  //     } catch (error) {
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchPhotos();
  // }, []);

  useEffect(() => {
    if (!query.length) return;
    const fetchPhotosByQuery = async () => {
      try {
        setIsLoading(true);
        const data = await requestPhotosByQuery(query);
        console.log("data: ", data);
        setPhotos(data.results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotosByQuery();
  }, [query]);

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

export default App;
