/* eslint-disable react/prefer-stateless-function */
import React, { useState, Fragment }from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import environment from 'environment';

import Page, { ActiveProfileIdContext }  from 'components/page/Page';
import PerformancePanel from 'components/performancePanel/PerformancePanel';
import CampaignsTable from './CampaignsTable';


const Overview = ({
  activeProfileId
}) => {
  console.log('activeProfileId', activeProfileId);
  const [filterDates, setFilterDates] = useState({
    from: null,
    to: null,
  });

  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query OverviewQuery($profileId: ID, $from: Date, $to: Date) {
          UserFilterDates {
            ...DateSelection_userFilterDates,
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
        profileId: activeProfileId,
        from: filterDates.from,
        to: filterDates.to,
      }}
      render={({ error, props }) => {
        if (error) {
          console.log('Relay Error in overview', error);
          return <div>Error!</div>;
        }
        const loading = !props;
        if (loading) {
          return (
            <Fragment
              heading="Overview"
            >
              <PerformancePanel
                loading={loading}
              />
              <CampaignsTable
                loading={loading}
              />
            </Fragment>
          );
        }

        const {
          SellerProfile: {
            ProfilePerformance,
            ProfilePerformanceReduced,
            Campaigns,
          },
          UserFilterDates,
        } = props;
        return (
          <Fragment>
            <PerformancePanel
              handleUserFilterDatesChange={setFilterDates}
              userFilterDates={UserFilterDates}
              loading={loading}
              performance={ProfilePerformance}
              performanceReduced={ProfilePerformanceReduced}
            />
            <CampaignsTable
              loading={loading}
              campaigns={Campaigns}
            />
          </Fragment>
        );
      }}
    />
  );
};


//  wrap in Page to pass down the selected profile
export default () => (
  <Page
    heading="Overview"
  >
    <ActiveProfileIdContext.Consumer>
      {/* {React Context Consumer wants a function as child  */}
      {profileId => <Overview activeProfileId={profileId} />}
    </ActiveProfileIdContext.Consumer>
  </Page>
);
