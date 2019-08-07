import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { EMPTY as EMPTY_ERROR } from '../../data/enums/ErrorMessage';
import { LabelStyled, MessageStyled } from '../Input/TextIndex';
import { Icon } from '../index';

const propTypes = {
  /** @default null
   * children passed within button
   */
  children: PropTypes.node,
  /** @default ''
   * children passed along with the button
   */
  className: PropTypes.string,
  /** enable error display mode in the form */
  enableErrorDisplay: PropTypes.bool,
  /** @default true
   * enable validation in the form
   */
  enableValidation: PropTypes.bool,
  /** @default ''
   * error Message to display.
   */
  errorMessage: PropTypes.string,
  /** @default ''
   * placeholder text for the select value
   */
  placeholder: PropTypes.string,
  /** @default ''
   * The value of the select; reflected by the selected option
   */
  value: PropTypes.instanceOf(Object),
  /** @default null
   * The default value of the select; reflected by the selected option
   */
  defaultValue: PropTypes.instanceOf(Object),
  /** @default null
   * handles change events on select
   */
  onChange: PropTypes.func,
  /** @default false
   *  focus control when it is mounted
   */
  autoFocus: PropTypes.bool,
  /** * @default
   * The id to set on the SelectContainer component
   * */
  id: PropTypes.string,
  /** @default false
   *  is the select value clearable
   */
  isClearable: PropTypes.bool,
  /** @default true
   *  whether to enable search functionality
   */
  isSearchable: PropTypes.bool,
  /** @default false
   *  whether the select is diabled
   */
  disabled: PropTypes.bool,
  /** @default false
   * Support multiple selected options
   */
  isMulti: PropTypes.bool,
  /** @default []
   *  array of ooption that populate the select menu
   */
  options: PropTypes.instanceOf(Array),
  /** @default ''
   *  label for select
   */
  labelContent: PropTypes.string,

};

const defaultProps = {
  children: undefined,
  className: '',
  placeholder: 'Placeholder',
  enableErrorDisplay: false,
  enableValidation: true,
  value: '',
  onChange: () => null,
  defaultValue: null,
  errorMessage: EMPTY_ERROR,
  labelKey: 'label',
  valueKey: 'value',
  autoFocus: false,
  id: '',
  isSearchable: true,
  isClearable: false,
  options: [],
  labelContent: '',
  disabled: false,
  isMulti: false,
};

class CustomSelect extends Component {
  getValidState = () => {
    const { value } = this.props;
    return value.length > 0;
  };

  render() {
    const {
      placeholder,
      enableValidation,
      enableErrorDisplay,
      errorMessage,
      onChange,
      value,
      labelContent,
      getOptionLabel,
      getOptionValue,
      autoFocus,
      id,
      isSearchable,
      isClearable,
      options,
      iconName,
      isMulti,
      disabled,
      defaultValue,
    } = this.props;

    const valid = this.getValidState();
    const displayError = enableValidation && enableErrorDisplay && !valid;

    return (
      <div className={valid ? 'form-select-input error-input' : 'form-select-input'}>
        {
          labelContent !== undefined ? <LabelStyled>{labelContent}</LabelStyled> : ''
        }
        <Select
          id={id}
          value={value}
          options={options}
          isMulti={isMulti}
          autoFocus={autoFocus}
          isDisabled={disabled}
          placeholder={placeholder}
          isClearable={isClearable}
          isSearchable={isSearchable}
          defaultValue={defaultValue}
          onChange={event => onChange(event)}
          getOptionValue={element => getOptionValue(element)}
          getOptionLabel={element => getOptionLabel(element)}
        />
        {
          displayError && (
            <MessageStyled>
              {
                iconName !== undefined ? <Icon iconName={iconName} /> : ''
              }
              {' '}
              {errorMessage}
            </MessageStyled>
          )
        }
      </div>
    );
  }
}

CustomSelect.propTypes = propTypes;

CustomSelect.defaultProps = defaultProps;

export default CustomSelect;
