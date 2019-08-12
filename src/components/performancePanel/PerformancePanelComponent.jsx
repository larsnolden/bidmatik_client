import React, { useState } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import propTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import * as R from 'ramda';

import renameKeys from 'helper/renameKeys';
import DateSelection from './DateSelection';
import MetricSelector from './MetricSelector';
import {
  ACOS,
  REVENUE,
  metricSymbols,
} from './constants';
import LineGraph from './LineGraph';


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const selectGraphData = (metric, accountPerformance) => {
  const selectedMetricOverTime = R.map(R.pick([metric, 'date']))(accountPerformance);
  return {
    data: R.map(renameKeys({ date: 'x', [metric]: 'y' }))(selectedMetricOverTime),
    metricName: metric,
    metricSymbol: metricSymbols[metric],
  };
};

//  Todo: add some loading state
const PerformancePanel = ({
  accountPerformance,
  totaledAccountPerformance,
  dateFrom,
  dateTo,
  loading = true,
  handleDateRangeChange,
}) => {
  const [selectedMetrics, setSelectedMetrics] = useState({
    primary: ACOS,
    secondary: REVENUE,
  });

  return (
    <Container>
      <DateSelection
        dateFrom={dateFrom}
        dateTo={dateTo}
        handleDateRangeChange={handleDateRangeChange}
      />
      <MetricSelector
        {...totaledAccountPerformance}
        loading={loading}
        selectedMetrics={selectedMetrics}
        handleMetricsChange={setSelectedMetrics}
      />
      <LineGraph
        loading={loading}
        linePrimary={selectGraphData(selectedMetrics.primary, accountPerformance)}
        lineSecondary={selectGraphData(selectedMetrics.secondary, accountPerformance)}
      />
    </Container>
  );
};

PerformancePanel.defaultProps = {
  totaledAccountPerformance: {
    budget: 0,
    impressions: 0,
    clicks: 0,
    ctr: 0,
    spend: 0,
    cpc: 0,
    orders: 0,
    revenue: 0,
    acos: 0,
    absoluteRevenue: 0,
    absoluteAcos: 0,
  },
  accountPerformance: [{
    budget: 0,
    impressions: 0,
    clicks: 0,
    ctr: 0,
    spend: 0,
    cpc: 0,
    orders: 0,
    revenue: 0,
    acos: 0,
    absoluteRevenue: 0,
    absoluteAcos: 0,
  }],
  dateFrom: moment(),
  dateTo: moment(),
  loading: true,
  handleDateRangeChange: () => {},
};

PerformancePanel.propTypes = {
  totaledAccountPerformance: propTypes.objectOf({
    budget: propTypes.number,
    impressions: propTypes.number,
    clicks: propTypes.number,
    ctr: propTypes.number,
    spend: propTypes.number,
    cpc: propTypes.number,
    orders: propTypes.number,
    revenue: propTypes.number,
    acos: propTypes.number,
    absoluteRevenue: propTypes.number,
    absoluteAcos: propTypes.number,
  }),
  accountPerformance: propTypes.arrayOf({}),
  dateFrom: momentPropTypes.momentObj,
  dateTo: momentPropTypes.momentObj,
  loading: propTypes.bool,
  handleDateRangeChange: propTypes.func,
};

export default PerformancePanel;
