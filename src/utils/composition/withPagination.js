import React, { Component } from 'react';

function withPagination(WrappedComponent) {
  function withPaginatedBase({ ...props }) {
    const { pagination } = props;

    class Pagination extends Component {
      constructor(props) {
        super(props);
        this.state = {
          page: pagination.page,
          limit: pagination.limit,
          offset: pagination.offset,
        };
      }

      handleClick = () => {
        let { page, limit, offset } = this.state;
        page += 1;
        limit += 1;
        offset += 1;
        this.setState({
          page,
          limit,
          offset,
        });
      };

      render() {
        return (
          <div>
            <WrappedComponent {...props} />
            <span onClick={() => this.handleClick()}>
              Paginated component is rendered here {JSON.stringify(this.state)}</span>
          </div>
        );
      }
    }

    return <Pagination/>;
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  withPaginatedBase.displayName = `withPagination(${wrappedComponentName})`;
  return withPaginatedBase;
}

export default withPagination;
