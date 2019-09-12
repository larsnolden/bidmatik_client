import React from 'react';
import propTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import Table from 'components/Table/Table';
import { ACOS, CTR, REVENUE, CLICKS, IMPRESSIONS, SPEND } from 'metricConstants';
import CampaignRow from './CampaignRow';

const campaignTableColumns = [ACOS, IMPRESSIONS, CLICKS, CTR, SPEND, REVENUE];
const campaignTableColumnNames = campaignTableColumns.map(column => column.displayName);

const CampaignRows = campaigns =>
  campaigns.map((campaign, index) => {
    const isStriped = index % 2 > 0;
    return <CampaignRow campaign={campaign} striped={isStriped} />;
  });

const CampaignsTable = ({ campaigns, loading, className }) => (
  <Table className={className} title="Campaigns" columns={campaignTableColumnNames}>
    {!loading && CampaignRows(campaigns)}
  </Table>
);

export default createFragmentContainer(CampaignsTable, {
  campaigns: graphql`
    #<ComponentFileName>_<propName>
    fragment CampaignTable_campaigns on Campaign @relay(plural: true) {
      ...CampaignRow_campaign
    }
  `
});

CampaignsTable.defaultProps = {
  columns: [''],
  rows: [
    {
      id: '0',
      columns: [
        {
          value: '$0',
          change: '0%'
        }
      ]
    }
  ],
  loading: true
};

CampaignsTable.propTypes = {
  columns: propTypes.arrayOf(propTypes.string),
  rows: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      columns: propTypes.arrayOf(propTypes.objectOf(propTypes.string))
    })
  ),
  loading: propTypes.bool
};
