import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TableBodyStyled } from './TableStyled';
import { BODY as TABLE_BODY } from './constants';

const propTypes = {
  /**
   * @default ''
   * className passed with dialog Body
   */
  className: PropTypes.string,
  /**
   * @default null
   * children passed within Dialog Body
   */
  children: PropTypes.node,
  /**
   *  @default false
   *  if dialogBocy is scrollable
   */
};

const defaultProps = {
  className: '',
  children: null,
};

const TableBody = ({ className, children, scrollable, ...otherProps }) => (
  <TableBodyStyled>
    <tbody
      className={classNames(TABLE_BODY, className)}
      {...otherProps}
    >
    {children}
    </tbody>
  </TableBodyStyled>
);

TableBody.propTypes = propTypes;

TableBody.defaultProps = defaultProps;

export default TableBody;
