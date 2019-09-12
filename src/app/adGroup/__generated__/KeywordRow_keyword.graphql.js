/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type MatchType = "broad" | "exact" | "phrase" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type KeywordRow_keyword$ref: FragmentReference;
declare export opaque type KeywordRow_keyword$fragmentType: KeywordRow_keyword$ref;
export type KeywordRow_keyword = {|
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
  +$refType: KeywordRow_keyword$ref,
|};
export type KeywordRow_keyword$data = KeywordRow_keyword;
export type KeywordRow_keyword$key = {
  +$data?: KeywordRow_keyword$data,
  +$fragmentRefs: KeywordRow_keyword$ref,
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
  "name": "KeywordRow_keyword",
  "type": "Keyword",
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
(node/*: any*/).hash = '9ed83a14d34186ba8e47847bf02c509f';
module.exports = node;
