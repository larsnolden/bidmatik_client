/**
 * @flow
 * @relayHash c8cd3131220203a946470c25d37fa001
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DateSelection_userFilterDates$ref = any;
type KeywordTable_keywords$ref = any;
type MetricSelector_performanceReduced$ref = any;
type PerformancePanel_performance$ref = any;
export type AdGroupQueryVariables = {|
  from?: ?any,
  to?: ?any,
  id: string,
|};
export type AdGroupQueryResponse = {|
  +UserFilterDates: ?{|
    +$fragmentRefs: DateSelection_userFilterDates$ref
  |},
  +AdGroup: ?{|
    +name: string,
    +AdGroupPerformanceReduced: ?{|
      +$fragmentRefs: MetricSelector_performanceReduced$ref
    |},
    +AdGroupPerformance: ?$ReadOnlyArray<?{|
      +$fragmentRefs: PerformancePanel_performance$ref
    |}>,
    +Keywords: $ReadOnlyArray<?{|
      +$fragmentRefs: KeywordTable_keywords$ref
    |}>,
  |},
|};
export type AdGroupQuery = {|
  variables: AdGroupQueryVariables,
  response: AdGroupQueryResponse,
|};
*/


/*
query AdGroupQuery(
  $from: Date
  $to: Date
  $id: ID!
) {
  UserFilterDates {
    ...DateSelection_userFilterDates
    id
  }
  AdGroup(id: $id) {
    name
    AdGroupPerformanceReduced(from: $from, to: $to) {
      ...MetricSelector_performanceReduced
    }
    AdGroupPerformance(from: $from, to: $to) {
      ...PerformancePanel_performance
    }
    Keywords(from: $from, to: $to) {
      ...KeywordTable_keywords
      id
    }
    id
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

fragment KeywordTable_keywords on Keyword {
  ...KeywordRow_keyword
}

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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
  },
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "acos",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "revenue",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "clicks",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "spend",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "absoluteAcos",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "absoluteRevenue",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "impressions",
  "args": null,
  "storageKey": null
},
v12 = [
  (v5/*: any*/),
  (v11/*: any*/),
  (v7/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "ctr",
    "args": null,
    "storageKey": null
  },
  (v8/*: any*/),
  (v6/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AdGroupQuery",
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
        "name": "AdGroup",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "AdGroup",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "AdGroupPerformanceReduced",
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
            "name": "AdGroupPerformance",
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
            "name": "Keywords",
            "storageKey": null,
            "args": (v3/*: any*/),
            "concreteType": "Keyword",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "KeywordTable_keywords",
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
    "name": "AdGroupQuery",
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
          (v4/*: any*/),
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
        "name": "AdGroup",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "AdGroup",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "AdGroupPerformanceReduced",
            "storageKey": null,
            "args": (v3/*: any*/),
            "concreteType": "Performance",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "AdGroupPerformance",
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
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "Keywords",
            "storageKey": null,
            "args": (v3/*: any*/),
            "concreteType": "Keyword",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "term",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "bid",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "matchType",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "KeywordPerformanceDelta",
                "storageKey": null,
                "args": (v3/*: any*/),
                "concreteType": "PerformancePercent",
                "plural": false,
                "selections": (v12/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "KeywordPerformanceReduced",
                "storageKey": null,
                "args": (v3/*: any*/),
                "concreteType": "Performance",
                "plural": false,
                "selections": (v12/*: any*/)
              }
            ]
          },
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AdGroupQuery",
    "id": null,
    "text": "query AdGroupQuery(\n  $from: Date\n  $to: Date\n  $id: ID!\n) {\n  UserFilterDates {\n    ...DateSelection_userFilterDates\n    id\n  }\n  AdGroup(id: $id) {\n    name\n    AdGroupPerformanceReduced(from: $from, to: $to) {\n      ...MetricSelector_performanceReduced\n    }\n    AdGroupPerformance(from: $from, to: $to) {\n      ...PerformancePanel_performance\n    }\n    Keywords(from: $from, to: $to) {\n      ...KeywordTable_keywords\n      id\n    }\n    id\n  }\n}\n\nfragment DateSelection_userFilterDates on UserFilterDates {\n  id\n  from\n  to\n}\n\nfragment MetricSelector_performanceReduced on Performance {\n  acos\n  revenue\n  clicks\n  spend\n  absoluteAcos\n  absoluteRevenue\n  impressions\n}\n\nfragment PerformancePanel_performance on Performance {\n  date\n  acos\n  revenue\n  clicks\n  spend\n  absoluteAcos\n  absoluteRevenue\n  impressions\n}\n\nfragment KeywordTable_keywords on Keyword {\n  ...KeywordRow_keyword\n}\n\nfragment KeywordRow_keyword on Keyword {\n  id\n  term\n  bid\n  matchType\n  KeywordPerformanceDelta(from: $from, to: $to) {\n    acos\n    impressions\n    clicks\n    ctr\n    spend\n    revenue\n  }\n  KeywordPerformanceReduced(from: $from, to: $to) {\n    acos\n    impressions\n    clicks\n    ctr\n    spend\n    revenue\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7f4a0bdea146f7a1ddb636ddb892d207';
module.exports = node;
