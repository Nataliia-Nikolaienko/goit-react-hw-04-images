import { Component } from 'react';

import { getImagesWithSearch } from './api/images';

import ImageGallery from './components/ImageGallery';
import FormikSearchBar from './components/Searchbar';
import ImageInModal from 'components/ImageInModal';
import Modal from './components/Modal';
import Button from './components/Button';
import Loader from './components/Loader';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    isShowModal: false,
    largeImage: null,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.handleSearch();
    }
  }

  handleSearch = async () => {
    try {
      this.setState({ isLoading: true });
      const { query, page } = this.state;
      const data = await getImagesWithSearch(query, page);
      this.setState(({ images }) => {
        return {
          images: [...images, ...data.hits],
          error: '',
          isLoading: false,
          total: data.totalHits,
        };
      });
    } catch (error) {
      this.setState({ error: error.response.data, isLoading: false });
    }
  };

  handleSubmit = ({ query }) => {
    if (query === this.state.query) {
      return;
    }
    this.setState({ query, images: [], page: 1 });
  };

  modalOpen = ({ largeImageURL, tags }) => {
    this.setState({
      largeImage: {
        largeImageURL,
        tags,
      },
      isShowModal: true,
    });
  };

  closeModal = () => {
    this.setState(prev => ({
      isShowModal: !prev.isShowModal,
      largeImage: null,
    }));
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const {
      images,
      isLoading,
      total,
      error,
      page,
      largeImage,

      isShowModal,
    } = this.state;

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
        <FormikSearchBar submit={this.handleSubmit} />
        {isLoading && <Loader />}
        {<ImageGallery images={images} modalOpen={this.modalOpen} />}
        {isShowModal && (
          <Modal close={this.closeModal}>
            <ImageInModal {...largeImage} />
          </Modal>
        )}
        {Boolean(images.length) && page < totalPage && (
          <Button loading={this.loadMore} />
        )}
      </div>
    );
  }
}

export default App;
