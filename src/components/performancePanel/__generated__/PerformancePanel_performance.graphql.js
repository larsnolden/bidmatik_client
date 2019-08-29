/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PerformancePanel_performance$ref: FragmentReference;
declare export opaque type PerformancePanel_performance$fragmentType: PerformancePanel_performance$ref;
export type PerformancePanel_performance = $ReadOnlyArray<{|
  +date: ?any,
  +acos: ?number,
  +revenue: ?number,
  +clicks: ?number,
  +spend: ?number,
  +absoluteAcos: ?number,
  +absoluteRevenue: ?number,
  +impressions: ?number,
  +$refType: PerformancePanel_performance$ref,
|}>;
export type PerformancePanel_performance$data = PerformancePanel_performance;
export type PerformancePanel_performance$key = {
  +$data?: PerformancePanel_performance$data,
  +$fragmentRefs: PerformancePanel_performance$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PerformancePanel_performance",
  "type": "ProfilePerformance",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "date",
      "args": null,
      "storageKey": null
    },
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
      "name": "revenue",
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
      "name": "spend",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "absoluteAcos",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "absoluteRevenue",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "impressions",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8f851d28d75513eb35fa4d63883f8119';
module.exports = node;
