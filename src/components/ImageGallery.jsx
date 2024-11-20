import css from "./ImageGallery.module.css";
import ImageCard from "./ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className={css.container}>
      {images.length === 0 ? (
        <p>No images found</p>
      ) : (
        <ul className={css.gallery}>
          {images.map((image) => (
            <li
              className={css.image}
              key={image.id}
              onClick={() => onImageClick(image)}
            >
              <ImageCard image={image} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ImageGallery;
