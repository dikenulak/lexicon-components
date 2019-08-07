import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  trigger: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};


class AccordionSection extends Component {
  static propTypes = propTypes;

  onClick = () => {
    const { onClick, id } = this.props;
    onClick(id);
  };

  render() {
    const {
      onClick,
      props: { isOpen, trigger, children },
    } = this;

    return (
      <Fragment>
        <tr onClick={onClick} style={{ cursor: 'pointer' }}>
          {trigger}
        </tr>
        {
          isOpen && (
            <tr
              className="collapsible-body-tr"
            >
              <td
                colSpan="75%"
                className="collapsible-body-td">
                <table>
                  <tbody>
                  {children}
                  </tbody>
                </table>
              </td>

            </tr>
          )}
      </Fragment>
    );
  }
}

AccordionSection.displayName = 'AccordionSection';

export default AccordionSection;
