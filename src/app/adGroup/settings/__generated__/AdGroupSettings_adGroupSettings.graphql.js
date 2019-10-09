/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AdGroupSettings_adGroupSettings$ref: FragmentReference;
declare export opaque type AdGroupSettings_adGroupSettings$fragmentType: AdGroupSettings_adGroupSettings$ref;
export type AdGroupSettings_adGroupSettings = {|
  +dailyBudget: ?number,
  +updateBids: boolean,
  +targetAcos: ?number,
  +addKeywords: boolean,
  +addNegativeKeywords: boolean,
  +$refType: AdGroupSettings_adGroupSettings$ref,
|};
export type AdGroupSettings_adGroupSettings$data = AdGroupSettings_adGroupSettings;
export type AdGroupSettings_adGroupSettings$key = {
  +$data?: AdGroupSettings_adGroupSettings$data,
  +$fragmentRefs: AdGroupSettings_adGroupSettings$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AdGroupSettings_adGroupSettings",
  "type": "adGroupSettings",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "dailyBudget",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "updateBids",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "targetAcos",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "addKeywords",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "addNegativeKeywords",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd1d9f1e9b7192d1b05c374edcbe044e2';
module.exports = node;
