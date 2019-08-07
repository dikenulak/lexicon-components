import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { DialogStyled } from './DialogStyled';

import {
  ANIMATING,
  ROOT,
  OPEN,
  SURFACE,
  BACKDROP,
  SCROLL_LOCK,
} from './constants';

const propTypes = {
  /**
   * @default null
   * children passed within Dialog Body
   */
  children: PropTypes.node,
  /**
   * @default ''
   * className passed with dialog Body
   */
  className: PropTypes.string,
  /**
   * @default null
   * callback Function
   */
  onClose: PropTypes.func,
  /**
   * @default false
   * open flag for true or false.
   */
  open: PropTypes.bool,
};

const defaultProps = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

class DialogWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = { animating: false };
  }

  componentWillReceiveProps({ open: nextOpen }) {
    const { open } = this.props;
    const onOpen = !open && nextOpen;
    const onClose = open && !nextOpen;
    if (onOpen) {
      this.setState({ animating: true });
      document.body.classList.add(SCROLL_LOCK);
      document.addEventListener('keydown', (e) => {
        this.handleKeyDown(e);
      });
    } else if (onClose) {
      this.setState({ animating: true });
      document.body.classList.remove(SCROLL_LOCK);
      document.removeEventListener('keydown', (e) => {
        this.handleKeyDown(e);
      });
    }
  }

  handleKeyDown(event) {
    const { onClose } = this.props;
    const isEscape = event.key && (event.key === 'Escape' || event.keyCode === 27);
    if (onClose && isEscape) {
      onClose();
    }
  }

  render() {
    const { className, children, onClose, open, ...otherProps } = this.props;
    const ariaHiddenProp = open ? {} : { 'aria-hidden': true };

    return (
      <DialogStyled>
        <aside
          className={classNames(ROOT, {
            [ANIMATING]: this.state.animating,
            [OPEN]: open,
          }, className)}
          onClick={(e) => {
            if (onClose) onClose(e);
          }}
          onTransitionEnd={() => {
            this.setState({ animating: false });
          }}
          {...ariaHiddenProp}
        >
          <div
            className={SURFACE}
            onClick={(e) => {
              e.stopPropagation();
            }}
            {...otherProps}
          >
            {children}
          </div>
          <div className={BACKDROP} />
        </aside>
      </DialogStyled>
    );
  }
}

DialogWrapper.propTypes = propTypes;

DialogWrapper.defaultProps = defaultProps;

export default DialogWrapper;
