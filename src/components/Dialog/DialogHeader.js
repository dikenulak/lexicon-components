import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { HEADER } from './constants';
import { DialogHeaderStyled } from './DialogStyled';

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

const DialogHeader = ({ className, children }) => (
  <DialogHeaderStyled>
    <header className={classNames(HEADER, className)}>
      {children}
    </header>
  </DialogHeaderStyled>
);

DialogHeader.propTypes = propTypes;

DialogHeader.defaultProps = defaultProps;

export default DialogHeader;
