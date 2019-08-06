import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import userIconPath from 'assets/icons/user.svg';

const Container = styled(Link)`
  height: 41px;
  width: 41px;
  background: #DCEEFB;
  border-radius: 41px;
  justify-content: center;
  display: flex;
  user-select: none;
  cursor: pointer;
`;

export default () => (
  <Container to="/settings">
    <img alt="logoIcon" src={userIconPath} />
  </Container>
);
