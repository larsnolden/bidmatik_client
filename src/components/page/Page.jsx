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
  position: relative;
  margin-right: 29px;
`;

const UserSettings = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  margin: 29px 0 0 0;
  right: 0
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 95px 0 0 165px;
`;

export default ({ 
  children
}) => (
  <Container>
    <Navigation />
    <Column>
      <UserSettings>
        <ProfileSelector />
        <AccountMenu />
      </UserSettings>
      <Content>
        { children }
      </Content>
    </Column>
  </Container>
);
