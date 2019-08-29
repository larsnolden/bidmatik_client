import React from 'react';
import propTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';

import Table from 'components/Table/Table';
import graphql from 'babel-plugin-relay/macro';
import {
  ACOS,
  CTR,
  REVENUE,
  CLICKS,
  IMPRESSIONS,
  SPEND,
} from 'metricConstants';
import CampaignRow from './CampaignRow';


const campaignTableColumns = [ACOS, IMPRESSIONS, CLICKS, CTR, SPEND, REVENUE];
const campaignTableColumnNames = campaignTableColumns.map(column => column.displayName);

const CampaignsTable = ({
  campaigns,
  loading
}) => (
  <Table
    title="Campaigns"
    columns={campaignTableColumnNames}
  >
    {
      loading ? <h1>loading</h1>
    : campaigns.map((campaign, index) => {
        const isStriped = index % 2 === 0;
        return (
          <CampaignRow
            campaign={campaign}
            striped={isStriped}
          />
        );
      })
    }
  </Table>
);

export default createFragmentContainer(
  CampaignsTable,
  {
    campaigns: graphql`
      #<ComponentFileName>_<propName>
      fragment CampaignsTable_campaigns on Campaign @relay(plural: true) {
       ...CampaignRow_campaign,
      }
    `,
  },
);

CampaignsTable.defaultProps = {
  columns: [''],
  rows: [{
    id: '0',
    columns: [{
      value: '$0',
      change: '0%',
    }]
  }],
  loading: true,
};

CampaignsTable.propTypes = {
  columns: propTypes.arrayOf(propTypes.string),
  rows: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string,
    columns: propTypes.arrayOf(propTypes.objectOf(propTypes.string)),
  })),
  loading: propTypes.bool,
};
