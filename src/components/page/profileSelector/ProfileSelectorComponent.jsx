/* eslint-disable no-confusing-arrow */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';

import usFlagIconPath from 'assets/icons/usFlag.svg';
import canadaFlagIconPath from 'assets/icons/canadaFlag.svg';
import mexicoFlagIconPath from 'assets/icons/mexicoFlag.svg';
import Chevron from 'components/Chevron';

//  TODO: add all countries
const flags = {
  US: usFlagIconPath,
  MX: mexicoFlagIconPath,
  CA: canadaFlagIconPath,
};

const Container = styled.div`
  margin-right: 26px;
  color: #4098D7;
  font-size: 18px;
  line-height: 20px;
  user-select: none;
  cursor: pointer;
  letter-spacing: 0.01em;
  &:focus {
    outline:0;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: 41px;
  align-items: center;
  padding-right: 20px;
  box-sizing: border-box;
  &:hover {
    opacity: 0.8;
  }
`;

const SelectedProfile = styled(Profile)`
  border-radius: ${props => props.hideBottomCornerRaidus ? '30px 30px 0 0' : '30px'};
  background: #DCEEFB;
`;

const Flag = styled.div`
  height: 41px;
  width: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  border-radius: 50%;
  background: ${props => props.selected ? 'rgba(182, 224, 254, 0.5)' : 'none'};
`;

const FlagIcon = styled.img`
  height: 20px;
  width: 20px;
`;

const ChevronSelect = styled(Chevron)`
  margin: 4px 0 0 auto;
  padding-left: 10px;
  transform: rotate(${props => props.rotateUp ? '180deg' : '0deg'});
`;

const AvailableProfiles = styled.div`
  background: #DCEEFB;
  border-radius: ${props => props.showBottomCornerRadius ? '0 0 10px 10px' : '0'};
`;

const AvailableProfile = ({
  name,
  country,
  onClick,
}) => (
  <Profile onClick={onClick}>
    <Flag>
      <FlagIcon src={flags[country]} />
    </Flag>
    {name}
  </Profile>
);

AvailableProfile.propTypes = {
  name: propTypes.string,
  country: propTypes.func,
  onClick: propTypes.func,
};

AvailableProfile.defaultProps = {
  name: '',
  country: 'US',
  onClick: () => {},
};


const ProfileSelectorComponent = ({
  activeProfileName,
  activeProfileCountry,
  availableProfiles,
  handleSelectProfile,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container tabIndex="0" onBlur={() => setIsOpen(false)}>
      <SelectedProfile onClick={() => setIsOpen(!isOpen)} hideBottomCornerRaidus={isOpen}>
        <Flag selected>
          <FlagIcon src={flags[activeProfileCountry]} />
        </Flag>
        {activeProfileName}
        <ChevronSelect rotateUp={isOpen} color="#4098D7" width="14" height="9" />
      </SelectedProfile>
      {
        isOpen && (
          <AvailableProfiles showBottomCornerRadius={isOpen}>
            {
              availableProfiles
                .map(profile => (
                  <AvailableProfile
                    key={profile.name + profile.country}
                    name={profile.name}
                    country={profile.country}
                    onClick={() => handleSelectProfile(profile)}
                  />
                ))
            }
          </AvailableProfiles>
        )
      }
    </Container>
  );
};

ProfileSelectorComponent.defaultProps = {
  activeProfileName: '',
  activeProfileCountry: '',
  availableProfiles: [],
  handleSelectProfile: () => {},
};

ProfileSelectorComponent.propTypes = {
  activeProfileName: propTypes.string,
  activeProfileCountry: propTypes.string,
  availableProfiles: propTypes.arrayOf({
    namee: propTypes.string,
    country: propTypes.string,
  }),
  handleSelectProfile: propTypes.func,
};

export default ProfileSelectorComponent;
