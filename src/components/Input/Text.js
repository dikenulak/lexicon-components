import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from '../../utils/validator';
import { EMPTY as EMPTY_ERROR } from '../../data/enums/ErrorMessage';
import { LabelStyled, MessageStyled, TextStyled } from './TextIndex';
import { Icon } from '../index';

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
   * @default true
   * enable error display mode in the form
   */
  enableErrorDisplay: PropTypes.bool,
  /**
   * @default true
   * enable validation in the form
   */
  enableValidation: PropTypes.bool,
  /**
   * @default ''
   * error Message to display.
   */
  errorMessage: PropTypes.string,
  /**
   * @default ''
   * rule for validation: match , isEmail, ...
   */
  rule: PropTypes.string,
  /**
   * @default argument
   * @argument : extra rule against validation.
   * additional argument to be provided as rule. {min: 5, max: 25}
   */
  argument: PropTypes.shape({}),
  /**
   * @default false
   * if the input is valid or not
   */
  placeholder: PropTypes.string,
  /**
   * @default ''
   * value passed to the input text
   */
  value: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.number,
    ],
  ),
  /**
   * @default null
   * function in HOC for input change
   */
  onChange: PropTypes.func,
  /**
   * name of the input field
   */
  name: PropTypes.string.isRequired,
  /**
   * type of the input
   */
  type: PropTypes.string.isRequired,
};

const defaultProps = {
  children: undefined,
  className: '',
  rule: '',
  argument: {},
  placeholder: 'Placeholder',
  enableErrorDisplay: false,
  enableValidation: true,
  value: '',
  onChange: () => null,
  errorMessage: EMPTY_ERROR,
};

class Input extends Component {
  checkIfFieldIsValid = (props) => {
    const {
      rule,
      argument,
      type,
      value,
    } = props;
    const valid = validator(rule, argument, type, value);
    this.setState({ valid });
  };

  constructor(props) {
    super(props);
    this.state = {
      valid: false,
    };
  }

  componentDidMount() {
    this.checkIfFieldIsValid(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkIfFieldIsValid(nextProps);
  }

  getValidState = () => {
    const { valid } = this.state;
    return valid;
  };

  handleChange = (event) => {
    const { onChange } = this.props;
    event['formattedValue'] = (event.target.type === 'number' ? event.target.valueAsNumber : event.target.value);
    onChange(event);
  };

  render() {
    const {
      placeholder, enableValidation, enableErrorDisplay, errorMessage, onChange, value, type, name, iconName, status, labelContent, ...props
    } = this.props;
    const { valid } = this.state;
    return (
      <div className={valid ? 'form-input error-input' : 'form-input'}>
        {
          labelContent !== undefined ? <LabelStyled>{labelContent}</LabelStyled> : ''
        }
        <TextStyled
          placeholder={placeholder}
          onChange={e => this.handleChange(e)}
          value={value.toString()}
          type={type}
          name={name}
          {...props}
          status={status}
        />
        {
          enableValidation
          && enableErrorDisplay
          && !valid
          && (
            <MessageStyled status={status}>
              {
                iconName !== undefined ? <Icon iconName={iconName}/> : ''
              }
              {
                errorMessage
              }
            </MessageStyled>
          )
        }
      </div>
    );
  }
}

Input.propTypes = propTypes;

Input.defaultProps = defaultProps;

export default Input;
