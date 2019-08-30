/**
 * @flow
 * @relayHash 247623b14da2c0ba2287a55a0e38b267
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AuthenticateMutationVariables = {|
  authCode: string
|};
export type AuthenticateMutationResponse = {|
  +createSession: {|
    +token: string
  |}
|};
export type AuthenticateMutation = {|
  variables: AuthenticateMutationVariables,
  response: AuthenticateMutationResponse,
|};
*/


/*
mutation AuthenticateMutation(
  $authCode: String!
) {
  createSession(authCode: $authCode) {
    token
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "authCode",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createSession",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "authCode",
        "variableName": "authCode"
      }
    ],
    "concreteType": "AuthToken",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
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
    "name": "AuthenticateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AuthenticateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AuthenticateMutation",
    "id": null,
    "text": "mutation AuthenticateMutation(\n  $authCode: String!\n) {\n  createSession(authCode: $authCode) {\n    token\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bc92227da3803fe5bef39a61543df3fe';
module.exports = node;
