import React from 'react';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import Table from 'components/Table/Table';
import Row from './CampaignRow';
import { formatPercentage, formatNumber } from 'helper/format';
import shortenString from 'helper/shortenString';

const CampaignTable = ({ campaigns, className, isLoading }) => {
  const columns = [
    {
      key: 'name',
      head: 'Name',
      sortable: true,
      type: String,
      format: x => shortenString(x, 25)
    },
    {
      key: 'acos',
      head: 'Acos',
      sortable: true,
      type: String,
      format: formatPercentage
    },
    {
      key: 'revenue',
      head: 'Revenue',
      sortable: true,
      format: formatNumber
    },
    {
      key: 'clicks',
      head: 'Clicks',
      sortable: true
    },
    {
      key: 'impressions',
      head: 'Impressions',
      sortable: true
    },
    {
      key: 'spend',
      head: 'Spend',
      sortable: true
    }
  ];

  return (
    <Table columns={columns} handleSortQuery={() => {}} className={className} isLoading={isLoading}>
      {!isLoading &&
        campaigns.map((campaign, i) => (
          <Row columns={columns} campaign={campaign} darkBg={i % 2 > 0} />
        ))}
    </Table>
  );
};

export default createRefetchContainer(CampaignTable, {
  campaigns: graphql`
    #<ComponentFileName>_<propName>
    fragment CampaignTable_campaigns on Campaign @relay(plural: true) {
      ...CampaignRow_campaign
    }
  `
});
