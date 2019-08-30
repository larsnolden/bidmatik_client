import React from 'react';
import propTypes from 'prop-types';

const BranchRenderOnLoading = (LoadingComponent, NotLoadingComponent) => (
  { loading, ...props },
) => {
  return loading ? <LoadingComponent /> : <NotLoadingComponent {...props} />;
};

export default BranchRenderOnLoading;

BranchRenderOnLoading.propTypes = {
  LoadingComponent: propTypes.func,
  NotLoadingComponent: propTypes.func,
};
