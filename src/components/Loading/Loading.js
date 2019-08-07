import React, { Fragment } from 'react';
import LoadingStyled from './LoadingStyled';

const Loading = ({ children, classNames, title, ...otherProps}) => {
  return (
    <Fragment>
      <LoadingStyled title={title}  {...otherProps}>
        <div className="loading-wrap">
          <div className="spinner-wrap">
            <div className="spinner" />
          </div>
          <p>{title}</p>
        </div>
      </LoadingStyled>
    </Fragment>
  );
};

export default Loading;
