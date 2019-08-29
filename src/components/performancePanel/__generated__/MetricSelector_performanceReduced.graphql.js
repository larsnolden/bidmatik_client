/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MetricSelector_performanceReduced$ref: FragmentReference;
declare export opaque type MetricSelector_performanceReduced$fragmentType: MetricSelector_performanceReduced$ref;
export type MetricSelector_performanceReduced = {|
  +acos: ?number,
  +revenue: ?number,
  +clicks: ?number,
  +spend: ?number,
  +absoluteAcos: ?number,
  +absoluteRevenue: ?number,
  +impressions: ?number,
  +$refType: MetricSelector_performanceReduced$ref,
|};
export type MetricSelector_performanceReduced$data = MetricSelector_performanceReduced;
export type MetricSelector_performanceReduced$key = {
  +$data?: MetricSelector_performanceReduced$data,
  +$fragmentRefs: MetricSelector_performanceReduced$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MetricSelector_performanceReduced",
  "type": "ProfilePerformance",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
(node/*: any*/).hash = 'a3af3076c7d61ada6a4979e5d814ca3e';
module.exports = node;
