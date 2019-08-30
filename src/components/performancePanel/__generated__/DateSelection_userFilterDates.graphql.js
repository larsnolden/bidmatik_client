/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DateSelection_userFilterDates$ref: FragmentReference;
declare export opaque type DateSelection_userFilterDates$fragmentType: DateSelection_userFilterDates$ref;
export type DateSelection_userFilterDates = {|
  +id: string,
  +from: any,
  +to: any,
  +$refType: DateSelection_userFilterDates$ref,
|};
export type DateSelection_userFilterDates$data = DateSelection_userFilterDates;
export type DateSelection_userFilterDates$key = {
  +$data?: DateSelection_userFilterDates$data,
  +$fragmentRefs: DateSelection_userFilterDates$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "DateSelection_userFilterDates",
  "type": "UserFilterDates",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
};
// prettier-ignore
(node/*: any*/).hash = '05a308b0f69e779ce95cac1f66852a85';
module.exports = node;
