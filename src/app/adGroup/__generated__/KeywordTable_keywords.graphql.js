/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type MatchType = "broad" | "exact" | "phrase" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type KeywordTable_keywords$ref: FragmentReference;
declare export opaque type KeywordTable_keywords$fragmentType: KeywordTable_keywords$ref;
export type KeywordTable_keywords = $ReadOnlyArray<{|
  +id: string,
  +term: string,
  +bid: number,
  +matchType: MatchType,
  +KeywordPerformanceDelta: ?{|
    +acos: ?number,
    +impressions: ?number,
    +clicks: ?number,
    +ctr: ?number,
    +spend: ?number,
    +revenue: ?number,
  |},
  +KeywordPerformanceReduced: ?{|
    +acos: ?number,
    +impressions: ?number,
    +clicks: ?number,
    +ctr: ?number,
    +spend: ?number,
    +revenue: ?number,
  |},
  +$refType: KeywordTable_keywords$ref,
|}>;
export type KeywordTable_keywords$data = KeywordTable_keywords;
export type KeywordTable_keywords$key = {
  +$data?: KeywordTable_keywords$data,
  +$fragmentRefs: KeywordTable_keywords$ref,
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
  "name": "KeywordTable_keywords",
  "type": "Keyword",
  "metadata": {
    "plural": true
  },
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
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
      "args": (v0/*: any*/),
      "concreteType": "PerformancePercent",
      "plural": false,
      "selections": (v1/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "KeywordPerformanceReduced",
      "storageKey": null,
      "args": (v0/*: any*/),
      "concreteType": "Performance",
      "plural": false,
      "selections": (v1/*: any*/)
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '08270ced343754e3db89cc42f232e5b1';
module.exports = node;
