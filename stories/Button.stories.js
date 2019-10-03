import React from 'react';
import ButtonComponent from 'components/Button';
import styled from '@emotion/styled';

export default {
  title: 'Button'
};

const RobotoWrapper = styled.div`
  font-family: Roboto;
`;

export const Button = () => (
  <RobotoWrapper>
    <ButtonComponent>Button</ButtonComponent>
  </RobotoWrapper>
);
