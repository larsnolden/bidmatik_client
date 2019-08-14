import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';

import Table from 'components/Table/Table';
import Row from 'components/Table/Row';


const CAMPAIGNS_QUERY = gql`
  query performance_and_campaigns($from: Date, $to: Date){
    campaigns(from:$from, to: $to) {
      id
      name
      type
      targeting
      budget
      impressions
      clicks
      ctr
      spend
      cpc
      orders
      revenue
      acos
      portfolio
    }
  }
`;

const demoColumns = ['Acos', 'Total Acos', 'Revenue', 'Clicks', 'Impressions', 'Spend']

const demoRow = {
  id: Math.random(1, 200),
  columns: [{
    value: 'Name of the Campaigns',
  },
  {
    value: '10%',
    change: 21,
  },
  {
    value: '7%',
    change: -12,
  },
  {
    value: '$1.231',
    change: -12,
  },
  {
    value: 1000,
    change: 2,
  },
  {
    value: 100,
    change: 212,
  },
  {
    value: '$124',
    change: -134,
  }],
};
const demoRows = [demoRow, demoRow, demoRow];

const Campaigns = () => (
  <Table
    title="Campaigns"
    columns={demoColumns}
  >
    {demoRows.map((row, index) => {
      const isStriped = index % 2 === 0;
      return (
        <Row
          striped={isStriped}
          columns={row.columns}
        />
      );
    })}
  </Table>
);

export default graphql(CAMPAIGNS_QUERY, {
  options: {
    variables: {
      from: moment(moment.now()).subtract(60, 'days'),
      to: moment(moment.now()),
    },
  },
})(Campaigns);
