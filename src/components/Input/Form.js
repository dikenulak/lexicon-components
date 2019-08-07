import React from 'react';
import PropTypes from 'prop-types';

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
   * @default false
   * if card is active or not.
   */
};

const defaultProps = {
  children: undefined,
  className: '',
};

const Form = ({ children, ...props }) => (
  <form {...props}>{children}</form>
);

Form.propTypes = propTypes;

Form.defaultProps = defaultProps;

export default Form;
