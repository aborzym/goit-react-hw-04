import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ImageModal = ({ image, onClose }) => {
  if (!image) return null;
  const { user, likes, alt_description } = image;

  const capitalizeFirstLetter = (text) => {
    if (!text) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <Modal
      isOpen={Boolean(image)} // Modal jest otwarty, gdy istnieje obraz
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.content}
      overlayClassName={css.overlay}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      <div className={css.container}>
        <img
          className={css.image}
          src={image.urls.regular}
          alt={image.alt_description || "Image"}
        />
        <div className={css.info}>
          <h2 className={css.title}>
            {capitalizeFirstLetter(alt_description) || "No description"}
          </h2>
          <p className={css.author}>
            Photo by <span>{user?.name || "Unknown"}</span>
          </p>
          <p className={css.likes}>Likes: {likes}</p>
          <p className={css.description}>
            {capitalizeFirstLetter(image.description) ||
              "No additional description."}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
