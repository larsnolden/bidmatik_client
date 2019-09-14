import React from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import Table from 'components/table/Table';
// import { QUERY, ACOS, IMPRESSIONS, CLICKS, CTR, SPEND, REVENUE } from 'metricConstants';

// const keywordsTableColumns = [QUERY, ACOS, IMPRESSIONS, CLICKS, CTR, SPEND, REVENUE];
// const keywordTableColumnNames = keywordsTableColumns.map(column => column.displayName);

// const KeywordRows = keywords =>
//   keywords.map((keyword, index) => {
//     const isStriped = index % 2 > 0;
//     return <KeywordRow keyword={keyword} striped={isStriped} />;
//   });

// const KeywordTable = ({ keywords, loading, className }) => {
//   console.log('keywords', keywords);
//   return (
//     <Table className={className} title="Keywords" columns={keywordTableColumnNames}>
//       {!loading && KeywordRows(keywords)}
//     </Table>
//   );
// };

const KeywordTableColumns = [
  {
    Header: 'Query',
    accessor: 'term'
  },
  {
    Header: 'ACOS',
    accessor: 'acos'
  },
  {
    Header: ' Impressions',
    accessor: 'impressions'
  },
  {
    Header: 'Clicks',
    accessor: 'clicks'
  },
  {
    Header: 'CTR',
    accessor: 'ctr'
  },
  {
    Header: 'Spend',
    accessor: 'spend'
  },
  {
    Header: 'Revenue',
    accessor: 'revenue'
  }
];

function KeywordTable({ keywords }) {
  // const data = keywords.map(keyword => ({
  //   ...keyword.KeywordPerformanceReduced,
  //   term: keyword.term
  // }));
  const data = keywords.map(keyword => ({
    ...Object.entries(keyword.KeywordPerformanceReduced).map((k, v) => ({
      [k]: {
        value: v,
        delta: keyword.KeywordPerformanceDelta[k]
      }
    })),
    term: keyword.term
  }));
  // const { KeywordPerformanceReduced, term } = keywords;
  // const data = { ...KeywordPerformanceReduced, term };
  console.log('KeywordTable', keywords, data);
  return <Table columns={KeywordTableColumns} data={data} />;
}

export default createFragmentContainer(KeywordTable, {
  keywords: graphql`
    #<ComponentFileName>_<propName>
    fragment KeywordTable_keywords on Keyword @relay(plural: true) {
      id
      term
      bid
      matchType
      KeywordPerformanceDelta(from: $from, to: $to) {
        acos
        impressions
        clicks
        ctr
        spend
        revenue
      }
      KeywordPerformanceReduced(from: $from, to: $to) {
        acos
        impressions
        clicks
        ctr
        spend
        revenue
      }
    }
  `
});
