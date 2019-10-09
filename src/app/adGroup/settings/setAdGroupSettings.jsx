import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import environment from 'environment';

const mutation = graphql`
  mutation setAdGroupSettingsMutation($input: AdGroupSettingsInput!) {
    setAdGroupSettings(input: $input) {
      dailyBudget
      updateBids
      targetAcos
      addKeywords
      addNegativeKeywords
    }
  }
`;

function setAdgroupSettings({
  adGroupId,
  dailyBudget,
  updateBids,
  targetAcos,
  addKeywords,
  addNegativeKeywords
}) {
  console.log('got adGroupId', adGroupId);
  const variables = {
    input: {
      id: adGroupId,
      dailyBudget: Number(dailyBudget),
      updateBids,
      targetAcos: Number(targetAcos),
      addKeywords,
      addNegativeKeywords
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.');
    },
    onError: err => console.error(err)
  });
}

export default setAdgroupSettings;
