import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FOOTER as TABLE_FOOTER } from './constants';
import { TableFooterStyled } from './TableStyled';

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

const TableFooter = ({ className, children, scrollable, ...otherProps }) => (
  <TableFooterStyled>
    <tbody
      className={classNames(className, TABLE_FOOTER)}
      {...otherProps}
    >
    {children}
    </tbody>
  </TableFooterStyled>
);

TableFooter.propTypes = propTypes;

TableFooter.defaultProps = defaultProps;

export default TableFooter;
