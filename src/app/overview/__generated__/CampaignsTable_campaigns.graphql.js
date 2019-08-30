/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CampaignRow_campaign$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CampaignsTable_campaigns$ref: FragmentReference;
declare export opaque type CampaignsTable_campaigns$fragmentType: CampaignsTable_campaigns$ref;
export type CampaignsTable_campaigns = $ReadOnlyArray<{|
  +$fragmentRefs: CampaignRow_campaign$ref,
  +$refType: CampaignsTable_campaigns$ref,
|}>;
export type CampaignsTable_campaigns$data = CampaignsTable_campaigns;
export type CampaignsTable_campaigns$key = {
  +$data?: CampaignsTable_campaigns$data,
  +$fragmentRefs: CampaignsTable_campaigns$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CampaignsTable_campaigns",
  "type": "Campaign",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "CampaignRow_campaign",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '9e5e7119ab37d1bda828e9edbc94b049';
module.exports = node;
