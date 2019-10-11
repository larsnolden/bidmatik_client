import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  background: #fff;
  border: 0.5px solid #627d98;
  color: #486581;
  border-radius: 3px;
  padding: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  box-sizing: border-box;
  box-shadow: none;
  max-width: 100%;
`;

const numericOnly = input => {
  return String(input)
    .split('')
    .filter(char => !Number.isNaN(Number(char)) || char === '.')
    .join('');
};
export default ({ sign, value = '', onChange, ...props }) => {
  const [displayedValue, setDisplayedValue] = useState('');

  //  add sign to naked value
  const setSign = () => {
    if (sign === '$') {
      const numericValue = numericOnly(value);
      setDisplayedValue(`$ ${numericValue}`);
    }
    if (sign === '%') {
      const numericValue = numericOnly(value);
      setDisplayedValue(`% ${numericValue}`);
    }
  };

  useEffect(() => {
    setSign();
  });

  const handleChange = (event, sign) => {
    const rawValue = event.target.value;
    //  return the value without sign
    if (sign === '$') {
      onChange(rawValue.split('$ ')[1]);
    } else if (sign === '%') {
      onChange(rawValue.split('% ')[1]);
    }
  };
  return <Input value={displayedValue} onChange={e => handleChange(e, sign)} {...props} />;
};
