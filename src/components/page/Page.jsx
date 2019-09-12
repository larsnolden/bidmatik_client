import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import Navigation from './Navigation';
import ProfileSelector from './profileSelector/ProfileSelector';
import AccountMenu from './AccountMenu';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #f0f4f8;
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
  right: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 90px 165px;
`;

const Heading = styled.div`
  font-weight: 500;
  font-size: 42px;
  color: #0a558c;
  padding: 96px 0 0 165px;
  filter: ${props => (props.loading ? 'blur(4px)' : 'none')};
`;

const mapStateToProps = state => ({
  heading: state.pageName,
  loading: state.pageIsLoading
});

const Page = ({ heading, loading, children }) => {
  return (
    <Container>
      <Navigation />
      <Column>
        <UserSettings>
          <ProfileSelector />
          <AccountMenu />
        </UserSettings>
        <Heading loading={loading}>{heading}</Heading>
        <Content>{children}</Content>
      </Column>
    </Container>
  );
};

export default connect(mapStateToProps)(Page);
