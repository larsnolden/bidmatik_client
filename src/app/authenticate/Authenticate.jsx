import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

import bidmatikLogoPath from 'assets/BidmatikLogo.png';


const AUTHENTICATE_USER__MUTATION = gql`
  mutation($authCode: String!) {
    createSession(authCode: $authCode) {
      token
    }
  }
`;

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
  box-shadow: ${props => (props.active ? 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none')};
`;

const HelpText = styled.div`
  font-size: 18px;
  letter-spacing: 0.04em;
  color: #3A5F8A;
  font-weight: 400;
  align-self: center;
  padding: 20px 20px;
`;

const Authentication = styled.div`
  flex-direction: column;
  display: flex;
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
  const [isNewCookieSet, setIsNewCookieSet] = useState(false);
  const [authorize, { data, loading, called }] = useMutation(AUTHENTICATE_USER__MUTATION);

  const isProduction = process.env.REACT_APP_ENV === 'production';

  const handleAuthenticationClick = isProduction ? () => {
    const options = {
      scope: 'profile cpc_advertising:campaign_management',
      response_type: 'code',
    };
    // eslint-disable-next-line
    window.amazon.Login.authorize(options, async (res) => {
      authorize({
        variables: {
          authCode: res.code,
        },
      });
    });
  }
    : () => {
      //  development auth
      authorize({
        variables: {
          authCode: '',
        },
      });
    };

  useEffect(
    () => {
      if (called && !loading && data.createSession) {
        Cookies.set('authentication', data.createSession.token);
        setIsNewCookieSet(true);
      }
    },
    [loading, data, called],
  );

  if (called && !loading && isNewCookieSet) return <Redirect to="/" />;
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
                Use your
                <b> Seller Central </b>
                account to login
              </HelpText>
            ) : (
              <HelpText>
                Use your
                <b> Seller Central </b>
                account to signup
              </HelpText>
            )
          }
          <AuthButton onClick={handleAuthenticationClick} />
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
