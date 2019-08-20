import React, { useState } from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';

import bidmatikLogoPath from 'assets/BidmatikLogo.png';

const Container = styled.div`
  background: #3A5F8A;
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  user-select: none;
`;

const ActionBar = styled.div`
  max-width: 297px;
  flex-grow: 1;
  height: 100vh;
  background: #FFFFFF;
`;

const Logo = styled.img`
  padding: 0 33px 0 33px;
  margin-top: 29px;
  width: 198px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 200px;
`;

const Button = styled.div`
  background: ${props => (props.active ? '#3A5F8A' : '#FFF')};
  height: 48px;
  flex-grow: 1;
  text-align: center;
  line-height: 48px;
  color: ${props => (!props.active ? '#3A5F8A' : '#FFF')};
  cursor: pointer;
`;

const HelpText = styled.div`
  font-size: 18px;
  letter-spacing: 0.04em;
  color: #3A5F8A;
  font-weight: 400;
`;

const Authentication = styled.div`
  flex-direction: column;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
`;

const AuthButton = styled.div`
  width: 188px;
  height: 39px;
  background-image: url("https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gry_312x64.png");
  background-size: contain;
  align-self: center;
  margin-top: 20px;
  cursor: pointer;

  &:active {
    background-image: url("https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gry_312x64_pressed.png");
  }
`;

const Authenticate = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  return (
    <Container>
      <ActionBar>
        <Logo src={bidmatikLogoPath} />
        <Buttons>
          <Button active={isLoginActive} onClick={() => setIsLoginActive(true)}>
            Login
          </Button>
          <Button active={!isLoginActive} onClick={() => setIsLoginActive(false)}>
            Signup
          </Button>
        </Buttons>
        <Authentication>
          {
            isLoginActive ? (
              <HelpText>
                Use
                <b> Login with Amazon </b>
                to sign in
              </HelpText>
            ) : (
              <HelpText>
                Signup with your
                <b> Seller Central </b>
                account
              </HelpText>
            )
          }
          <AuthButton />
        </Authentication>
      </ActionBar>
    </Container>
  );
};

export default Authenticate;

Authenticate.defaultProps = {

};

Authenticate.propTypes = {

};
