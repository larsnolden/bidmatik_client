import React from 'react';
import Page from 'components/page/Page';
import PerformancePanel from 'components/performancePanel/PerformancePanel';

const Campaign = ({
  route,
  from,
  to,
  handleDateRangeChange,
  loading,
  performance,
  performanceTotal,
}) => (
  <Page
    heading="Demo Campaign"
  >
    {/* <h1>{JSON.stringify(route)}</h1> */}
    {/* <h1>{JSON.stringify(route)}</h1> */}
    {/* <PerformancePanel
      from={from}
      to={to}
      handleDateRangeChange={handleDateRangeChange}
      loading={loading}
      performance={performance}
      performanceTotal={performanceTotal}
      /> */}
  </Page>
);

export default Campaign;
