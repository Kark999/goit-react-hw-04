import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {Array.isArray(photos) &&
          photos.map(({ id, description, urls }) => {
            return (
              <li key={id}>
                <div>
                  <img
                    className={css.galleryImage}
                    src={urls.small}
                    alt={description}
                  />
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ImageGallery;
