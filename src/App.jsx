import { useState, useEffect } from "react";
import "./AppNew.css";
import axios from "axios";

const params = {
  client_id: "35YdqMFUVYORJ1_Z6Ti-nFesei5CNrXoMt15-kOzhj8",
  url: "https://api.unsplash.com/photos/",
  orientation: "landscape",
  page: 1,
  per_page: 12,
};

const AppNew = () => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      const { data } = await axios.get(params.url, { params });
      console.log("data: ", data);
      setPhotos(data.results);
    };
    fetchPhotos();
  }, []);

  return (
    <div>
      <ul>
        {Array.isArray() &&
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
