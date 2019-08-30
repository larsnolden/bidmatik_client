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
  +$refType: CampaignRow_campaign$ref,
|};
export type CampaignRow_campaign$data = CampaignRow_campaign;
export type CampaignRow_campaign$key = {
  +$data?: CampaignRow_campaign$data,
  +$fragmentRefs: CampaignRow_campaign$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
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
v1 = [
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
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "CampaignPerformanceReduced",
      "storageKey": null,
      "args": (v0/*: any*/),
      "concreteType": "Performance",
      "plural": false,
      "selections": (v1/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "CampaignPerformanceDelta",
      "storageKey": null,
      "args": (v0/*: any*/),
      "concreteType": "PerformancePercent",
      "plural": false,
      "selections": (v1/*: any*/)
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b5b94f324b1f4127092211ae062159a0';
module.exports = node;
