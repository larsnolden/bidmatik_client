import React from 'react';
import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

import bidmatikLogoPath from 'assets/BidmatikLogo.png';

const Container = styled.div`
  min-height: 100vh;
  width: 297px;
  background: #FFF;
  padding: 0 33px 0 33px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  margin-top: 29px;
  width: 198px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 78px;
  .activeMenuItem {
    background: rgba(220, 238, 251, 0.4);
  }
`;

const MenuItem = styled(NavLink)`
  width: 100%;
  font-size: 24px;
  color: #334E68;
  padding: 16px 20px 16px 20px;
  border-radius: 3px;
  box-sizing: border-box;
  text-decoration: none;
`;

export default () => (
  <Container>
    <Link to="/">
      <Logo src={bidmatikLogoPath} />
    </Link>
    <Menu>
      <MenuItem to="/" activeClassName="activeMenuItem">Advertise</MenuItem>
      <MenuItem to="/reports" activeClassName="activeMenuItem">Reports</MenuItem>
    </Menu>
  </Container>
);
