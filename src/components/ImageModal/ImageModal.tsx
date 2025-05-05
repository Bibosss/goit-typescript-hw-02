import type { Photo } from "../../images-api";
import ReactModal from "react-modal";

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Photo | null;
}

const ImageModal = ({ isOpen, onRequestClose, image }: ImageModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "transparent",
          border: "none",
        },
      }}
    >
      {image && (
        <img
          src={image.urls.regular}
          style={{ maxWidth: "100%", maxHeight: "90vh" }}
        />
      )}
    </ReactModal>
  );
};

export default ImageModal;
