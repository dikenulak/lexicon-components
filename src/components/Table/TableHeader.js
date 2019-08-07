import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { TableHeaderStyled } from './TableStyled';
import { HEADER as TABLE_HEADER } from './constants';

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

const TableHeader = ({ className, children }) => (
  <TableHeaderStyled>
    <header className={classNames(TABLE_HEADER, className)}>
      {children}
    </header>
  </TableHeaderStyled>
);

TableHeader.propTypes = propTypes;

TableHeader.defaultProps = defaultProps;

export default TableHeader;
