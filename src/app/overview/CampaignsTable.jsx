import React from 'react';

import Table from 'components/Table/Table';
import Row from 'components/Table/Row';

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
          id={row.id}
        />
      );
    })}
  </Table>
);

export default CampaignsTable;
