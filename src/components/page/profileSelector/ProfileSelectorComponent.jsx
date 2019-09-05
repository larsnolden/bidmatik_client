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
  z-index: 99;
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
  border-radius: 30px 30px 10px 10px;
  box-shadow: ${props => props.showShadow ? '0px 1px 3px rgba(0, 0, 0, 0.2)' : 'none'};
  filter: ${props => props.loading ? 'blur(4px)' : 'none'};  
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

const ProfileName = styled.div`
  margin: 0 10px 0 5px;
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
  margin: 0 0 0 auto;
  transform: rotate(${props => props.rotateUp ? '180deg' : '0deg'});
`;

const AvailableProfiles = styled.div`
  background: #DCEEFB;
  border-radius: ${props => props.showBottomCornerRadius ? '0 0 10px 10px' : '0'};
`;

const AvailableProfile = ({
  name,
  countryCode,
  onClick,
}) => (
  <Profile onClick={onClick}>
    <Flag>
      <FlagIcon src={flags[countryCode]} />
    </Flag>
    {name}
  </Profile>
);

AvailableProfile.propTypes = {
  name: propTypes.string,
  countryCode: propTypes.func,
  onClick: propTypes.func,
};

AvailableProfile.defaultProps = {
  name: '',
  countryCode: 'US',
  onClick: () => {},
};


const ProfileSelectorComponent = ({
  activeProfileName,
  activeProfileCountryCode,
  availableProfiles,
  handleSelectProfile,
  loading,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container
      loading={loading}
      tabIndex="0"
      onBlur={() => setIsOpen(false)}
      showShadow={isOpen}
    >
      <SelectedProfile onClick={() => setIsOpen(!isOpen)} hideBottomCornerRaidus={isOpen}>
        <Flag selected>
          <FlagIcon src={flags[activeProfileCountryCode]} />
        </Flag>
        <ProfileName>
          {activeProfileName}
        </ProfileName>
        <ChevronSelect rotateUp={isOpen} color="#4098D7" width="14" height="9" />
      </SelectedProfile>
      {
        isOpen && (
          <AvailableProfiles showBottomCornerRadius={isOpen}>
            {
              availableProfiles
                .map(profile => (
                  <AvailableProfile
                    key={profile.name + profile.countryCode}
                    name={profile.name}
                    countryCode={profile.countryCode}
                    onClick={() => {
                      setIsOpen(false);
                      handleSelectProfile(profile);
                    }}
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
  activeProfileName: 'profile',
  activeProfilecountryCode: '',
  availableProfiles: [],
  handleSelectProfile: () => {},
};

ProfileSelectorComponent.propTypes = {
  activeProfileName: propTypes.string,
  activeProfilecountryCode: propTypes.string,
  availableProfiles: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    countryCode: propTypes.string,
  })),
  handleSelectProfile: propTypes.func,
};

export default ProfileSelectorComponent;
