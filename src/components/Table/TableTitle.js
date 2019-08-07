import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { TITLE as TABLE_TITLE } from './constants';
import { TableTitleStyled } from './TableStyled';

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

const TableTitle = ({ className, children }) => (
  <TableTitleStyled>
    <h2 className={classNames(TABLE_TITLE, className)}>
      {children}
    </h2>
  </TableTitleStyled>
);

TableTitle.propTypes = propTypes;

TableTitle.defaultProps = defaultProps;

export default TableTitle;
