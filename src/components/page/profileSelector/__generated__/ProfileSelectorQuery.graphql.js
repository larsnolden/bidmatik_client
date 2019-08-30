/**
 * @flow
 * @relayHash 47bb45f0b16c19cd83b7d47531f19cac
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CountryCode = "CA" | "DE" | "IT" | "MX" | "UK" | "US" | "%future added value";
export type ProfileSelectorQueryVariables = {||};
export type ProfileSelectorQueryResponse = {|
  +ActiveSellerProfile: {|
    +id: string,
    +name: string,
    +countryCode: CountryCode,
  |},
  +SellerProfiles: $ReadOnlyArray<{|
    +id: string,
    +name: string,
    +countryCode: CountryCode,
  |}>,
|};
export type ProfileSelectorQuery = {|
  variables: ProfileSelectorQueryVariables,
  response: ProfileSelectorQueryResponse,
|};
*/


/*
query ProfileSelectorQuery {
  ActiveSellerProfile {
    id
    name
    countryCode
  }
  SellerProfiles {
    id
    name
    countryCode
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "ActiveSellerProfile",
    "storageKey": null,
    "args": null,
    "concreteType": "SellerProfile",
    "plural": false,
    "selections": (v0/*: any*/)
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "SellerProfiles",
    "storageKey": null,
    "args": null,
    "concreteType": "SellerProfile",
    "plural": true,
    "selections": (v0/*: any*/)
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProfileSelectorQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProfileSelectorQuery",
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ProfileSelectorQuery",
    "id": null,
    "text": "query ProfileSelectorQuery {\n  ActiveSellerProfile {\n    id\n    name\n    countryCode\n  }\n  SellerProfiles {\n    id\n    name\n    countryCode\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '93f1d632d3d8981a4259534833beadca';
module.exports = node;
