import React from 'react';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onClick }) => {
  return images.map(({ id, webformatURL, tags, largeImageURL }) => {
    return (
      <li
        className={css.galleryItem}
        key={id}
        onClick={() => {
          onClick(largeImageURL, tags);
        }}
      >
        <img src={webformatURL} alt={tags} className={css.galleryImage} />
      </li>
    );
  });
};

export default ImageGalleryItem;
