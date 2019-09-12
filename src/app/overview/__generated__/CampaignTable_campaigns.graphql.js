/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CampaignRow_campaign$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CampaignTable_campaigns$ref: FragmentReference;
declare export opaque type CampaignTable_campaigns$fragmentType: CampaignTable_campaigns$ref;
export type CampaignTable_campaigns = $ReadOnlyArray<{|
  +$fragmentRefs: CampaignRow_campaign$ref,
  +$refType: CampaignTable_campaigns$ref,
|}>;
export type CampaignTable_campaigns$data = CampaignTable_campaigns;
export type CampaignTable_campaigns$key = {
  +$data?: CampaignTable_campaigns$data,
  +$fragmentRefs: CampaignTable_campaigns$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CampaignTable_campaigns",
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
(node/*: any*/).hash = 'da7709050b498173565c72a1e52b00f2';
module.exports = node;
