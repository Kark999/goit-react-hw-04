import css from "./ImageCard.module.css";

const ImageCard = ({ urls, description, onClick }) => {
  return (
    <div>
      <img
        className={css.galleryImage}
        src={urls.small}
        alt={description}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
