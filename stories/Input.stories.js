import React, { useState } from 'react';
import InputComponent from 'components/Input';
import styled from '@emotion/styled';

export default {
  title: 'Input'
};

const RobotoWrapper = styled.div`
  font-family: Roboto;
`;

export const Input = () => (
  <RobotoWrapper>
    <InputComponent />
  </RobotoWrapper>
);

export const DollarInput = () => {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <RobotoWrapper>
      <InputComponent value={value} onChange={setValue} sign={'$'} />
    </RobotoWrapper>
  );
};

export const PercentInput = () => {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <RobotoWrapper>
      <InputComponent value={value} onChange={setValue} sign={'%'} />
    </RobotoWrapper>
  );
};
