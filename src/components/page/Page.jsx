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
  padding: 0 0 90px 165px;
`;

const ChildSpacer = styled.div`
  margin-top: 60px;
`;

const Heading = styled.div`
  font-weight: 500;
  font-size: 36px;
  color: #0A558C;
  padding: 96px 0 0 165px;
`;

export default ({
  heading,
  children,
}) => (
  <Container>
    <Navigation />
    <Column>
      <UserSettings>
        <ProfileSelector />
        <AccountMenu />
      </UserSettings>
      <Heading>
        {heading}
      </Heading>
      <Content>
        {children && children.map(child => (
          <ChildSpacer>
            {child}
          </ChildSpacer>
        )) }
      </Content>
    </Column>
  </Container>
);
