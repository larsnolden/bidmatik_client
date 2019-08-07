import React, { useState } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

import DateSelection from './DateSelection';
import MetricSelector from './MetricSelector';
import {
  ACOS,
  REVENUE,
  CLICKS,
  SPEND,
  BLENDEDACOS,
  TOTALREVENUE,
  IMPRESSIONS,
  PRIMARY,
  SECONDARY,
} from './constants';


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const PeformancePanel = () => {
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
        selectedMetrics={selectedMetrics}
        handleMetricsChange={setSelectedMetrics}
      />
    </Container>
  );
};

export default PeformancePanel;
