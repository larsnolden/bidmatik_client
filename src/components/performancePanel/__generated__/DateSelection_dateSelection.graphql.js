/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DateSelection_dateSelection$ref: FragmentReference;
declare export opaque type DateSelection_dateSelection$fragmentType: DateSelection_dateSelection$ref;
export type DateSelection_dateSelection = {|
  +id: string,
  +from: any,
  +to: any,
  +$refType: DateSelection_dateSelection$ref,
|};
export type DateSelection_dateSelection$data = DateSelection_dateSelection;
export type DateSelection_dateSelection$key = {
  +$data?: DateSelection_dateSelection$data,
  +$fragmentRefs: DateSelection_dateSelection$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "DateSelection_dateSelection",
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
(node/*: any*/).hash = '51fb3cb3c14c3d8b403f1211fbcf7f37';
module.exports = node;
