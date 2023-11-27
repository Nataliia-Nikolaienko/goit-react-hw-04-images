import { useState, useEffect } from 'react';

import { searchImg } from './api/images';

import ImageGallery from './components/ImageGallery';
import SearchBar from './components/Searchbar';
import ImageInModal from 'components/ImageInModal';
import Modal from './components/Modal';
import Button from './components/Button';
import Loader from './components/Loader';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState(null);
  const [tags, setTags] = useState('');
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!query) {
      return;
    }
    const handleSearch = async () => {
      try {
        setIsLoading(true);
        const data = await searchImg(query, page);

        setImages(images => [...images, ...data.hits]);
        setTotal(data.totalHits);
      } catch (error) {
        setError(error.response.data);
      } finally {
        setIsLoading(false);
      }
    };
    handleSearch();
  }, [query, page]);

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const modalOpen = (largeImage, tags) => {
    setIsShowModal(true);
    setLargeImage(largeImage);
    setTags(tags);
  };

  const modalClose = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      setIsShowModal(false);
      setLargeImage('');
      setTags('');
    }
  };

  const searchInput = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const totalPage = Math.ceil(total / 12);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      {error && <h1>{error}</h1>}
      <SearchBar onSubmit={searchInput} />
      {isLoading && <Loader />}
      {<ImageGallery images={images} onClick={modalOpen} />}
      {isShowModal && (
        <Modal onClose={modalClose}>
          <ImageInModal largeImage={largeImage} tags={tags} />
        </Modal>
      )}
      {Boolean(images.length) && page < totalPage && (
        <Button loading={loadMore} />
      )}
    </div>
  );
};
export default App;
