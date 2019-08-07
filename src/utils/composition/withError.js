import React from 'react';
import { getDisplayName } from './component';

// If you have internal state and/or refs,
// prefer class extends React.Component over React.createClass
// And if you don’t have state or refs, prefer normal functions (not arrow functions) over classes:
// A component’s displayName may be used by developer tools or in error messages,
// and having a value that clearly expresses this relationship
// helps people understand what is happening.
export default function withErrorScreen(WrappedComponent) {
  function WithLoadingScreen({ loading, children, ...props }) {
    if (loading) {
      return <span> Data is Loading with Loading Flag </span>;
    }
    return <WrappedComponent {...props}>{children}</WrappedComponent>;
  }

  WithLoadingScreen.displayName = `withErrorScreen(${getDisplayName(WrappedComponent)})`;
  return WithLoadingScreen;
}
