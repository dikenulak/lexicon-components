import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconStyled from './IconStyled';
import icons from '../../icons.svg';

const propTypes = {
  /**
   * @default empty
   * children passed within button
   */
  iconName: PropTypes.string.isRequired,
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
  className: '',
  primary: false,
  secondary: false,
  small: false,
  active: false,
  disabled: false,
};

const Icon = ({ name, className, primary, secondary, small, active, disabled, iconName, iconHeight, iconWidth, ...otherProps }) => {
  const classes = classNames(
    'icon', {
      primary,
      secondary,
      small,
      active,
      disabled,
    }, className, name,
  );
  return (
    <Fragment>
      <IconStyled iconName={iconName} iconWidth={iconWidth} iconHeight={iconHeight} disabled={disabled}>
        <svg className={classes} {...otherProps}>
          <use xlinkHref={`${icons}#${iconName}`}></use>
        </svg>
      </IconStyled>
    </Fragment>
  );
};

Icon.propTypes = propTypes;

Icon.defaultProps = defaultProps;

export default Icon;
