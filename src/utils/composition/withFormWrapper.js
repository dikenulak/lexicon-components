import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { has } from '../objectPrototypes';
import { getDisplayName } from './component';
import { FORM_CONFIG } from '../../data/enums/config';
import { clone, compareList } from '../arrayProcessor';
import { dropdownChange, inputChange } from '../formHandlers';

// assumed each mapper is mounted on every change.
// it mapper config change directly w/o mounting use derive state from props.

export default function withFormWrapper(SourceComponent) {
  const propTypes = {
    type: PropTypes.string,
    onDialogSubmit: PropTypes.func,
    onDialogCancel: PropTypes.func,
    dialogElement: PropTypes.instanceOf(Object),
    renderDialog: PropTypes.func.isRequired,
    formConfig: PropTypes.shape({
      title: PropTypes.string,
      mapper: PropTypes.func,
      refsObj: PropTypes.instanceOf(Object),
      validationRequired: PropTypes.bool,
    }),
  };

  const defaultProps = {
    type: '',
    onDialogSubmit: () => null,
    onDialogCancel: () => null,
    dialogElement: {},
    formConfig: PropTypes.shape({
      mapper: () => null,
      title: '',
      refsObj: {},
      validationRequired: PropTypes.bool,
    }),
  };

  class FormWrapper extends Component {
    constructor(props) {
      super(props);
      const { formConfig, dialogElement } = props;
      this.state = {
        dialogElementBackup: props.dialogElement,
        details: has.call(formConfig, FORM_CONFIG.MAPPER)
          ? formConfig[FORM_CONFIG.MAPPER](dialogElement) : {},
        enableErrorDisplay: false,
      };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      const { dialogElementBackup } = prevState;
      const { dialogElement, formConfig } = nextProps;
      if (!compareList(dialogElement, dialogElementBackup)) {
        return {
          dialogElementBackup: dialogElement,
          details: has.call(formConfig, FORM_CONFIG.MAPPER)
            ? formConfig[FORM_CONFIG.MAPPER](dialogElement) : {},
        };
      }
      return null;
    }

    getFormValidationStatus = () => {
      const { formConfig: { refsObj } } = this.props;
      return (!Object.values(refsObj)
        .find((item) => {
          if (typeof (item) !== 'string') return (item.getValidState() === false);
        }));
    };

    handleFormSubmit = () => {
      const { onDialogSubmit, type, onDialogCancel } = this.props;
      const { details } = this.state;
      const valid = this.getFormValidationStatus();
      if (valid) {
        onDialogSubmit(type, details);
        onDialogCancel();
      } else {
        this.setState({ enableErrorDisplay: true });
      }
    };

    // event: event received from dom
    // firstParam: first Level Parameters
    // paramList: hierarchy in nestedObject : ['name', 'children', 'value']
    handleInputChange = (event, firstParam = '', paramList = []) => {
      const { details } = this.state;
      const updatedDetails = inputChange(details, event, firstParam, paramList);
      this.setState({ details: updatedDetails });
    };

    handleDropDownChange = (value, parameterRef = [], callBack = () => null) => {
      const { details } = this.state;
      const updatedDetails = dropdownChange(details, parameterRef, value);
      this.setState({ details: updatedDetails },
        () => {
          callBack(
            parameterRef[parameterRef.length - 1],
            value, clone(this.state.details),
            this.updateState,
          );
        });
    };


    updateState = (details) => {
      this.setState({ details });
    };

    getState = () => {
      const { details } = this.state;

      return clone(details);
    };

    handleFileUpload = (e) => {
      const { details } = this.state;
      details.file = e.target.files[0];
      this.setState({ details });
    };

    handleMultipleUpload = (e, uploadCallBack) => {
      const { details } = this.state;
      uploadCallBack(e.target.files[0], clone(details), this.updateState);
    };

    render() {
      const {
        details, enableErrorDisplay,
      } = this.state;
      const {
        handleInputChange, handleDropDownChange, handleFileUpload, getFormValidationStatus,
        handleFormSubmit, handleMultipleUpload, updateState, getState,
      } = this;
      const newProps = {
        handleInputChange,
        handleDropDownChange,
        handleFileUpload,
        getFormValidationStatus,
        dialogData: details,
        enableErrorDisplay,
        handleFormSubmit,
        handleMultipleUpload,
        updateState,
        getState,
        ...this.props,
      };

      return (
        <Fragment>
          <SourceComponent
            {...newProps}
          />
        </Fragment>
      );
    }
  }

  FormWrapper.displayName = `withAlert(${getDisplayName(SourceComponent)})`;

  FormWrapper.propTypes = propTypes;

  FormWrapper.defaultProps = defaultProps;

  return FormWrapper;
}
