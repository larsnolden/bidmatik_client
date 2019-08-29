/**
 * @flow
 * @relayHash 728b68b068c1dcd5a747344cbfc904ab
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserFilterDatesInput = {|
  from: any,
  to: any,
|};
export type DateSelectionMutationVariables = {|
  input: UserFilterDatesInput
|};
export type DateSelectionMutationResponse = {|
  +SetUserFilterDates: {|
    +id: string,
    +from: any,
    +to: any,
  |}
|};
export type DateSelectionMutation = {|
  variables: DateSelectionMutationVariables,
  response: DateSelectionMutationResponse,
|};
*/


/*
mutation DateSelectionMutation(
  $input: UserFilterDatesInput!
) {
  SetUserFilterDates(input: $input) {
    id
    from
    to
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UserFilterDatesInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "SetUserFilterDates",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
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
    "name": "DateSelectionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DateSelectionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DateSelectionMutation",
    "id": null,
    "text": "mutation DateSelectionMutation(\n  $input: UserFilterDatesInput!\n) {\n  SetUserFilterDates(input: $input) {\n    id\n    from\n    to\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '136b1bf0985494405cce59572a7bb2c3';
module.exports = node;
