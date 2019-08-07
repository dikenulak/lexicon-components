import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { HEADER_TITLE } from './constants';
import { DialogTitleStyled } from './DialogStyled';

const propTypes = {
  /**
   * @default ''
   * className passed to dialog Header
   */
  className: PropTypes.string,
  /**
   * @default null
   * children passed into dialog Header
   */
  children: PropTypes.node,
};

const defaultProps = {
  className: '',
  children: null,
};

const DialogTitle = ({ className, children }) => (
  <DialogTitleStyled>
    <h2 className={classNames(HEADER_TITLE, className)}>
      {children}
    </h2>
  </DialogTitleStyled>
);

DialogTitle.propTypes = propTypes;

DialogTitle.defaultProps = defaultProps;

export default DialogTitle;
