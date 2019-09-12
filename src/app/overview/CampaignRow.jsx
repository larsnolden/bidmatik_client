import React, { Fragment, useState } from 'react';
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

const AdGroupRow = ({
  name,
  id,
  performanceReduced,
  performanceDelta,
}) => {
  const adGroupColumns = campaignTableColumns.map(tColumn => ({
    value: tColumn.format(performanceReduced[tColumn.apiName]),
    //  don't display percent badge if change is 0
    change: performanceDelta[tColumn.apiName] * 100 !== 0
      ? formatPercentage(performanceDelta[tColumn.apiName], 0)
      : null,
  }));

  return (
    <Row
      name={name}
      type="AdGroup"
      onViewClickPath={`/adGroup/${id}`}
      striped
      columns={adGroupColumns}
    />
  );
};

const CampaignRow = ({
  campaign: {
    CampaignPerformanceReduced,
    CampaignPerformanceDelta,
    name,
    id,
    AdGroups,
    isStriped,
  }
}) => {
  const campaignColumns = campaignTableColumns.map(tColumn => ({
    value: tColumn.format(CampaignPerformanceReduced[tColumn.apiName]),
    //  don't display percent badge if change is 0
    change: CampaignPerformanceDelta[tColumn.apiName] * 100 !== 0
      ? formatPercentage(CampaignPerformanceDelta[tColumn.apiName], 0)
      : null,
  }));

  const [showAdGroups, setShowAdGroups] = useState(false);
  console.log('AdGroups', AdGroups);
  return (
    <Fragment>
      <Row
        name={name}
        type="Campaign"
        striped={isStriped}
        columns={campaignColumns}
        handleExpandClick={() => setShowAdGroups(!showAdGroups)}
        isExpanded={showAdGroups}
      />
      {showAdGroups && (
        AdGroups.map(adGroup => (
          <AdGroupRow
            name={adGroup.name}
            id={adGroup.id}
            performanceReduced={adGroup.AdGroupPerformanceReduced}
            performanceDelta={adGroup.AdGroupPerformanceDelta}
          />
        ))
      )}
    </Fragment>
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
        AdGroups {
          name
          id
          AdGroupPerformanceReduced(from: $from, to: $to) {
            acos
            impressions
            clicks
            ctr
            spend
            revenue
          }
          AdGroupPerformanceDelta(from: $from, to: $to) {
            acos
            impressions
            clicks
            ctr
            spend
            revenue
          }
        }
      }
    `,
  },
);
