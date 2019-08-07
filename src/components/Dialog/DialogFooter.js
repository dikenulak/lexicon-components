import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FOOTER, FOOTER_BUTTON, FOOTER_BUTTON_CANCEL, FOOTER_BUTTON_ACCEPT } from './constants';
import { DialogFooterStyled } from './DialogStyled';

const propTypes = {
  /**
   * @default ''
   * className passed to dialog Header
   */
  className: PropTypes.string,
  /**
   * @default null
   * children passed into dialog Header
   */
  children: PropTypes.node,
};

const defaultProps = {
  className: '',
  children: null,
};

const DialogFooter = ({ className, children }) => {
  const last = children.length - 1;
  const actions = React.Children.map(children, (action, index) => {
    const isLastAction = last === index;
    const actionClasses = action.props.className;
    const classes = classNames(actionClasses, FOOTER_BUTTON, {
      [FOOTER_BUTTON_CANCEL]: !isLastAction,
      [FOOTER_BUTTON_ACCEPT]: isLastAction,
    });
    return React.cloneElement(action, {
      key: index,
      className: classes
    });
  });

  return (
    <DialogFooterStyled>
      <div className={classNames(FOOTER, className)}>
        {actions}
      </div>
    </DialogFooterStyled>
  );
};

DialogFooter.propTypes = propTypes;

DialogFooter.defaultProps = defaultProps;

export default DialogFooter;
