import React from 'react';
import { QueryRenderer, commitMutation } from 'react-relay';
import ProfileSelectorComponent from './ProfileSelectorComponent';
import environment from 'environment';
import graphql from 'babel-plugin-relay/macro';


const ProfilesQuery = graphql`
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
`;

const SetActiveProfileMutation = graphql`
  mutation ProfileSelectorMutation($id: ID!) {
    SetActiveSellerProfile(id: $id) {
      id
      name
      countryCode
    }
  }
`;

function SetActiveProfile(id) {
  return commitMutation(
    environment,
    {
      mutation: SetActiveProfileMutation,
      variables: {
        id,
      },
      updater: (store) => {
        //  replace node manually
        const activeProfile = store.getRoot().getLinkedRecord('ActiveSellerProfile')
        const response = store.getRootField('SetActiveSellerProfile');
        activeProfile.copyFieldsFrom(response);
      },
    },
  );
}

export default () => (
  <QueryRenderer
    environment={environment}
    query={ProfilesQuery}
    render={({ error, props }) => {
      if (error) {
        console.log('Error in Profile Selector QueryRender', error);
        return <h1>Error</h1>;
      }
      const loading = !props;
      if (loading) {
        return <h1>Loading</h1>;
      }
      console.log('UserSellerProfiles', props);
      const { SellerProfiles, ActiveSellerProfile } = props;

      const AvailableSellerProfile = SellerProfiles.filter(
        profile => profile.id !== ActiveSellerProfile.id,
      );

      return (
        <ProfileSelectorComponent
          activeProfileName={ActiveSellerProfile.name}
          activeProfileCountryCode={ActiveSellerProfile.countryCode}
          availableProfiles={AvailableSellerProfile}
          handleSelectProfile={(profile) => SetActiveProfile(profile.id)}
        />
      );
    }}
  />
);
