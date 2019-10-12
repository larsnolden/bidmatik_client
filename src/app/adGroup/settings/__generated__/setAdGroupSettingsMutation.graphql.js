/**
 * @flow
 * @relayHash 761696a52be57bfcb44729c0618efb7e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AdGroupSettingsInput = {|
  id: string,
  dailyBudget?: ?number,
  updateBids: boolean,
  targetAcos?: ?number,
  addKeywords: boolean,
  addNegativeKeywords: boolean,
|};
export type setAdGroupSettingsMutationVariables = {|
  input: AdGroupSettingsInput
|};
export type setAdGroupSettingsMutationResponse = {|
  +setAdGroupSettings: ?{|
    +dailyBudget: ?number,
    +updateBids: boolean,
    +targetAcos: ?number,
    +addKeywords: boolean,
    +addNegativeKeywords: boolean,
  |}
|};
export type setAdGroupSettingsMutation = {|
  variables: setAdGroupSettingsMutationVariables,
  response: setAdGroupSettingsMutationResponse,
|};
*/


/*
mutation setAdGroupSettingsMutation(
  $input: AdGroupSettingsInput!
) {
  setAdGroupSettings(input: $input) {
    dailyBudget
    updateBids
    targetAcos
    addKeywords
    addNegativeKeywords
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AdGroupSettingsInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "setAdGroupSettings",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "adGroupSettings",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "dailyBudget",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "updateBids",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "targetAcos",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "addKeywords",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "addNegativeKeywords",
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
    "name": "setAdGroupSettingsMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "setAdGroupSettingsMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "setAdGroupSettingsMutation",
    "id": null,
    "text": "mutation setAdGroupSettingsMutation(\n  $input: AdGroupSettingsInput!\n) {\n  setAdGroupSettings(input: $input) {\n    dailyBudget\n    updateBids\n    targetAcos\n    addKeywords\n    addNegativeKeywords\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a9f135fb19148e086c1f24d17b34809a';
module.exports = node;
