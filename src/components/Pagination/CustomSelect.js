/**
 * Created by kAy on 8/15/17.
 */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CustomSelectStyled from './CustomSelectStyled';
import { Icon } from '../index';

const proptTypes = {
  selectedDates: PropTypes.func,
  orientation: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

const defaultProps = {
  onChange: () => null,
  selectedDates: () => null,
  orientation: '',
  defaultValue: () => null,
};


class CustomSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      defaultValue: '',
    };
  }

  componentDidMount() {
    this.setPropsToState();
  }

  setPropsToState = () => {
    const { defaultValue } = this.props;
    this.setState({
      defaultValue: defaultValue || '',
    });
  };


  render() {
    const { showOptions, defaultValue } = this.state;
    const {
      list, onChange, orientation, name, showTotal,
    } = this.props;
    return (
      <CustomSelectStyled>
        <div
          tabIndex="0"
          className="custom-select-wrapper"
          onClick={() => this.setState({ showOptions: !showOptions })}
          onBlur={() => this.setState({ showOptions: false })}
        >
          {showTotal && (
            <Fragment>
              <div className="custom-select">
                <div className="custom-select-option">
                  <span className="pagination-display-label">
                    {name === 'pagination-select' ? 'Show' : ''}
                    {' '}
                    {defaultValue}
                  </span>
                  <span style={{
                    display: 'inline-block',
                    marginLeft: 10,
                  }}
                  >
                    <Icon iconName="caret-bottom" />
                  </span>
                </div>
              </div>
              {
                showOptions
                  ? (
                    <ul
                      className={orientation === 'top'
                        ? 'custom-options-list-top'
                        : 'custom-options-list-bottom'}
                      ref="customSelect"
                    >
                      {
                        list && list.map(each => (
                          <li
                            key={each.value}
                            onClick={() => {
                              this.setState({
                                showOptions: false,
                                defaultValue: each.value,
                              });
                              onChange({ target: { value: each.value } });
                            }
                            }
                          >
                            {each.label}
                          </li>
                        ))
                      }
                    </ul>
                  )
                  : null
              }
            </Fragment>
          )
          }
        </div>
      </CustomSelectStyled>
    );
  }
}


CustomSelect.propTypes = proptTypes;

CustomSelect.defaultProps = defaultProps;

export default CustomSelect;
