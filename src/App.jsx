import { useState, useEffect } from "react";
import "./App.css";
import { requestPhotosByQuery } from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query.length) return;
    const fetchPhotosByQuery = async () => {
      try {
        setIsLoading(true);
        const data = await requestPhotosByQuery(query, page);
        console.log("data: ", data);
        if (page === 1) {
          setPhotos(data.results);
        } else {
          setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotosByQuery();
  }, [query, page]);

  const onsearchQuery = (searchTerm) => {
    setQuery(searchTerm);
    setPage(1);
  };
  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onsearchQuery={onsearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos && <ImageGallery photos={photos} />}
      {photos && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </div>
  );
};

export default App;
