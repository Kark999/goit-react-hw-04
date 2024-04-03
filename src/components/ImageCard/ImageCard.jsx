import css from "./ImageCard.module.css";

const ImageCard = ({ urls, description, onClick }) => {
  return (
    <div onClick={onClick}>
      <img className={css.galleryImage} src={urls.small} alt={description} />
    </div>
  );
};

export default ImageCard;
