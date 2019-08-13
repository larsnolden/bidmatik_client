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
  metricSymbols,
  metricNames,
} from './constants';
import LineGraph from './LineGraph';


const GET_ACCOUNT_PERFORMANCE = gql`
  query performance_and_campaigns($from: Date, $to: Date){
    accountPerformance(from: $from, to: $to){
      impressions
      clicks
      ctr
      spend
      cpc
      orders
      revenue
      acos
      absoluteRevenue
      absoluteAcos
      date
    }
  }
`;

const reduceAccountPerformance = accountPerformance  => ({
  impressions: R.pipe(R.map(R.prop('impressions')), R.sum)(accountPerformance),
  clicks: R.pipe(R.map(R.prop('clicks')), R.sum)(accountPerformance),
  ctr: R.pipe(R.map(R.prop('ctr')), R.mean)(accountPerformance),
  spend: R.pipe(R.map(R.prop('spend')), R.sum)(accountPerformance),
  cpc: R.pipe(R.map(R.prop('cpc')), R.mean)(accountPerformance),
  orders: R.pipe(R.map(R.prop('orders')), R.sum)(accountPerformance),
  revenue: R.pipe(R.map(R.prop('revenue')), R.sum)(accountPerformance),
  acos: R.pipe(R.map(R.prop('acos')), R.mean)(accountPerformance),
  absoluteRevenue: R.pipe(R.map(R.prop('absoluteRevenue')), R.sum)(accountPerformance),
  absoluteAcos: R.pipe(R.map(R.prop('absoluteAcos')), R.mean)(accountPerformance),
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const selectGraphData = (metric, accountPerformance) => {
  const selectedMetricOverTime = R.map(R.pick([metric, 'date']))(accountPerformance);
  return {
    data: R.map(renameKeys({ date: 'x', [metric]: 'y' }))(selectedMetricOverTime),
    metricName: metricNames[metric],
    metricSymbol: metricSymbols[metric],
  };
};

//  Todo: add some loading state
const PerformancePanel = ({
  data,
}) => {
  const [selectedMetrics, setSelectedMetrics] = useState({
    primary: ACOS,
    secondary: REVENUE,
  });

  const totaledAccountPerformance = useMemo(() => !data.loading
    && data.accountPerformance
    && reduceAccountPerformance(data.accountPerformance),
  [data.loading, data.accountPerformance]);

  const primaryGraphqData = useMemo(() => !data.loading
    && data.accountPerformance
    && selectGraphData(selectedMetrics.primary, data.accountPerformance),
  [data.loading, data.accountPerformance, selectedMetrics.primary]);

  const secondaryGraphqData = useMemo(() => !data.loading
    && data.accountPerformance
    && selectGraphData(selectedMetrics.secondary, data.accountPerformance),
  [data.loading, data.accountPerformance, selectedMetrics.secondary]);

  return (
    <Container>
      <DateSelection
        dateFrom={data.variables.from}
        dateTo={data.variables.to}
        handleDateRangeChange={
          ({ dateFrom, dateTo }) => data.refetch({ from: dateFrom, to: dateTo })
        }
      />
      <MetricSelector
        {...totaledAccountPerformance}
        loading={data.loading}
        selectedMetrics={selectedMetrics}
        handleMetricsChange={setSelectedMetrics}
      />
      <LineGraph
        loading={data.loading}
        linePrimary={primaryGraphqData}
        lineSecondary={secondaryGraphqData}
      />
    </Container>
  );
}

export default graphql(GET_ACCOUNT_PERFORMANCE, {
  options: {
    variables: {
      from: moment(moment.now()).subtract(60, 'days'),
      to: moment(moment.now()),
    },
  },
})(PerformancePanel);

PerformancePanel.defaultProps = {
  data: {
    variables: {
      from: moment(),
      to: moment(),
    },
    loading: true,
    accountPerformance: [{
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
  },
};

PerformancePanel.propTypes = {
  data: propTypes.objectOf({
    variables: propTypes.objectOf({
      from: momentPropTypes.momentObj,
      to: momentPropTypes.momentObj,
    }),
    loading: propTypes.bool,
    accountPerformance: propTypes.arrayOf({
      acos: propTypes.number,
      revenue: propTypes.number,
      clicks: propTypes.number,
      spend: propTypes.number,
      absoluteAcos: propTypes.number,
      absoluteRevenue: propTypes.number,
      impressions: propTypes.number,
      ctr: propTypes.number,
      cpc: propTypes.number,
      orders: propTypes.number,
    }),
  }),
};
