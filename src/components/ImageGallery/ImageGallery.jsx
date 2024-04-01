import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {Array.isArray(photos) &&
          photos.map(({ id, urls, description }) => {
            return (
              <li key={id}>
                <ImageCard urls={urls} description={description} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ImageGallery;
