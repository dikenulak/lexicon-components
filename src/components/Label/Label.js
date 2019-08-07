import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LabelStyled from './LabelStyled';

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
  /**
   * @default small false
   */
  size: PropTypes.oneOf(['small', 'regular']),
};

const defaultProps = {
  children: undefined,
  className: '',
  active: false,
  size: 'regular',
};

const Label = ({ children, className, active, size, ...otherProps }) => {
  const classes = classNames({
    active,
  }, className, size);
  return (
    <Fragment>
      <LabelStyled className={classes} {...otherProps}>
        {children}
      </LabelStyled>
    </Fragment>
  );
};

Label.propTypes = propTypes;

Label.defaultProps = defaultProps;

export default Label;
