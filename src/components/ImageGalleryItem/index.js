import React from 'react';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  tags,
  modalOpen,
}) => {
  return (
    <li
      className={css.galleryItem}
      key={id}
      onClick={() => modalOpen({ largeImageURL, tags })}
    >
      <img src={webformatURL} alt={tags} className={css.galleryImage} />
    </li>
  );
};

export default ImageGalleryItem;
