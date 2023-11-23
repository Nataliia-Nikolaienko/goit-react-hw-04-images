import { ProgressBar } from 'react-loader-spinner';
import React from 'react';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <ProgressBar
        height="180"
        width="800"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#3f51b5"
        barColor="#51E5FF"
      />
    </div>
  );
};

export default Loader;
