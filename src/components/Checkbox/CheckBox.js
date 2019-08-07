import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CheckboxWrapper } from './CheckBoxStyledIndex';

const propTypes = {
  /**
   * @default null
   * children passed within button
   */
  children: PropTypes.node,
  /**
   * weather checkbox is checked
   */
  checked: PropTypes.bool,
  /**
   * @default ''
   * children passed along with the button
   */
  className: PropTypes.string,
  /**
   * @default false
   * active state for checkbox.
   */
  active: PropTypes.bool,
  /**
   * @default false
   * disabled state for checkbox
   */
  disabled: PropTypes.bool,
  /**
   * @default false
   * multiple/intermediate state for checkbox
   */
  multiple: PropTypes.bool,
};

const defaultProps = {
  children: undefined,
  className: '',
  active: false,
  disabled: false,
  multiple: false,
  checked: false,
};

// onClick={e => onCheckBoxClick(e)}

const CheckBox = (
  {
    checked, className, active, disabled, multiple, labelText, onCheckBoxClick, ...otherProps
  },
) => {
  const classes = classNames({
    active,
    disabled,
    multiple,
  }, className);
  return (
    <Fragment>
      <CheckboxWrapper className={classes} {...otherProps}>
        <label>
          <input
            readOnly
            type="checkbox"
            name="test"
            checked={checked}
            // onClick={e => onCheckBoxClick(e)}
            onChange={e => onCheckBoxClick(e)}
            disabled={disabled}
          />
          <span className="control-label">
            {
              labelText !== undefined ? (
                <span className="custom-control-label-text">{labelText}</span>
              ) : ''
            }
          </span>
        </label>
      </CheckboxWrapper>
    </Fragment>
  );
};

CheckBox.propTypes = propTypes;

CheckBox.defaultProps = defaultProps;

export default CheckBox;
