import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomSelect from './CustomSelect';
import PaginationStyled from './PaginationStyled';
import { Icon } from '../index';

const PAGE_TO_DISPLAY = 3;

const SELECT_OPTIONS = [
  {
    label: '50',
    value: 50,
  },
  {
    label: '100',
    value: 100,
  },
  {
    label: '150',
    value: 150,
  },
];

const checkIfLowerLimitReached = currentPage => currentPage <= PAGE_TO_DISPLAY;

const checkIfUpperLimitReached = (currentPage, totalPage) => currentPage + PAGE_TO_DISPLAY >= totalPage;

const propTypes = {
  /**
   * @default 1
   * current currentPage for pagination
   */
  currentPage: PropTypes.number,
  /**
   * @default 1
   * limit for page
   */
  limit: PropTypes.number,
  /**
   * @default
   * total number of items in a page
   */
  totalItems: PropTypes.number.isRequired,
  /**
   * on currentPage change
   */
  onPageChange: PropTypes.func.isRequired,
  /**
   * @default bottom
   * orientation for page
   */
  orientation: PropTypes.string,
};

const defaultProps = {
  currentPage: 1,
  limit: 50,
  orientation: 'bottom',
};

class Pagination extends Component {
  constructor(props) {
    super(props);
    const { totalItems, limit } = props;
    this.state = {
      totalPage: Math.ceil(totalItems / limit), // total number of pages
    };
    // this.setTotalPage(props);
    // receives data: {page, limit} and total number of data from HOC
  }

  componentDidMount() {
    // this.setTotalPage(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setTotalPage(nextProps);
  }

  setTotalPage = (props) => {
    const { totalItems, limit } = props;
    const totalPage = Math.ceil(totalItems / limit);
    this.setState({
      totalPage,
    });
  };

  handlePageNumberChange = (pageNumber) => {
    const { limit, onPageChange, currentPage } = this.props;
    if (currentPage !== pageNumber) {
      onPageChange({
        limit,
        offset: (pageNumber - 1) * limit,
        page: pageNumber,
      });
    }
  };

  handlePageLimitChange = (event) => {
    const { currentPage, onPageChange } = this.props;
    const limit = event.target.value;
    onPageChange({
      limit,
      offset: (currentPage - 1) * limit,
      page: currentPage,
    });
  };

  /**
   * @param lowerLimitReached : if lower limit is reached
   * @param upperLimitReached: if upper limit is reached
   * @param totalNumberOfPages: total Number of pages
   * @param currentPage: Current pages
   * @return {number[]} list of the pages to be rendered
   */
  getPageList = (lowerLimitReached, upperLimitReached, totalNumberOfPages, currentPage) => {
    const startIndex = lowerLimitReached ? 1 : currentPage - PAGE_TO_DISPLAY;
    const endIndex = upperLimitReached ? totalNumberOfPages : currentPage + PAGE_TO_DISPLAY;
    return Array(endIndex - startIndex + 1)
      .fill(0)
      .map((e, i) => i + startIndex);
  };

  // todo if UI requires passive and active state for button
  getButtonState = () => {
    const { currentPage } = this.props;
    const { totalPage } = this.state;
    // first, prev, next, last
    const button = {
      first: false,
      prev: false,
      next: false,
      last: false,
    };
    if (currentPage === 1) {
      button.first = false;
      button.prev = false;
    }
    if (currentPage === totalPage) {
      button.next = false;
      button.last = false;
    }
    return button;
  };

  handleButtonClick = (type) => {
    const { onPageChange, limit, currentPage } = this.props;
    const { totalPage } = this.state;
    switch (type) {
      case 'next':
        if (currentPage < totalPage) {
          onPageChange({
            limit,
            offset: (currentPage) * limit,
            page: currentPage + 1,
          });
        }
        break;
      case 'prev':
        if (currentPage > 1) {
          onPageChange({
            limit,
            offset: (currentPage - 2) * limit,
            page: currentPage - 1,
          });
        }
        break;
      case 'first':
        onPageChange({
          limit,
          offset: 0,
          page: 1,
        });
        break;
      case 'last':
        onPageChange({
          limit,
          offset: (totalPage - 1) * limit,
          page: totalPage,
        });
        break;
      default:
        break;
    }
  };

  render() {
    const {
      totalPage,
    } = this.state;
    const {
      currentPage, limit, totalItems, orientation,
    } = this.props;
    const lowerLimitReached = checkIfLowerLimitReached(currentPage, totalPage);
    const upperLimitReached = checkIfUpperLimitReached(currentPage, totalPage);
    const pageList = this.getPageList(lowerLimitReached, upperLimitReached, totalPage, currentPage);
    const pageStartIndex = (currentPage - 1) * limit + 1;
    const pageEndIndex = pageStartIndex + limit - 1;
    return (
      <PaginationStyled>
        <div className="pagination-wrapper">
          <CustomSelect
            list={SELECT_OPTIONS}
            name="pagination-select"
            className="pagination-dropdown"
            defaultValue="50"
            orientation={orientation}
            onChange={this.handlePageLimitChange}
            showTotal={totalItems > 50}
          />
          {
            totalItems > 0
            && (
              <div className="pagination-control">
                <div className="pagination-control-inner">
                  <div className="info-display">
                            <span className="pagination-display-label">
                                Showing {pageStartIndex.toLocaleString()} to {pageEndIndex < totalItems ? pageEndIndex.toLocaleString() : totalItems.toLocaleString()} of {totalItems.toLocaleString()}
                            </span>
                  </div>
                  <div className="nav">
                          <span style={{ marginRight: 16 }}
                                onClick={() => this.handleButtonClick('first')}>
                            <Icon iconName="angle-left" />
                          </span>
                    <span style={{ marginRight: 16 }}
                          onClick={() => this.handleButtonClick('prev')}>
                            <Icon iconName="caret-left" />
                          </span>
                    {
                      !lowerLimitReached
                      && <span className="dot">...</span>
                    }
                    <div className="pagination-item">
                      {pageList.map(pageIndex => (
                        <span
                          key={`pagination-pageIndex-${pageIndex}`}
                          className={pageIndex === currentPage ? 'currentPage active' : 'page'}
                          onClick={() => this.handlePageNumberChange(pageIndex)}>
                                      {pageIndex}
                                    </span>
                      ))}
                      {
                        !upperLimitReached
                        && <span className="dot">...</span>
                      }
                    </div>
                    <span style={{ marginLeft: 16 }} onClick={() => this.handleButtonClick('next')}>
                            <Icon iconName="caret-right" />

                            </span>
                    <span style={{ marginLeft: 16 }} onClick={() => this.handleButtonClick('last')}>
                            <Icon iconName="angle-right" />
                          </span>
                  </div>
                </div>
              </div>
            )}
        </div>
      </PaginationStyled>
    );
  }
}

Pagination.propTypes = propTypes;

Pagination.defaultProps = defaultProps;

export default Pagination;
