import css from "./ImageModal.module.css";
import { useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ImageModal = ({ image, onClose }) => {
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
        {image && <img src={image.urls.regular} alt={image.alt_description} />}
      </div>
    </Modal>
  );
};

export default ImageModal;
