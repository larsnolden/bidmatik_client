/**
 * @flow
 * @relayHash 6457723ce853a7ea3d8a2f936e23494e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CampaignsTable_campaigns$ref = any;
type DateSelection_userFilterDates$ref = any;
type MetricSelector_performanceReduced$ref = any;
type PerformancePanel_performance$ref = any;
export type OverviewQueryVariables = {|
  profileId: string,
  from?: ?any,
  to?: ?any,
|};
export type OverviewQueryResponse = {|
  +UserFilterDates: ?{|
    +$fragmentRefs: DateSelection_userFilterDates$ref
  |},
  +SellerProfile: {|
    +id: string,
    +ProfilePerformanceReduced: {|
      +$fragmentRefs: MetricSelector_performanceReduced$ref
    |},
    +ProfilePerformance: $ReadOnlyArray<?{|
      +$fragmentRefs: PerformancePanel_performance$ref
    |}>,
    +Campaigns: $ReadOnlyArray<?{|
      +$fragmentRefs: CampaignsTable_campaigns$ref
    |}>,
  |},
|};
export type OverviewQuery = {|
  variables: OverviewQueryVariables,
  response: OverviewQueryResponse,
|};
*/


/*
query OverviewQuery(
  $profileId: ID!
  $from: Date
  $to: Date
) {
  UserFilterDates {
    ...DateSelection_userFilterDates
    id
  }
  SellerProfile(id: $profileId) {
    id
    ProfilePerformanceReduced(from: $from, to: $to) {
      ...MetricSelector_performanceReduced
    }
    ProfilePerformance(from: $from, to: $to) {
      ...PerformancePanel_performance
    }
    Campaigns(from: $from, to: $to) {
      ...CampaignsTable_campaigns
      id
    }
  }
}

fragment DateSelection_userFilterDates on UserFilterDates {
  id
  from
  to
}

fragment MetricSelector_performanceReduced on Performance {
  acos
  revenue
  clicks
  spend
  absoluteAcos
  absoluteRevenue
  impressions
}

fragment PerformancePanel_performance on Performance {
  date
  acos
  revenue
  clicks
  spend
  absoluteAcos
  absoluteRevenue
  impressions
}

fragment CampaignsTable_campaigns on Campaign {
  ...CampaignRow_campaign
}

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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "profileId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "from",
    "type": "Date",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "to",
    "type": "Date",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "profileId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "Variable",
    "name": "from",
    "variableName": "from"
  },
  {
    "kind": "Variable",
    "name": "to",
    "variableName": "to"
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "acos",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "revenue",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "clicks",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "spend",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "absoluteAcos",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "absoluteRevenue",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "impressions",
  "args": null,
  "storageKey": null
},
v11 = [
  (v4/*: any*/),
  (v10/*: any*/),
  (v6/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "ctr",
    "args": null,
    "storageKey": null
  },
  (v7/*: any*/),
  (v5/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "OverviewQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "UserFilterDates",
        "storageKey": null,
        "args": null,
        "concreteType": "UserFilterDates",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "DateSelection_userFilterDates",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "SellerProfile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "SellerProfile",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "ProfilePerformanceReduced",
            "storageKey": null,
            "args": (v3/*: any*/),
            "concreteType": "Performance",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "MetricSelector_performanceReduced",
                "args": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "ProfilePerformance",
            "storageKey": null,
            "args": (v3/*: any*/),
            "concreteType": "Performance",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "PerformancePanel_performance",
                "args": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "Campaigns",
            "storageKey": null,
            "args": (v3/*: any*/),
            "concreteType": "Campaign",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "CampaignsTable_campaigns",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OverviewQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "UserFilterDates",
        "storageKey": null,
        "args": null,
        "concreteType": "UserFilterDates",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "from",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "to",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "SellerProfile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "SellerProfile",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "ProfilePerformanceReduced",
            "storageKey": null,
            "args": (v3/*: any*/),
            "concreteType": "Performance",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "ProfilePerformance",
            "storageKey": null,
            "args": (v3/*: any*/),
            "concreteType": "Performance",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "date",
                "args": null,
                "storageKey": null
              },
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "Campaigns",
            "storageKey": null,
            "args": (v3/*: any*/),
            "concreteType": "Campaign",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "CampaignPerformanceReduced",
                "storageKey": null,
                "args": (v3/*: any*/),
                "concreteType": "Performance",
                "plural": false,
                "selections": (v11/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "CampaignPerformanceDelta",
                "storageKey": null,
                "args": (v3/*: any*/),
                "concreteType": "PerformancePercent",
                "plural": false,
                "selections": (v11/*: any*/)
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "OverviewQuery",
    "id": null,
    "text": "query OverviewQuery(\n  $profileId: ID!\n  $from: Date\n  $to: Date\n) {\n  UserFilterDates {\n    ...DateSelection_userFilterDates\n    id\n  }\n  SellerProfile(id: $profileId) {\n    id\n    ProfilePerformanceReduced(from: $from, to: $to) {\n      ...MetricSelector_performanceReduced\n    }\n    ProfilePerformance(from: $from, to: $to) {\n      ...PerformancePanel_performance\n    }\n    Campaigns(from: $from, to: $to) {\n      ...CampaignsTable_campaigns\n      id\n    }\n  }\n}\n\nfragment DateSelection_userFilterDates on UserFilterDates {\n  id\n  from\n  to\n}\n\nfragment MetricSelector_performanceReduced on Performance {\n  acos\n  revenue\n  clicks\n  spend\n  absoluteAcos\n  absoluteRevenue\n  impressions\n}\n\nfragment PerformancePanel_performance on Performance {\n  date\n  acos\n  revenue\n  clicks\n  spend\n  absoluteAcos\n  absoluteRevenue\n  impressions\n}\n\nfragment CampaignsTable_campaigns on Campaign {\n  ...CampaignRow_campaign\n}\n\nfragment CampaignRow_campaign on Campaign {\n  name\n  id\n  CampaignPerformanceReduced(from: $from, to: $to) {\n    acos\n    impressions\n    clicks\n    ctr\n    spend\n    revenue\n  }\n  CampaignPerformanceDelta(from: $from, to: $to) {\n    acos\n    impressions\n    clicks\n    ctr\n    spend\n    revenue\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4cbf442024aca082546228da4589c99c';
module.exports = node;
