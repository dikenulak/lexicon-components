import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TableStyled } from './TableStyled';
import { ROOT } from './constants';

const propTypes = {
  /**
   * @default null
   * children passed within Dialog Body
   */
  children: PropTypes.node,
  /**
   * @default ''
   * className passed with dialog Body
   */
  className: PropTypes.string,
};

const defaultProps = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const Table = ({ className, children, scrollable, ...otherProps }) => (
  <TableStyled>
    <tbody
      className={classNames(ROOT, className)}
      {...otherProps}
    >
    {children}
    </tbody>
  </TableStyled>
);

Table.propTypes = propTypes;

Table.defaultProps = defaultProps;

export default Table;
