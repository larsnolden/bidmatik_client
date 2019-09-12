import React, { Fragment, useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import Row from 'components/Table/Row';

import { ACOS, REVENUE, CLICKS, IMPRESSIONS, SPEND, CTR } from 'metricConstants';
import { formatPercentage } from 'helper/format';

const keywordsTableColumns = [ACOS, IMPRESSIONS, CLICKS, CTR, SPEND, REVENUE];

const KeywordRow = ({
  keyword: { id, term, bid, matchType, KeywordPerformanceDelta, KeywordPerformanceReduced },
  striped
}) => {
  const keywordColumns = keywordsTableColumns.map(tColumn => ({
    value: tColumn.format(KeywordPerformanceReduced[tColumn.apiName]),
    //  don't display percent badge if change is 0
    change:
      KeywordPerformanceDelta[tColumn.apiName] * 100 !== 0
        ? formatPercentage(KeywordPerformanceDelta[tColumn.apiName], 0)
        : null
  }));

  return <Row name={term} type={matchType} striped={striped} columns={keywordColumns} />;
};

export default createFragmentContainer(KeywordRow, {
  keyword: graphql`
    fragment KeywordRow_keyword on Keyword {
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
