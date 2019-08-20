import React from 'react';
import propTypes from 'prop-types';

import Table from 'components/Table/Table';
import Row from 'components/Table/Row';


const CampaignsTable = ({
  columns,
  rows,
  loading,
}) => (
  <Table
    title="Campaigns"
    columns={columns}
  >
    {!loading && rows && rows.map((row, index) => {
      const isStriped = index % 2 === 0;
      return (
        <Row
          key={row.id}
          striped={isStriped}
          columns={row.columns}
          id={row.id}
        />
      );
    })}
  </Table>
);

export default CampaignsTable;

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
