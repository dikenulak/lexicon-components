import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardStyled from './CardStyled';

const propTypes = {
  /**
   * @default null
   * children passed within button
   */
  children: PropTypes.node,
  /**
   * @default ''
   * children passed along with the button
   */
  className: PropTypes.string,
  /**
   * @default false
   * if card is active or not.
   */
  active: PropTypes.bool,
};

const defaultProps = {
  children: undefined,
  className: '',
  active: false,
};

const Card = ({ children, className, active, ...otherProps }) => {
  const classes = classNames({
    active,
  }, className);
  return (
    <Fragment>
      <CardStyled className={classes} {...otherProps}>
        {children}
      </CardStyled>
    </Fragment>
  );
};

Card.propTypes = propTypes;

Card.defaultProps = defaultProps;

export default Card;
