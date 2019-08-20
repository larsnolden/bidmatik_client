import React, { useState, useMemo } from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import * as R from 'ramda';

import renameKeys from 'helper/renameKeys';
import {
  ACOS,
  REVENUE,
  findConstant,
} from 'metricConstants';
import DateSelection from './DateSelection';
import MetricSelector from './MetricSelector';
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
  performanceTotal,
}) => {
  const [selectedMetrics, setSelectedMetrics] = useState({
    primary: ACOS.apiName,
    secondary: REVENUE.apiName,
  });

  const primaryGraphData = useMemo(() => (!loading
    && performance
    ? selectGraphData(selectedMetrics.primary, performance)
    : {}),
  [loading, performance, selectedMetrics.primary]);

  const secondaryGraphData = useMemo(() => (!loading
    && performance
    ? selectGraphData(selectedMetrics.secondary, performance)
    : {}),
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
        linePrimary={primaryGraphData}
        lineSecondary={secondaryGraphData}
      />
    </Container>
  );
};

export default PerformancePanel;

PerformancePanel.defaultProps = {
  handleDateRangeChange: () => { },
  loading: true,
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
  performanceTotal: {
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
  },
};

PerformancePanel.propTypes = {
  handleDateRangeChange: propTypes.func,
  loading: propTypes.bool,
  performance: propTypes.arrayOf(propTypes.objectOf(propTypes.number)),
  performanceTotal: propTypes.objectOf(propTypes.number),
};
