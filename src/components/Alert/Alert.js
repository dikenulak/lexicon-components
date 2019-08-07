import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AlertStyled from './AlertStyled';
import { Icon } from '..';

const propTypes = {
  /**
   * @default null
   * children passed within alert
   */
  children: PropTypes.node,
  /**
   * @default ''
   * className passed along with the alert
   */
  className: PropTypes.string,
  /**
   * @default false
   * alert is primary or not.
   */
  primary: PropTypes.bool,
  /**
   * @default false
   * alert is secondary
   */
  secondary: PropTypes.bool,
  /**
   * @default false
   * alert is small
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
  /**
   * @default false
   * type
   */
  type: PropTypes.string
};

const defaultProps = {
  children: undefined,
  className: '',
  primary: false,
  secondary: false,
  small: false,
  active: false,
  disabled: false,
  type: false,
};

const Alert = ({
  children, title, type, className, primary, secondary, small, active, disabled, iconName, onChange, ...otherProps
}) => {
  const classes = classNames({
    primary,
    secondary,
    small,
    active,
    disabled,
    iconName,
  }, className);
  return active && (
    <Fragment>
      <AlertStyled type={type} {...otherProps}>
        <div className={`alert-container ${classes}`}>
          <div className={`alert alert-${type || 'info'}`}>
            <Icon iconName={iconName} />
            <strong className="alert-lead">
              {title}
              :
              {' '}
            </strong>
            <span className="alert-message">
              {children}
            </span>
            <span className="alert-dismiss" onClick={() => onChange()}>
              <Icon iconName="times" iconWidth="12px" iconHeight="12px" />
            </span>
          </div>
        </div>
      </AlertStyled>
    </Fragment>
  );
};

Alert.propTypes = propTypes;

Alert.defaultProps = defaultProps;

export default Alert;
