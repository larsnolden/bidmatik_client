import React from 'react';
import graphql from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import Row from 'components/Table/Row';

import {
  ACOS,
  REVENUE,
  CLICKS,
  IMPRESSIONS,
  SPEND,
  CTR,
} from 'metricConstants';
import {
  formatPercentage,
} from 'helper/format';


const campaignTableColumns = [ACOS, IMPRESSIONS, CLICKS, CTR, SPEND, REVENUE];

const CampaignRow = ({
  campaign: {
    CampaignPerformanceReduced,
    CampaignPerformanceDelta,
    name,
    id,
    isStriped
  }
}) => {
    const columns = campaignTableColumns.map(tColumn => ({
    value: tColumn.format(CampaignPerformanceReduced[tColumn.apiName]),
    //  don't display percent badge if change is 0
    change:
      CampaignPerformanceDelta[tColumn.apiName] * 100 !== 0
        ? formatPercentage(CampaignPerformanceDelta[tColumn.apiName] * 100, 0)
        : null,
  }));
  return (
    <Row
      name={name}
      onViewClickPath={`/campaign/${id}`}
      striped={isStriped}
      columns={columns}
    />
  );
};

export default createFragmentContainer(
  CampaignRow,
  {
    campaign: graphql`
      #<ComponentFileName>_<propName>
      fragment CampaignRow_campaign on Campaign {
        name
        id
        CampaignPerformanceReduced(from: $from, to: $to) {
          acos
          impressions
          clicks
          ctr
          spend
          revenue
        }
        CampaignPerformanceDelta(from: $from, to: $to) {
          acos
          impressions
          clicks
          ctr
          spend
          revenue
        }
      }
    `,
  }
);
