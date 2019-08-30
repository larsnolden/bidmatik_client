/* eslint-disable react/require-default-props */
import React from 'react';
import propTypes from 'prop-types';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import MetricSelectorComponent from './MetricSelector.component';
import BranchRenderOnLoading from 'helper/BranchRenderOnLoading';

const MetricSelector = ({
  performanceReduced,
  selectedMetrics,
  handleMetricsChange,
}) => (
  <MetricSelectorComponent
    {...performanceReduced}
    selectedMetrics={selectedMetrics}
    handleMetricsChange={handleMetricsChange}
    loading={false}
  />
);

export default createFragmentContainer(
  BranchRenderOnLoading(MetricSelectorComponent, MetricSelector),
  {
    performanceReduced: graphql`
    #<ComponentFileName>_<propName>
      fragment MetricSelector_performanceReduced on ProfilePerformance {
        acos
        revenue
        clicks
        spend
        absoluteAcos
        absoluteRevenue
        impressions
      }
    `,
  },
);

MetricSelector.propTypes = {
  performanceReduced: propTypes.shape({
    acos: propTypes.number,
    revenue: propTypes.number,
    clicks: propTypes.number,
    spend: propTypes.number,
    absoluteAcos: propTypes.number,
    absoluteRevenue: propTypes.number,
    impressions: propTypes.number,
  }),
  selectedMetrics: propTypes.shape({
    primary: propTypes.string,
    secondary: propTypes.string,
  }),
  handleMetricsChange: propTypes.func,
};
