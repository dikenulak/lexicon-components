import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Wrapper from './Wrapper';

const propTypes = {
  /**
   * @default empty
   * children passed within button
   */
  name: PropTypes.string,
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
  name: '',
  className: '',
  primary: false,
  secondary: false,
  small: false,
  active: false,
  disabled: false,
};

const Link = ({ name, className, primary, secondary, small, active, disabled, ...otherProps }) => {
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
    <Wrapper>
      <span
        className={classes}
        {...otherProps}
      />
    </Wrapper>
  );
};

Link.propTypes = propTypes;

Link.defaultProps = defaultProps;

export default Link;
