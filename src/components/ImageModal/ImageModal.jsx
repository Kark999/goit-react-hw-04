import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, selectedImage }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Selected Image"
    >
      <img src={selectedImage} alt="Selected" />
    </Modal>
  );
};

export default ImageModal;
