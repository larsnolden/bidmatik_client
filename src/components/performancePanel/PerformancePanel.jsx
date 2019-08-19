import React, { useState, useMemo } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import propTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import * as R from 'ramda';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import renameKeys from 'helper/renameKeys';
import DateSelection from './DateSelection';
import MetricSelector from './MetricSelector';
import {
  ACOS,
  REVENUE,
  findConstant,
} from 'metricConstants';
import LineGraph from './LineGraph';


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const selectGraphData = (metric, performance) => {
  const selectedMetricOverTime = R.map(R.pick([metric, 'date']))(performance);
  return {
    data: R.map(renameKeys({ date: 'x', [metric]: 'y' }))(selectedMetricOverTime),
    metricName: findConstant(metric).displayName,
    metricSymbol: findConstant(metric).symbol,
  };
};

//  Todo: add some loading state
const PerformancePanel = ({
  handleDateRangeChange,
  loading,
  performance,
  performanceTotal
}) => {
  const [selectedMetrics, setSelectedMetrics] = useState({
    primary: ACOS.apiName,
    secondary: REVENUE.apiName,
  });

  const primaryGraphqData = useMemo(() => !loading
    && performance
    && selectGraphData(selectedMetrics.primary, performance),
  [loading, performance, selectedMetrics.primary]);

  const secondaryGraphqData = useMemo(() => !loading
    && performance
    && selectGraphData(selectedMetrics.secondary, performance),
  [loading, performance, selectedMetrics.secondary]);

  return (
    <Container>
      <DateSelection
        handleDateRangeChange={handleDateRangeChange}
      />
      <MetricSelector
        {...performanceTotal}
        loading={loading}
        selectedMetrics={selectedMetrics}
        handleMetricsChange={setSelectedMetrics}
      />
      <LineGraph
        loading={loading}
        linePrimary={primaryGraphqData}
        lineSecondary={secondaryGraphqData}
      />
    </Container>
  );
}

export default PerformancePanel;

PerformancePanel.defaultProps = {
  from: moment(),
  to: moment(),
  loading: true,
  handleDateRangeChange: () => {},
  performance: [{
    acos: 0,
    revenue: 0,
    clicks: 0,
    spend: 0,
    absoluteAcos: 0,
    absoluteRevenue: 0,
    impressions: 0,
    ctr: 0,
    cpc: 0,
    orders: 0,
  }],
  performanceTotal: [{
    acos: 0,
    revenue: 0,
    clicks: 0,
    spend: 0,
    absoluteAcos: 0,
    absoluteRevenue: 0,
    impressions: 0,
    ctr: 0,
    cpc: 0,
    orders: 0,
  }],
};

// PerformancePanel.propTypes = {
//   data: propTypes.objectOf({
//     variables: propTypes.objectOf({
//       from: momentPropTypes.momentObj,
//       to: momentPropTypes.momentObj,
//     }),
//     loading: propTypes.bool,
//     performance: propTypes.arrayOf({
//       acos: propTypes.number,
//       revenue: propTypes.number,
//       clicks: propTypes.number,
//       spend: propTypes.number,
//       absoluteAcos: propTypes.number,
//       absoluteRevenue: propTypes.number,
//       impressions: propTypes.number,
//       ctr: propTypes.number,
//       cpc: propTypes.number,
//       orders: propTypes.number,
//     }),
//   }),
// };
