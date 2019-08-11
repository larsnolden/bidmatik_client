import React, { useState } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

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

const PerformancePanel = ({
  metrics,
  dateFrom,
  dateTo,
  loading = true,
}) => {
  console.log('metrics', metrics);
  const [selectedDates, setSelectedDates] = useState({
    from: moment(moment.now()).subtract(60, 'days'),
    to: moment(moment.now()),
  });

  const [selectedMetrics, setSelectedMetrics] = useState({
    primary: ACOS,
    secondary: REVENUE,
  });

  return (
    <Container>
      <DateSelection
        dateRange={selectedDates}
        handleDateRangeChange={setSelectedDates}
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

export default PerformancePanel;
