const ImageInModal = ({ largeImageURL, tags }) => {
  return <img src={largeImageURL} alt={tags} width="800" height="600" />;
};

export default ImageInModal;
