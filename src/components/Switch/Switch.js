import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import classNames from 'classnames';

const propTypes = {
  /**
   * @default ''
   * children passed along button
   */
  id: PropTypes.string,
  /**
   * @default ''
   * children passed along button
   */
  className: PropTypes.string,
  /**
   * @default false
   * active state for checkbox.
   */
  disabled: PropTypes.bool,
  /**
   * @default null
   * children passed within button
   */
  children: PropTypes.node,
  /**
   * weather swtich is checked
   */
  checked: PropTypes.bool,
  /**
   * @default ''
   * children passed along button
   */
  labelText: PropTypes.string,
  /**
   * @default null
   * on Toggle Switch Change
   */
  onToggle: PropTypes.func,
};

const defaultProps = {
  id: '',
  className: '',
  labelText: '',
  disabled: false,
  checked: false,
  children: undefined,
  onToggle: () => null,
  name: undefined,
};

const ToggleSwitch = ({
  id, checked, className, disabled, labelContent, onToggle, name
}) => {
  const classes = classNames({
    disabled,
  }, className);
  return (
    <Fragment>
      <div className="form-input">
        <label className="custom-control-label-text">
          {
            labelContent !== undefined ? (
              <span>{labelContent}</span>
            ) : ''
          }
        </label>
        <Switch
          onChange={(checkStatus,event) => onToggle(checkStatus, event)}
          checked={checked}
          uncheckedIcon={false}
          checkedIcon={false}
          id={id}
          className={className}
          name={name}
        />
      </div>
    </Fragment>
  );
};

ToggleSwitch.propTypes = propTypes;

ToggleSwitch.defaultProps = defaultProps;

export default ToggleSwitch;
