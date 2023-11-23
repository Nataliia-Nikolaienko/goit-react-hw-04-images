import React from 'react';
import css from '../ImageGallery/ImageGallery.module.css';

import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, modalOpen }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          modalOpen={modalOpen}
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
