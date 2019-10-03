import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import * as R from 'ramda';

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

const numericOnly = input =>
  input
    .split('')
    .filter(char => !Number.isNaN(Number(char)) || char === '.')
    .join('');

const percentOnly = numeric => {
  // if (Number(numeric) > 100) return 100;
  //contains no dot ? append .0
  // contains two dots? remove last dot?
  // has more than 2 floats ? remove others
  return numeric;
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
      const percentValue = R.pipe(
        numericOnly,
        percentOnly
      )(value);
      console.log(value, percentValue, numericOnly(value), percentOnly(numericOnly(value)));
      setDisplayedValue(`% ${percentValue}`);
    }
  };

  useEffect(() => {
    setSign();
  }, [value, sign]);

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
