import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../index';
import Menu from '../Menu';
import { LabelStyled } from '../Input/TextStyled';

const propTypes = {
  asyncMode: PropTypes.bool,
  searchText: PropTypes.string,
  dropDownUpdater: PropTypes.func,
  dropDownValueKey: PropTypes.string,
  name: PropTypes.string,
  onDropDownSelection: PropTypes.func,
  dropDownDisplayKey: PropTypes.string,
  dropDownList: PropTypes.instanceOf(Array),
  selectedDropDowns: PropTypes.instanceOf(Array),
  labelContent: PropTypes.string,
  placeholder: PropTypes.string,
};

const defaultProps = {
  dropDownUpdater: () => null,
  dropDownValueKey: 'id',
  dropDownDisplayKey: 'title',
  name: 'name',
  dropDownList: [
    {
      id: 1,
      title: 'one',
      value: 'Nepal',
    },
    {
      id: 2,
      title: 'two',
      value: 'Nepal',
    },
    {
      id: 3,
      title: 'three',
      value: 'Nepal',
    },
    {
      id: 4,
      title: 'four',
      value: 'Nepal',
    },
    {
      id: 5,
      title: 'five',
      value: 'Nepal',
    },
    {
      id: 6,
      title: 'six',
      value: 'Nepal',
    },
  ],
  searchText: '',
  asyncMode: false,
  selectedDropDowns: [],
  onDropDownSelection: () => null,
  labelContent: '',
  placeholder: '',
};

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: props.searchText,
    };

    this.reference = {
      autoComplete: React.createRef(),
    };
  }

  handleInputChange = (event, label = 'searchText') => {
    const { asyncMode, dropDownUpdater } = this.props;
    this.setState({ searchText: event.target.value });

    if (asyncMode) {
      // trigger the call back TODO
      dropDownUpdater(event.target.value);
    }
  };

  getDropDownListForUserInput = () => {
    const { searchText } = this.state;
    const {
      selectedDropDowns, dropDownDisplayKey, dropDownList, asyncMode, dropDownValueKey,
    } = this.props;

    const validDropDownCriteria = (el) => {
      const searchCriteria = el[dropDownDisplayKey]
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const unSelectedCriteria = asyncMode
        ? selectedDropDowns.indexOf(el) === -1
        : selectedDropDowns.indexOf(el[dropDownValueKey]) === -1;

      return searchCriteria && unSelectedCriteria;
    };

    const unselectedDropDown = dropDownList.filter(validDropDownCriteria) || [];

    return unselectedDropDown;
  };

  handleCrossIconClick = (menu) => {
    const {
      selectedDropDowns, onDropDownSelection, dropDownValueKey, asyncMode, name
    } = this.props;

    const indexInSelectedList = selectedDropDowns.findIndex(
      el => ((asyncMode ? el[dropDownValueKey] : el) === menu[dropDownValueKey]),
    );

    selectedDropDowns.splice(indexInSelectedList, 1);
    onDropDownSelection(selectedDropDowns, name);
  };

  onDropDownSelection = (dropDown) => {
    const {
      selectedDropDowns, onDropDownSelection, asyncMode, dropDownValueKey, name,
    } = this.props;

    if (asyncMode) {
      selectedDropDowns.push(dropDown);
    } else {
      selectedDropDowns.push(dropDown[dropDownValueKey]);
    }
    onDropDownSelection(selectedDropDowns, name);
  };

  getSelectedDropDowns = () => {
    const {
      selectedDropDowns, asyncMode, dropDownList, dropDownValueKey, dropDownDisplayKey
    } = this.props;

    if (asyncMode) {
      return selectedDropDowns;
    }

    return selectedDropDowns.map(
      (id) => {
        const name = dropDownList.find(element => element[dropDownValueKey] === id);
        return name || {
          [dropDownValueKey]: id,
          [dropDownDisplayKey]: `--${id}--`,
        };
      },
    );
  };

  render() {
    const { searchText } = this.state;
    const { dropDownDisplayKey, labelContent, placeholder } = this.props;
    const selectedDropDowns = this.getSelectedDropDowns();

    const updatedDropDownList = this.getDropDownListForUserInput();

    const menuHeader = (
      <Fragment>
        {
          labelContent !== undefined ? <LabelStyled>{labelContent}</LabelStyled> : ''
        }

        <Input
          name="promotionId"
          type="text"
          value={searchText}
          placeholder={placeholder}
          onChange={event => this.handleInputChange(event, 'searchText')}
        />
      </Fragment>
    );

    return (
      <div>
        <Menu
          block
          header={menuHeader}
          hideOnClick
          ref={this.reference.autoComplete}
        >
          <div className="autocomplete-list">
            {
              updatedDropDownList
                .map(dropDown => (
                  <div
                    key={`selection-${dropDown.dropDownDisplayKey}`}
                    onClick={() => this.onDropDownSelection(dropDown)}>
                    <span>
                      {
                        dropDown[dropDownDisplayKey]
                      }
                    </span>
                  </div>
                ))
            }
          </div>
        </Menu>
        <div>
          {
            selectedDropDowns.map(item => (
              <div className="suggested-autocomplete-list">
                <span className="text">{item[dropDownDisplayKey]}</span>
                <span className="ic-close" onClick={() => this.handleCrossIconClick(item)}>
                  Close
                </span>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

AutoComplete.propTypes = propTypes;

AutoComplete.defaultProps = defaultProps;

export default AutoComplete;
