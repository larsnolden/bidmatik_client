/**
 * @flow
 * @relayHash b46f6d5d85caab2b81d19a75bedaeb98
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CountryCode = "CA" | "DE" | "IT" | "MX" | "UK" | "US" | "%future added value";
export type ProfileSelectorMutationVariables = {|
  id: string
|};
export type ProfileSelectorMutationResponse = {|
  +SetActiveSellerProfile: {|
    +id: string,
    +name: string,
    +countryCode: CountryCode,
  |}
|};
export type ProfileSelectorMutation = {|
  variables: ProfileSelectorMutationVariables,
  response: ProfileSelectorMutationResponse,
|};
*/


/*
mutation ProfileSelectorMutation(
  $id: ID!
) {
  SetActiveSellerProfile(id: $id) {
    id
    name
    countryCode
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "SetActiveSellerProfile",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "SellerProfile",
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
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "countryCode",
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
    "name": "ProfileSelectorMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProfileSelectorMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProfileSelectorMutation",
    "id": null,
    "text": "mutation ProfileSelectorMutation(\n  $id: ID!\n) {\n  SetActiveSellerProfile(id: $id) {\n    id\n    name\n    countryCode\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c8eeb9fa9eb142322a7e06bcfc9443ac';
module.exports = node;
