import css from './Button.module.css';

const Button = ({ loading }) => {
  return (
    <button type="button" className={css.loadMoreBtn} onClick={() => loading()}>
      Load more
    </button>
  );
};

export default Button;
