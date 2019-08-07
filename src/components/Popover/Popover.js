import PropTypes from 'prop-types';
import React, { Fragment, Component } from 'react';
import { Icon } from '../index';
import Menu from '../Menu/Menu';


const propTypes = {
  headerTitle: PropTypes.string,
  footer: PropTypes.instanceOf(Object),
  children: PropTypes.instanceOf(Object),
  popoverIcon: PropTypes.instanceOf(Object),
};

const defaultProps = {
  headerTitle: '',
};

class Popover extends Component {

  onCloseClick = () => {
    this.popover.close();
  };

  render() {
    const {
      children, headerTitle, popoverIcon, footer
    } = this.props;

    return (
      <Fragment>
        <Menu label="" header={popoverIcon} ref={ref => this.popover = ref}>
          {
            headerTitle && <div className="filter-label">
              <span className="">{headerTitle}</span>
              <Icon iconName="times" onClick={() => this.onCloseClick()}/>
            </div>
          }
          <div className="filter-content">
            {children}
          </div>
          {
            footer && <div className="popup-footer">
              {footer}
            </div>
          }
        </Menu>
      </Fragment>
    );
  }
}

Popover.propTypes = propTypes;

Popover.defaultProps = defaultProps;

export default Popover;
