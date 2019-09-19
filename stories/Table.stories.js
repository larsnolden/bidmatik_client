import React from 'react';
import { action } from '@storybook/addon-actions';
import Table from '../src/components/Table/Table';
// import TableKeywords from '../src/components/Table/TableKeywords';
import TableCampaigns from '../src/components/Table/TableCampaigns';
import { BrowserRouter as Router } from 'react-router-dom';

import { keywords, campaigns } from './mockData/tableMock';
import Chevron from 'components/Chevron';
import styled from '@emotion/styled';

// export const requirements = () => (
//   <ul>
//     <li>As a user I want to make a column expandable</li>

//     <li>As a user I want some way to specify the rows children rows</li>

//     <li>As a user I want to specify if the row has a view link, and if so what it is</li>

//     <li>As a user I want custom cell rendering with multiple values</li>

//     <li>As a user I want to easily switch the row and cell design</li>

//     <li>As a user I want pagination events</li>

//     <li>As a user I want sorting events</li>

//     <li>As a user I want to specify filter options for each column (data type,sortable)</li>
//   </ul>
// );

const DemoClick = styled.div`
  background: #aaa;
  height: 10px;
  width: 10px;
`;

const columns = [
  {
    //   render has access to the rows data
    render: ({ toggleIsExpanded, isExpanded }) => (
      <Chevron
        pointDown={!isExpanded}
        color="#aaa"
        width="15"
        height="15"
        onClick={toggleIsExpanded}
      />
    ),
    childRender: ({ id }) => <a href={`campaign${id}`}>view</a>,
    head: null,
    width: '50px'
  },
  {
    key: 'bid',
    head: 'Bid',
    sortable: true
  },
  {
    key: 'term',
    head: 'Query',
    sortable: true
  },
  {
    key: 'matchType',
    head: 'Match Type',
    sortable: true
  }
];

export const table = () => <Table columns={columns} data={keywords} />;

export default {
  title: 'Table'
};

const campaignColumns = [
  {
    key: 'name',
    head: 'Name',
    sortable: true,
    type: String
  },
  {
    key: 'acos',
    head: 'Acos',
    sortable: true,
    type: String
  },
  {
    key: 'revenue',
    head: 'Revenue',
    sortable: true
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

const campaignsData = campaigns.map(campaign => ({
  ...campaign,
  ...campaign.CampaignPerformanceReduced,
  change: campaign.CampaignPerformanceDelta,
  children: campaign.AdGroups.map(adGroup => ({
    ...adGroup,
    ...adGroup.AdGroupPerformanceReduced
  }))
}));

export const tableCampaign = () => (
  <Router>
    <TableCampaigns columns={campaignColumns} data={campaignsData} />
  </Router>
);
