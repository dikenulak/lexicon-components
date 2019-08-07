import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AccordionItem from './AccordionItem';

const propTypes = {
  /**
   * @default null
   * children passed within button
   */
  children: PropTypes.node,
  /**
   * @default true
   * enable error display mode in the form
   */
  onOpen: PropTypes.func,
  /**
   * @default true
   * enable validation in the form
   */
  onClose: PropTypes.func,
  /**
   * default true.
   * close on other collapsible click
   */
  allowMultipleOpen: PropTypes.bool,
};


const defaultProps = {
  children: null,
  onOpen: () => null,
  onClose: () => null,
  allowMultipleOpen: false,
};

class Accordion extends Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  constructor(props) {
    super(props);
    const openSections = {};
    const childrenList = this.getChildrenList(props.children);

    childrenList.forEach((child) => {
      if (child.props.isOpen) {
        openSections[child.props.trigger] = true;
      }
    });

    this.state = { openSections };
  }

  getChildrenList = (child) => {
    if (Array.isArray(child)) {
      return child;
    }

    return [child];
  };

  onChange = (opened, trigger) => {
    const {
      props: { onOpen, onClose },
    } = this;

    if (opened) {
      onClose(trigger);
    } else {
      onOpen(trigger);
    }
  };

  onClick = (trigger) => {
    const {
      props: { allowMultipleOpen },
      state: { openSections },
    } = this;

    const isOpen = !!openSections[trigger];

    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [trigger]: !isOpen,
        },
      }, () => this.onChange(!isOpen, trigger));
    } else {
      this.setState({
        openSections: {
          [trigger]: !isOpen,
        },
      });
    }
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections },
    } = this;

    const childrenList = this.getChildrenList(children);

    return (
      <CollapsibleWrapper>
        {
          childrenList.map(child => (
            child.props.trigger
              ? (
                <AccordionItem
                  isOpen={!!openSections[child.key]}
                  trigger={child.props.trigger}
                  onClick={onClick}
                  id={child.key}
                >
                  {child.props.children}
                </AccordionItem>
              ) : (
                <Fragment>
                  {child.props.children}
                </Fragment>
              )
          ))
        }
      </CollapsibleWrapper>
    );
  }
}

const CollapsibleWrapper = styled.div`

`

export default Accordion;
