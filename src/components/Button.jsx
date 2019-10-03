import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  background: #186faf;
  border: 2px solid #2680c2;
  border-radius: 3px;
  letter-spacing: 0.01em;
  color: #f0f4f8;
  font-weight: 00;
  font-size: 14px;
  line-height: 14px;
  padding: 6px 10px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  :active {
    color: #186faf;
    background: #bcccdc;
  }
  ::-moz-focus-inner {
    border: 0;
  }
  :focus {
    outline: none;
  }
`;

export default Button;
