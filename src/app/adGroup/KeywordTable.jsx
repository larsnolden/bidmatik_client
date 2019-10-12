import React from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import Table from 'components/Table/Table';
import KeywordRow from './KeywordRow';
import shortenString from 'helper/shortenString';
import { formatPercentage, formatNumber } from 'helper/format';

const keywordColumns = [
  {
    key: 'term',
    head: 'Query',
    sortable: true,
    type: String,
    format: x => shortenString(x, 25)
  },
  {
    key: 'matchType',
    head: 'Match Type',
    sortable: true,
    type: String,
    format: x => x
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
  },
  {
    key: 'bid',
    head: 'Bid',
    sortable: true,
    format: formatNumber
  }
];

const KeywordTable = ({ keywords, isLoading, className }) => (
  <Table
    columns={keywordColumns}
    handleSortQuery={() => null}
    className={className}
    isLoading={isLoading}
  >
    {!isLoading &&
      keywords.map((keyword, i) => (
        <KeywordRow
          key={keyword.id}
          columns={keywordColumns}
          keyword={keyword}
          darkBg={i % 2 > 0}
        />
      ))}
  </Table>
);

export default createFragmentContainer(KeywordTable, {
  keywords: graphql`
    #<ComponentFileName>_<propName>
    fragment KeywordTable_keywords on Keyword @relay(plural: true) {
      id
      ...KeywordRow_keyword
    }
  `
});
