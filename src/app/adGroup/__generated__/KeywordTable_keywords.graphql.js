/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type KeywordRow_keyword$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type KeywordTable_keywords$ref: FragmentReference;
declare export opaque type KeywordTable_keywords$fragmentType: KeywordTable_keywords$ref;
export type KeywordTable_keywords = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: KeywordRow_keyword$ref,
  +$refType: KeywordTable_keywords$ref,
|}>;
export type KeywordTable_keywords$data = KeywordTable_keywords;
export type KeywordTable_keywords$key = {
  +$data?: KeywordTable_keywords$data,
  +$fragmentRefs: KeywordTable_keywords$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "KeywordTable_keywords",
  "type": "Keyword",
  "metadata": {
    "plural": true
  },
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
      "kind": "FragmentSpread",
      "name": "KeywordRow_keyword",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '35eef2e52c5ed6aa07d1e72f3e5f8f5e';
module.exports = node;
