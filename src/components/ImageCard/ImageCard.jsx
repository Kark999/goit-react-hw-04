import css from "./ImageCard.module.css";

const ImageCard = ({ description, urls }) => {
  return (
    <div>
      <img className={css.galleryImage} src={urls.small} alt={description} />
    </div>
  );
};

export default ImageCard;
