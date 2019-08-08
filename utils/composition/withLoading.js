import React, { Fragment } from 'react';
import { getDisplayName } from './component';
import { Loading } from '../../components/index';

export default function withLoading(WrappedComponent) {
  function withLoadingScreen({ loading, children, ...props }) {
    return (
      <Fragment>
        {loading && (
          <Loading title="Loading data... Please wait!" />
        )}
        <WrappedComponent {...props}>{children}</WrappedComponent>
      </Fragment>
    );
  }

  withLoadingScreen.displayName = `LoadingAndError(${getDisplayName(WrappedComponent)})`;

  return withLoadingScreen;
}
