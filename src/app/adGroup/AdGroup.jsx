import React, { useState } from 'react';
import Page, { ActiveProfileIdContext } from 'components/page/Page';
import PerformancePanel from 'components/performancePanel/PerformancePanel';
import { QueryRenderer } from 'react-relay';
import environment from 'environment';
import graphql from 'babel-plugin-relay/macro';

const adGroupQuery = graphql`
  query AdGroupQuery($from: Date, $to: Date, $id: ID!) {
    UserFilterDates {
      ...DateSelection_userFilterDates
    }
    AdGroup(id: $id) {
      name
      AdGroupPerformanceReduced(from: $from, to: $to) {
        ...MetricSelector_performanceReduced
      }
      AdGroupPerformance(from: $from, to: $to) {
        ...PerformancePanel_performance
      }
      Keywords(from: $from, to: $to) {
        bid
        term
        id
      }
    }
  }
`;

const AdGroup = ({ adGroupId, activeProfileId }) => {
  const [filterDates, setFilterDates] = useState({
    from: null,
    to: null
  });

  console.log('adGroupId', adGroupId);

  return (
    <QueryRenderer
      environment={environment}
      query={adGroupQuery}
      variables={{
        id: adGroupId,
        profileId: activeProfileId,
        from: filterDates.from,
        to: filterDates.to
      }}
      render={({ error, props }) => {
        if (error) {
          console.log('Relay Error in overview', error);
          return <div>Error!</div>;
        }
        const loading = !props;
        if (loading) {
          return (
            <React.Fragment heading="Overview">
              <PerformancePanel loading={loading} />
            </React.Fragment>
          );
        }

        const {
          AdGroup: { AdGroupPerformance, AdGroupPerformanceReduced, Keywords },
          UserFilterDates
        } = props;

        return (
          <React.Fragment>
            <PerformancePanel
              handleUserFilterDatesChange={setFilterDates}
              userFilterDates={UserFilterDates}
              loading={loading}
              performance={AdGroupPerformance}
              performanceReduced={AdGroupPerformanceReduced}
            />
          </React.Fragment>
        );
      }}
    />
  );
};

//  wrap in Page to pass down the selected profile
export default ({ match }) => (
  <Page heading="AdGroupName">
    <ActiveProfileIdContext.Consumer>
      {/* {React Context Consumer wants a function as child  */}
      {profileId => <AdGroup activeProfileId={profileId} adGroupId={match.params.adGroupId} />}
    </ActiveProfileIdContext.Consumer>
  </Page>
);
