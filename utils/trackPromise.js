import React, { Component } from 'react';

// receives callback as a prop;
// this callback returns a promise;
const trackPromise = propName => (
  WrappedComponent => (
    class TrackPromiseContainer extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          loading: false,
          data: null,
          error: null,
        };
      }

      trackPromise = (...args) => {
        const { [propName]: callback } = this.props;

        this.setState({
          loading: true,
          data: null,
          error: null,
        });

        return callback(...args)
          .then(data => {
            this.setState({
              data,
              loading: false,
            });
          })
          .catch(error => {
            this.setState({
              error,
              loading: false,
            });
            throw error;
          });
      };

      render() {
        const { loading, data, error } = this.state;

        const newProps = {
          loading,
          data,
          error,
          [propName]: this.trackPromise
        };

        return (
          <WrappedComponent
            {...this.props}
            {...newProps}
          />
        );
      }
    }
  )
);

const exampleRequestHoc = WrappedComponent => (
  class ExampleRequestContainer extends React.Component {
    makeRequest = () => {
      return fetch('someUrl');
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          makeRequest={this.makeRequest}
        />
      );
    }
  }
);

const exampleHoc = WrappedComponent => (
  function ExampleContainer(props) {
    const { loading, error, data } = props;

    if (loading) {
      return <span>Loading</span>;
    }

    if (error) {
      return <span>Error</span>;
    }

    return (
      <WrappedComponent
        {...props}
        data={data}
      />
    );
  }
);

export { trackPromise, exampleRequestHoc, exampleHoc };
