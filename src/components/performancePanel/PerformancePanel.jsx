import React, { useState, useMemo } from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import * as R from 'ramda';
import moment from 'moment';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';

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
  const dateLens = R.lensProp('date');
  const graphqData = R.compose(
    R.map(renameKeys({ date: 'x', [metric]: 'y' })),
    R.map(R.over(dateLens, x => moment(x).toDate())),
    R.map(R.pick([metric, 'date'])),
  )(performance);
  return {
    data: graphqData,
    metricName: findConstant(metric).displayName,
    metricSymbol: findConstant(metric).symbol,
  };
};

//  Todo: add some loading state
const PerformancePanel = ({
  handleUserFilterDatesChange,
  userFilterDates,
  loading,
  performance,
  profilePerformanceReduced,
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
        loading={loading}
        userFilterDates={userFilterDates}
        handleDateRangeChange={handleUserFilterDatesChange}
      />
      <MetricSelector
        loading={loading}
        selectedMetrics={selectedMetrics}
        handleMetricsChange={setSelectedMetrics}
        performanceReduced={profilePerformanceReduced}
      />
      <LineGraph
        loading={loading}
        linePrimary={primaryGraphData}
        lineSecondary={secondaryGraphData}
      />
    </Container>
  );
};

export default createFragmentContainer(
  PerformancePanel,
  {
    performance: graphql`
      #<ComponentFileName>_<propName>
      fragment PerformancePanel_performance on ProfilePerformance @relay(plural: true) {
        date
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
