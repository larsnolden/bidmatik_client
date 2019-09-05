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
        //  replace record manually
        const activeProfile = store.getRoot().getLinkedRecord('ActiveSellerProfile')
        const response = store.getRootField('SetActiveSellerProfile');
        activeProfile.copyFieldsFrom(response);
      },
    },
  );
}

export default ({
  handleActiveProfileChange,
}) => (
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
        return <ProfileSelectorComponent loading={true} />;
      }
      console.log('UserSellerProfiles', props);
      const { SellerProfiles, ActiveSellerProfile } = props;
      console.log('Got Active Seller Profile', ActiveSellerProfile.id)
      const AvailableSellerProfile = SellerProfiles.filter(
        profile => profile.id !== ActiveSellerProfile.id,
      );

      const handleSelectProfile = (profile) => {
        SetActiveProfile(profile.id);
        handleActiveProfileChange(profile.id);
      };

      return (
        <ProfileSelectorComponent
          activeProfileName={ActiveSellerProfile.name}
          activeProfileCountryCode={ActiveSellerProfile.countryCode}
          availableProfiles={AvailableSellerProfile}
          handleSelectProfile={handleSelectProfile}
        />
      );
    }}
  />
);
