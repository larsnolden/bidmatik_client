import React from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import Table from 'components/Table/Table';
import KeywordRow from './KeywordRow';
import { QUERY, ACOS, IMPRESSIONS, CLICKS, CTR, SPEND, REVENUE } from 'metricConstants';

const keywordsTableColumns = [QUERY, ACOS, IMPRESSIONS, CLICKS, CTR, SPEND, REVENUE];
const keywordTableColumnNames = keywordsTableColumns.map(column => column.displayName);

const KeywordRows = keywords =>
  keywords.map((keyword, index) => {
    const isStriped = index % 2 > 0;
    return <KeywordRow keyword={keyword} striped={isStriped} />;
  });

const KeywordTable = ({ keywords, loading, className }) => {
  console.log('keywords', keywords);
  return (
    <Table className={className} title="Keywords" columns={keywordTableColumnNames}>
      {!loading && KeywordRows(keywords)}
    </Table>
  );
};

export default createFragmentContainer(KeywordTable, {
  keywords: graphql`
    #<ComponentFileName>_<propName>
    fragment KeywordTable_keywords on Keyword @relay(plural: true) {
      ...KeywordRow_keyword
    }
  `
});
