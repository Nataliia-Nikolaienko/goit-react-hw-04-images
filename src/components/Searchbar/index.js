import { FcSearch } from 'react-icons/fc';
import css from '../Searchbar/SearchBar.module.css';
import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [searchImg, setSearchImg] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (searchImg.trim() === '') {
      return alert('Please enter the name of the picture');
    }
    onSubmit(searchImg);
    setSearchImg('');
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <button type="submit" className={css.searchButton}>
          <span className={css.searchButtonLabel}>Search</span>
          <span>
            <FcSearch className={css.icon} />
          </span>
        </button>

        <input
          name="query"
          className={css.searchInput}
          type="text"
          value={searchImg}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setSearchImg(e.target.value)}
        />
      </form>
    </header>
  );
};

export default SearchBar;
