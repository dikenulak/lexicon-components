import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { BODY, SCROLLABLE } from './constants';
import { DialogBodyStyled } from './DialogStyled';

const propTypes = {
  /**
   * @default ''
   * className passed with dialog Body
   */
  className: PropTypes.string,
  /**
   * @default null
   * children passed within Dialog Body
   */
  children: PropTypes.node,
  /**
   *  @default false
   *  if dialogBocy is scrollable
   */
  scrollable: PropTypes.bool,
};

const defaultProps = {
  className: '',
  children: null,
  scrollable: false,
};

const DialogBody = ({ className, children, scrollable, ...otherProps }) => (
  <DialogBodyStyled>
    <div
      className={classNames(BODY, {
        [SCROLLABLE]: scrollable,
      }, className)}
      {...otherProps}
    >
      {children}
    </div>
  </DialogBodyStyled>
);

DialogBody.propTypes = propTypes;

DialogBody.defaultProps = defaultProps;

export default DialogBody;
