/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Page from 'components/page/Page';
import PerformancePanel from 'components/performancePanel/PerformancePanel';
import {
  compose,
  withProps,
  branch,
  renderComponent,
} from 'recompose';

import CampaignsTable from './CampaignsTable';

import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import environment from 'environment';

export default class Overview extends React.Component {
  render() { 
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query OverviewQuery($profileId: ID!, $from: Date!, $to: Date!) {
            UserFilterDates {
              ...DateSelection_dateSelection,
            }
            SellerProfile(id: $profileId) {
              id
              #to get the avt of all samples (eg. a sample = 1 day of records)
              # (we could compute this based on the Performance All query, but do we want to?)
              ProfilePerformanceReduced(from: $from, to: $to) {
                ...MetricSelector_performanceReduced,
              }
              #to get each sample from fromDate to toDate
              ProfilePerformance(from: $from, to: $to) {
                ...PerformancePanel_performance,
              }
              Campaigns(from: $from, to: $to) {
                ...CampaignsTable_campaigns,
              }
            }
        }
      `}
        variables={{
          profileId: '2839110176393643',
          from: '20190501',
          to: '20190520',
        }}
        render={({ error, props }) => {
          console.log('overview received props', props)
          if (error) {
            console.log('Relay Error in overview', error);
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }

          //  TODO: implement mutation
          const handleDateRangeChange = () => { }
          const {
            SellerProfile: {
              ProfilePerformance,
              ProfilePerformanceReduced,
              Campaigns,
            },
          } = props;
          console.log('ProfilePerformance in Overview', ProfilePerformance);
          return (
            <Page
              heading="Overview"
            >
              <PerformancePanel
                loading={false}
                handleDateRangeChange={handleDateRangeChange}
                performance={ProfilePerformance}
                profilePerformanceReduced={ProfilePerformanceReduced}
              />
              <CampaignsTable
                campaigns={Campaigns}
              />
            </Page>
          );
        }}
      />
    )
  }
}