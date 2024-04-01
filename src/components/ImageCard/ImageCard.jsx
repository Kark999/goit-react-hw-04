import css from "./ImageCard.module.css";

const ImageCard = ({ urls, description }) => {
  return (
    <div>
      <img className={css.galleryImage} src={urls.small} alt={description} />
    </div>
  );
};

export default ImageCard;
