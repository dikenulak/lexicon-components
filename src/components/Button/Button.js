import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonStyled from './ButtonStyled';
import { Icon } from '../index';

const propTypes = {
  /**
   * @default null
   * children passed within button
   */
  children: PropTypes.node,
  /**
   * @default ''
   * className passed along with the button
   */
  className: PropTypes.string,
  /**
   * @default false
   * button is primary or not.
   */
  primary: PropTypes.bool,
  /**
   * @default false
   * button is secondary
   */
  secondary: PropTypes.bool,
  /**
   * @default false
   * button is small
   */
  small: PropTypes.bool,
  /**
   * @default false
   * small
   */
  active: PropTypes.bool,
  /**
   * @default false
   * disabled
   */
  disabled: PropTypes.bool,
};

const defaultProps = {
  children: undefined,
  className: '',
  primary: false,
  secondary: false,
  small: false,
  active: false,
  disabled: false,
};

const Button = ({ children, className, primary, secondary, outlined, small, active, link, disabled, iconName, ...otherProps }) => {
  const classes = classNames({
    primary,
    secondary,
    outlined,
    small,
    active,
    link,
    disabled,
  }, className);
  return (
    <Fragment>
      <ButtonStyled className={classes} iconName={iconName} {...otherProps}>
        {
          iconName !== undefined ? <Icon iconName={iconName} /> : ''
        }
        <span>{children}</span>
      </ButtonStyled>
    </Fragment>
  );
};

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

export default Button;
