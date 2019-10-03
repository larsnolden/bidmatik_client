import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 45px;
  height: 22px;
  border-radius: 20px;
  background: ${props => (props.on ? '#186FAF' : '#829AB1')};
  align-items: center;
  padding: 0 5px 0 5px;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  user-select: none;
`;

const Dial = styled.div`
  height: 14px;
  width: 14px;
  background: ${props => (props.on ? '#003E6B' : '#334E68')};
  border-radius: 50%;
  order: ${props => (props.on ? 1 : 2)};
`;

const Label = styled.div`
  color: #f0f4f8;
  font-weight: 500;
  font-size: 11px;
  line-height: 20px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  order: ${props => (props.on ? 2 : 1)};
`;

const Toggle = ({ on, onChange, ...props }) => {
  return (
    <Container on={on} {...props}>
      <Dial on={on} />
      <Label>{on ? 'On' : 'Off'}</Label>
    </Container>
  );
};

export default Toggle;
