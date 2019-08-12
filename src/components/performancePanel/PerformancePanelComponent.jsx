import React, { useState } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import propTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';

import DateSelection from './DateSelection';
import MetricSelector from './MetricSelector';
import {
  ACOS,
  REVENUE,
} from './constants';


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

//  Todo: add some loading state
const PerformancePanel = ({
  metrics,
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
        {...metrics}
        loading={loading}
        selectedMetrics={selectedMetrics}
        handleMetricsChange={setSelectedMetrics}
      />
    </Container>
  );
};

PerformancePanel.defaultProps = {
  metrics: {
    acos: 0,
    revenue: 0,
    clicks: 0,
    spend: 0,
    totalAcos: 0,
    totalRevenue: 0,
    impressions: 0,
  },
  dateFrom: moment(),
  dateTo: moment(),
  loading: true,
  handleDateRangeChange: () => {},
};

PerformancePanel.propTypes = {
  metrics: propTypes.objectOf({
    acos: propTypes.number,
    revenue: propTypes.number,
    clicks: propTypes.number,
    spend: propTypes.number,
    totalAcos: propTypes.number,
    totalRevenue: propTypes.number,
    impressions: propTypes.number,
  }),
  dateFrom: momentPropTypes.momentObj,
  dateTo: momentPropTypes.momentObj,
  loading: propTypes.bool,
  handleDateRangeChange: propTypes.func,
};

export default PerformancePanel;
