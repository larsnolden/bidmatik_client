import React, { useState } from 'react';
import Page from 'components/page/Page';
import { connect } from 'react-redux';
import PerformancePanel from 'components/performancePanel/PerformancePanel';
import { QueryRenderer } from 'react-relay';
import environment from 'environment';
import graphql from 'babel-plugin-relay/macro';
import { setPageContext } from 'redux/pageActions';
import styled from '@emotion/styled';

import KeywordTable from './KeywordTable';

const KeywordTableStyled = styled(KeywordTable)`
  margin-top: 60px;
`;

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
        ...KeywordTable_keywords
      }
    }
  }
`;

const AdGroupComponent = ({ adGroupId, activeProfileId, setPageContext }) => {
  //  page names is null while loading
  setPageContext({
    pageName: 'AdGroup',
    isLoading: true
  });

  const [filterDates, setFilterDates] = useState({
    from: null,
    to: null
  });

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
            <React.Fragment>
              <PerformancePanel loading={loading} />
              <KeywordTableStyled keyword={null} isLoading={loading} />
            </React.Fragment>
          );
        }

        const {
          AdGroup: { name, AdGroupPerformance, AdGroupPerformanceReduced, Keywords },
          UserFilterDates
        } = props;

        setPageContext({
          pageName: name,
          isLoading: false
        });

        return (
          <React.Fragment>
            <PerformancePanel
              handleUserFilterDatesChange={setFilterDates}
              userFilterDates={UserFilterDates}
              loading={loading}
              performance={AdGroupPerformance}
              performanceReduced={AdGroupPerformanceReduced}
            />
            <KeywordTableStyled keywords={Keywords} isLoading={loading} />
          </React.Fragment>
        );
      }}
    />
  );
};

const mapStateToProps = state => ({
  profileId: state.activeProfileId
});

const mapDispatchToProps = dispatch => ({
  setPageContext: ({ pageName, isLoading }) => dispatch(setPageContext({ pageName, isLoading }))
});

const AdGroup = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdGroupComponent);

//  wrap in Page to pass down the selected profile
export default ({ match }) => (
  <Page>
    <AdGroup adGroupId={match.params.adGroupId} />
  </Page>
);
