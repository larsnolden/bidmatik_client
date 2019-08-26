import React from 'react';
import Page from 'components/page/Page';
import PerformancePanel from 'components/performancePanel/PerformancePanel';
import {
  compose,
  withProps,
  branch,
  renderComponent,
} from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
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
import CampaignsTable from './CampaignsTable';


const campaignTableColumns = [ACOS, ABSOLUTEACOS, REVENUE, CLICKS, IMPRESSIONS, SPEND];
const campaignTableColumnNames = campaignTableColumns.map(column => column.displayName);

const reduceCampaignsRows = campaigns => campaigns.map((campaign) => {
  const {
    id,
    name,
    CampaignPerformanceReduced,
    CampaignPerformanceDelta,
  } = campaign;
  const columns = campaignTableColumns.map(tColumn => ({
    value: tColumn.format(CampaignPerformanceReduced[tColumn.apiName]),
    //  don't display percent badge if change is 0
    change: CampaignPerformanceDelta[tColumn.apiName] * 100 !== 0
      ? formatPercentage(CampaignPerformanceDelta[tColumn.apiName] * 100, 0)
      : null,
  }));
  return {
    id,
    columns: [
      {
        id,
        value: name,
      },
      ...columns,
    ],
  };
});

const ACCOUNT_PERFORMANCE__CAMPAIGNS_QUERY = gql`
  # CampaignPerformance is the generic response type for any kind of campaign performance query
  fragment CampaignMetricsPercent on CampaignPerformancePercent {
    impressions
    clicks
    ctr
    spend
    orders
    revenue
    acos
    absoluteAcos
  }

  fragment CampaignMetrics on CampaignPerformance {
    impressions
    clicks
    ctr
    spend
    orders
    revenue
    acos
    absoluteAcos
  }


  # ProfilePerformance is the generic response type for any kind of profile performance query
  fragment ProfileMetrics on ProfilePerformance {
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
  }


  query overview($profileId: ID!, $from: Date!, $to: Date!) {
    UserFilterDates {
      id
      from
      to
    }

    SellerProfile(id: $profileId) {
      id
      #to get the avt of all samples (eg. a sample = 1 day of records)
      # (we could compute this based on the Performance All query, but do we want to?)
      ProfilePerformanceReduced(from: $from, to: $to) {
        ...ProfileMetrics
      }
      #to get each sample from fromDate to toDate
      ProfilePerformance(from: $from, to: $to) {
        date
        ...ProfileMetrics
      }
      Campaigns(from: $from, to: $to) {
        id
        name
        #to get the average of all samples
        CampaignPerformanceReduced(from: $from, to: $to) {
          ...CampaignMetrics
        }
        #to get the delta from fromDate to toDate
        CampaignPerformanceDelta(from: $from, to: $to) {
          ...CampaignMetricsPercent
        }
      }
    }
  }
`;

const Overview = ({
  loading,
  performance,
  performanceTotal,
  campaignRows,
  handleDateRangeChange
}) => {
  return (
    <Page
      heading="Overview"
    >
      <PerformancePanel
        loading={loading}
        performance={performance}
        performanceTotal={performanceTotal}
        handleDateRangeChange={handleDateRangeChange}
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
  console.log('data', data);
  const {
    ProfilePerformance,
    ProfilePerformanceReduced,
    Campaigns,
  } = data.SellerProfile;

  //  Filter Dates have been fetched in the first request of this query
  //  fetch again with received filter dates
  if (data.variables.from === '19970101') {
    data.refetch({
      from: String(data.UserFilterDates.from),
      to: String(data.UserFilterDates.to),
    });
  }
  const campaignRows = reduceCampaignsRows(Campaigns);
  return {
    performanceTotal: ProfilePerformanceReduced,
    performance: ProfilePerformance,
    loading: false,
    handleDateRangeChange: data.refetch,
    campaignRows,
  };
});

export default compose(
  graphql(ACCOUNT_PERFORMANCE__CAMPAIGNS_QUERY, {
    options: {
      variables: {
        profileId: '2839110176393643',
        from: '19970101',
        to: '19970101',
      },
    },
  }),
  waitWhileLoading(Overview),
  transformProps,
)(Overview);
