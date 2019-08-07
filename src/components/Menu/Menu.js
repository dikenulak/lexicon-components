import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Badge, Button } from '../index';
import FilterMenuStyled from './MenuStyled';

/**
 * @type {{onDialogCancel: shim, onDialogOkay: shim, name: shim, presentationType: shim}}
 */
const propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  header: PropTypes.object,
  body: PropTypes.object,
  hideOnClick: PropTypes.bool,
  hideOnClickOutside: PropTypes.bool,
};

const defaultProps = {
  label: '',
  value: 0,
  hideOnClick: false,
  hideOnClickOutside: true,
};

// todo adjust the class name accordingly
const getMenuConfig = (label, value) => {
  switch (label) {
    case 'filter':
      return (
        <div className={value > 0 ? 'filter-icon active' : 'filter-icon'}>
          <Button outlined iconName="filter" />
          {
            value > 0 ? <Badge className="primary" label={value} /> : null}
        </div>
      );
    case 'sort':
      return (
        <div className={value !== '' ? 'filter-icon active' : 'filter-icon'}>
          <Button outlined iconName="filter" />
          {
            value !== ''
              ? <Badge className="primary" label={value} /> : null
          }
        </div>
      );
    default:
      break;
  }
};

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBody: false,
    };
    // this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('touchstart', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('touchstart', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    if (node) {
      this.wrapperRef = node;
    }
  };

  handleHeaderClick = () => {
    //debugger;
    this.setState({ showBody: !this.state.showBody });
    // else it will be changed by event listener
  };

  handleClickOutside = (event) => {
    const { hideOnClickOutside, hideOnClick } = this.props;
    const dropDownEvent = event.target.id.includes('react-select'); // todo quick fix
    if (hideOnClick) {
      // this.setState({ showBody: false })
    }

    if (hideOnClickOutside && this.wrapperRef
      && !this.wrapperRef.contains(event.target) && !dropDownEvent) {
      this.setState({ showBody: false });
    }
  };

  close = () => {
    this.setState({ showBody: false });
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    const { showBody } = this.state;
    const {
      label, value, body, children, header,
    } = this.props;
    const headerDom = label === '' ? header : getMenuConfig(label, value);

    return (
      <FilterMenuStyled>
        <div className="filter-item" onClick={e => this.handleHeaderClick(e)}>
          <div className={showBody ? 'filter-background' : ''}>
            {headerDom}
          </div>
        </div>
        {
          showBody
          && (
            <div className="filter-dropdown-card" ref={node => this.setWrapperRef(node)}>
              {body}
              {children}
            </div>)
        }
      </FilterMenuStyled>
    );
  }
}

Menu.propTypes = propTypes;

Menu.defaultProps = defaultProps;

export default Menu;
