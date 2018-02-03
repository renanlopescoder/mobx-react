import React from 'react';
import { ProgressBar } from 'react-toolbox';

import style from './style.css';

class Loader extends React.Component {
  render() {
    return (
      this.props.loading ?
        <ProgressBar className={style.center} type='circular' mode='indeterminate' multicolor />
      : this.props.children
    );
  };
};

export default Loader;
