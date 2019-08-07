import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * @default null
   * children passed within button
   */
  children: PropTypes.node,
  /**
   * @default ''
   * children transition time for collapsible component
   */
  transitionTime: PropTypes.number,
  /**
   * @default true
   * enable error display mode in the form
   */
  onOpen: PropTypes.bool,
  /**
   * @default true
   * enable validation in the form
   */
  onClose: PropTypes.bool,
  /**
   * @default false
   * show or hide the collapsible
   */
  show: PropTypes.bool,
  /**
   * @default null
   * trigger component for collapsible
   */
  trigger: PropTypes.component,
  /**
   * default true.
   * close on other collapsible click
   */
  accordion: PropTypes.bool,
};

const defaultProps = {
  show: false,
  children: undefined,
  transitionTime: 0,
  onOpen: () => null,
  onClose: () => null,
  accordion: true,
  trigger: null,
};

const addMouseClickListener = (callBack) => {
  document.addEventListener('mousedown', callBack);
  document.addEventListener('touchstart', callBack);
};

const removeMouseClickListener = (callBack) => {
  document.removeEventListener('mousedown', callBack);
  document.removeEventListener('touchstart', callBack);
};

class CollapsibleTable extends Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
    };

    this.childrenRef = React.createRef();
  }

  componentDidMount() {
    // addMouseClickListener();
  }

  componentWillUnmount() {
    // removeMouseClickListener();
  }

  onClick = (event) => {
    // check if even is triggered outside of div
    // if click is other collapsible & is not inside nested children,
    // then set to false, if accordion is set to true.

    // if click is not inside other collapsible, then do nothing.
  };

  onHeaderClick = () => {
    const { show } = this.state;
    const { open } = this.props;
    if (open) this.setState({ show: !show });

  };

  render() {
    const { children, trigger } = this.props;
    const { show } = this.state;
    return (
      <Fragment>
        <tr onClick={() => this.onHeaderClick()}>{trigger}</tr>
        {
          show
          && (
            <tr className="collapsible-body-tr">
              <td colSpan="75%" className="collapsible-body-td">
                <table>
                  <tbody>
                  {children}
                  </tbody>

                </table>
              </td>
            </tr>
          )
        }
      </Fragment>


    );
  }
}

export default CollapsibleTable;
