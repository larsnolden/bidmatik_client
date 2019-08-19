import React from 'react';
import Page from 'components/page/Page';
import PerformancePanel from 'components/performancePanel/PerformancePanel';
import CampaignsTable from './CampaignsTable';
import {
  compose,
  withProps,
  branch,
  renderComponent,
} from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import * as R from 'ramda';
import moment from 'moment';
import {
  ACOS,
  ABSOLUTEACOS,
  REVENUE,
  CLICKS,
  IMPRESSIONS,
  SPEND,
} from 'metricConstants';
import {
  formatPercentage,
} from 'helper/format';


const campaignTableColumns = [ACOS, ABSOLUTEACOS, REVENUE, CLICKS, IMPRESSIONS, SPEND];
const campaignTableColumnNames = campaignTableColumns.map(column => column.displayName);


const reduceAccountPerformance = performance => ({
  impressions: R.pipe(R.map(R.prop('impressions')), R.sum)(performance),
  clicks: R.pipe(R.map(R.prop('clicks')), R.sum)(performance),
  ctr: R.pipe(R.map(R.prop('ctr')), R.mean)(performance),
  spend: R.pipe(R.map(R.prop('spend')), R.sum)(performance),
  cpc: R.pipe(R.map(R.prop('cpc')), R.mean)(performance),
  orders: R.pipe(R.map(R.prop('orders')), R.sum)(performance),
  revenue: R.pipe(R.map(R.prop('revenue')), R.sum)(performance),
  acos: R.pipe(R.map(R.prop('acos')), R.mean)(performance),
  absoluteRevenue: R.pipe(R.map(R.prop('absoluteRevenue')), R.sum)(performance),
  absoluteAcos: R.pipe(R.map(R.prop('absoluteAcos')), R.mean)(performance),
});

const reduceCampaignsRows = campaigns => campaigns.map((campaign) => {
  const columns = campaignTableColumns.map(tColumn => ({
    value: tColumn.format(campaign[tColumn.apiName]),
    change: formatPercentage(campaign[`${tColumn.apiName}Change`]),
  }));
  return {
    id: campaign.id,
    columns: [
      {
        value: campaign.name,
      },
      ...columns,
    ],
  };
});

const ACCOUNT_PERFORMANCE__CAMPAIGNS_QUERY = gql`
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
    campaigns(from:$from, to: $to) {
      id
      name
      impressions
      impressionsChange
      clicks
      clicksChange
      spend
      spendChange
      revenue
      revenueChange
      acos
      acosChange
      absoluteAcos
      absoluteAcosChange
    }
  }
`;

const Overview = ({
  from,
  to,
  handleDateRangeChange,
  loading,
  performance,
  performanceTotal,
  campaignRows
}) => {
  //mutate and refetch
  //const handleDateRangeChange 
  return (
    <Page>
      <PerformancePanel
        from={from}
        to={to}
        handleDateRangeChange={handleDateRangeChange}
        loading={loading}
        performance={performance}
        performanceTotal={performanceTotal}
      />
      <CampaignsTable
        loading={loading}
        rows={campaignRows}
        columns={campaignTableColumnNames}
      />
    </Page>
  );
};

const waitWhileLoading = (component, propName = 'data') => branch(
  props => props[propName] && props[propName].loading,
  renderComponent(component),
);

const transformProps = withProps(({ data }) => {
  const { campaigns, accountPerformance } = data;
  const accountPerformanceReduced = reduceAccountPerformance(accountPerformance);
  const campaignRows = reduceCampaignsRows(campaigns);
  return {
    performanceTotal: accountPerformanceReduced,
    performance: accountPerformance,
    loading: false,
    from: data.variables.from,
    to: data.variables.to,
    handleDateRangeChange: ({ dateFrom, dateTo }) => data.refetch({ from: dateFrom, to: dateTo }),
    campaignRows,
  };
});

export default compose(
  graphql(ACCOUNT_PERFORMANCE__CAMPAIGNS_QUERY, {
    options: {
      variables: {
        from: moment(moment.now()).subtract(60, 'days'),
        to: moment(moment.now()),
      },
    },
  }),
  waitWhileLoading(Overview),
  transformProps,
)(Overview);
