import React from 'react';
import css from '../ImageGallery/ImageGallery.module.css';

import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.imageGallery}>
      <ImageGalleryItem onClick={onClick} images={images} />
    </ul>
  );
};

export default ImageGallery;
