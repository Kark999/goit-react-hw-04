import { useState, useEffect } from "react";
import "./App.css";
import { requestPhotos } from "./services/api";
import Loader from "./components/Loader/Loader";

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
      {isError && <p>Oops, something went wrong! Please reload the page</p>}
      <ul>
        {Array.isArray(photos) &&
          photos.map(({ id, urls, description }) => {
            return (
              <li key={id}>
                <div>
                  <img src={urls.small} alt={description} />
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default AppNew;
