import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  trigger: PropTypes.string.isRequired,
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
      <div>
        <div onClick={onClick} className="target-trigger">
          {trigger}
        </div>
        {
          isOpen && (
            <div className="target-nested">
              {children}
            </div>
          )}
      </div>
    );
  }
}

AccordionSection.displayName = 'AccordionSection';

export default AccordionSection;
