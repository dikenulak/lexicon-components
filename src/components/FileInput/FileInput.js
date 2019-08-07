import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';
import { MessageStyled } from '../Input/TextIndex';
import { isObjectEmpty } from '../../utils/objectPrototypes';
import { EMPTY as EMPTY_ERROR } from '../../data/enums/ErrorMessage';

const propTypes = {
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
   * file Object contains name, size
   */
  file: PropTypes.instanceOf(Object),
  /** @default null
   * handles change events on select
   */
  onChange: PropTypes.func,
  /** * @default
   * The id to set on the SelectContainer component
   * */
  id: PropTypes.string,
  /** @default false
   *  whether the select is diabled
   */
  disabled: PropTypes.bool,
  /** @default false
   * Support multiple file upload
   */
  multiple: PropTypes.bool,
  /** @default 1
   * minimum file size
   */
  min: PropTypes.number,
  /** @default 8MB
   * maximium file size
   */
  max: PropTypes.number,
  /** @default '*'
   * defines the file types the file input should accept
   */
  accept: PropTypes.string,
  /** @default ''
   * file name
   */
  name: PropTypes.string,


};

const defaultProps = {
  id: '',
  min: 1,
  file: {},
  accept: '*', /* all file types */
  max: 8000000, /* 8 MB */
  className: '',
  multiple: false,
  disabled: false,
  name: 'fileUpload',
  onChange: () => null,
  placeholder: 'Upload',
  enableValidation: true,
  errorMessage: EMPTY_ERROR,
  enableErrorDisplay: false,

};

class FileInput extends Component {
  getValidState = () => {
    const { file, min, max } = this.props;
    const empty = isObjectEmpty(file);
    if (!empty) {
      return (file.size > min && file.size <= max);
    }

    return false;
  };

  render() {
    const {
      id,
      name,
      accept,
      disabled,
      onChange,
      multiple,
      iconName,
      className,
      errorMessage,
      enableValidation,
      enableErrorDisplay,
    } = this.props;

    const valid = this.getValidState();
    const displayError = enableValidation && enableErrorDisplay && !valid;

    return (
      <div className={valid ? 'error-input mb-24' : 'mb-24'}>
        <input
          id={id}
          type="file"
          name={name}
          accept={accept}
          disabled={disabled}
          multiple={multiple}
          className={className}
          onChange={e => onChange(e)}
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

FileInput.propTypes = propTypes;

FileInput.defaultProps = defaultProps;

export default FileInput;
