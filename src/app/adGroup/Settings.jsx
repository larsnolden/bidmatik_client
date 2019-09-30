import React, { useState } from 'react';
import styled from '@emotion/styled';
import GearIconPath from '../../assets/icons/gear.svg';

const SettingsButton = styled.div`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.025em;
  text-transform: capitalize;
`;
const GearIcon = styled.div``;
const Container = styled.div``;

const Settings = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // if (!isModalOpen)
  return (
    <SettingsButton>
      Settings
      <GearIcon src={GearIconPath} />
    </SettingsButton>
  );
};

export default Settings;
