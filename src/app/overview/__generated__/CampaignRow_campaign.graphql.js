/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CampaignRow_campaign$ref: FragmentReference;
declare export opaque type CampaignRow_campaign$fragmentType: CampaignRow_campaign$ref;
export type CampaignRow_campaign = {|
  +name: string,
  +id: string,
  +CampaignPerformanceReduced: ?{|
    +acos: ?number,
    +impressions: ?number,
    +clicks: ?number,
    +ctr: ?number,
    +spend: ?number,
    +revenue: ?number,
  |},
  +CampaignPerformanceDelta: ?{|
    +acos: ?number,
    +impressions: ?number,
    +clicks: ?number,
    +ctr: ?number,
    +spend: ?number,
    +revenue: ?number,
  |},
  +AdGroups: $ReadOnlyArray<?{|
    +name: string,
    +id: string,
    +AdGroupPerformanceReduced: ?{|
      +acos: ?number,
      +impressions: ?number,
      +clicks: ?number,
      +ctr: ?number,
      +spend: ?number,
      +revenue: ?number,
    |},
    +AdGroupPerformanceDelta: ?{|
      +acos: ?number,
      +impressions: ?number,
      +clicks: ?number,
      +ctr: ?number,
      +spend: ?number,
      +revenue: ?number,
    |},
  |}>,
  +$refType: CampaignRow_campaign$ref,
|};
export type CampaignRow_campaign$data = CampaignRow_campaign;
export type CampaignRow_campaign$key = {
  +$data?: CampaignRow_campaign$data,
  +$fragmentRefs: CampaignRow_campaign$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
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
v3 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "acos",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "impressions",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "clicks",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "ctr",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "spend",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "revenue",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "CampaignRow_campaign",
  "type": "Campaign",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "from",
      "type": "Date"
    },
    {
      "kind": "RootArgument",
      "name": "to",
      "type": "Date"
    }
  ],
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "CampaignPerformanceReduced",
      "storageKey": null,
      "args": (v2/*: any*/),
      "concreteType": "Performance",
      "plural": false,
      "selections": (v3/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "CampaignPerformanceDelta",
      "storageKey": null,
      "args": (v2/*: any*/),
      "concreteType": "PerformancePercent",
      "plural": false,
      "selections": (v3/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "AdGroups",
      "storageKey": null,
      "args": null,
      "concreteType": "AdGroup",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "AdGroupPerformanceReduced",
          "storageKey": null,
          "args": (v2/*: any*/),
          "concreteType": "Performance",
          "plural": false,
          "selections": (v3/*: any*/)
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "AdGroupPerformanceDelta",
          "storageKey": null,
          "args": (v2/*: any*/),
          "concreteType": "PerformancePercent",
          "plural": false,
          "selections": (v3/*: any*/)
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '0c3f2b400ea59ec2939b7f8b9b25ae77';
module.exports = node;
