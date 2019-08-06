import React from 'react';
import styled from '@emotion/styled';

import Navigation from './Navigation';
import ProfileSelector from './profileSelector/ProfileSelector';
import AccountMenu from './AccountMenu';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #F0F4F8;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 1323px;
`;

const UserSettings = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 29px 29px 0 0;
`;

export default () => (
  <Container>
    <Navigation />
    <Column>
      <UserSettings>
        <ProfileSelector />
        <AccountMenu />
      </UserSettings>
    </Column>
  </Container>
);
