/**
 * @flow
 * @relayHash 2780e47cbc2d8ca6146ebb9a7fc5558e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DateSelection_QueryVariables = {||};
export type DateSelection_QueryResponse = {|
  +UserFilterDates: ?{|
    +id: string,
    +from: any,
    +to: any,
  |}
|};
export type DateSelection_Query = {|
  variables: DateSelection_QueryVariables,
  response: DateSelection_QueryResponse,
|};
*/


/*
query DateSelection_Query {
  UserFilterDates {
    id
    from
    to
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "UserFilterDates",
    "storageKey": null,
    "args": null,
    "concreteType": "UserFilterDates",
    "plural": false,
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
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DateSelection_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DateSelection_Query",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "DateSelection_Query",
    "id": null,
    "text": "query DateSelection_Query {\n  UserFilterDates {\n    id\n    from\n    to\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2e3df04a743fa2b6f104e6ff122226ee';
module.exports = node;
