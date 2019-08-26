import React from 'react';
import Page from 'components/page/Page';
import PerformancePanel from 'components/performancePanel/PerformancePanel';

const Campaign = ({
  match,
  from,
  to,
  handleDateRangeChange,
  loading,
  performance,
  performanceTotal,
}) => (
  <Page
    heading={match.params.campaignId}
  >
    <PerformancePanel
      from={from}
      to={to}
      handleDateRangeChange={handleDateRangeChange}
      loading={loading}
      performance={performance}
      performanceTotal={performanceTotal}
      />
      some
  </Page>
);

export default Campaign;
