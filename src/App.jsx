import { useState, useEffect } from "react";
import "./App.css";
import { params, requestPhotos } from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPhotos = async (searchTerm) => {
      setIsLoading(true);
      try {
        const data = await requestPhotos({ params, term: searchTerm, page });
        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
      } catch (error) {
        setErrorMessage(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos("");
  }, [page]);

  const handleSearch = (searchTerm) => {
    setPage(1);
    setPhotos([]);
    fetchPhotos(searchTerm);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} fetchPhotos={fetchPhotos} />
      {isLoading && <Loader />}
      {errorMessage && <ErrorMessage />}
      {photos && <ImageGallery photos={photos} onImageClick={openModal} />}
      {photos && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedImage={selectedImage}
      />
    </div>
  );
};

export default App;
