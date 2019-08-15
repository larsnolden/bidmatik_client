import React from 'react';
import gql from 'graphql-tag';

import Table from 'components/Table/Table';
import Row from 'components/Table/Row';

const demoRow = {
  id: Math.random(1, 200),
  columns: [{
    value: 'Name of the Campaign',
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

const CampaignsTable = ({
  columns,
  rows,
  loading
}) => (
  <Table
    title="Campaigns"
    columns={columns}
  >
    {!loading && rows && rows.map((row, index) => {
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

export default CampaignsTable;
