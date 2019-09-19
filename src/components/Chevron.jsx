/* eslint-disable */
import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  transform: rotate(${props => (props.pointDown ? '0deg' : '180deg')});
  cursor: pointer;
`;

export default ({ color, width, height, className, onClick, pointDown }) => (
  <Svg
    className={className}
    pointDown={pointDown}
    width={width}
    height={height}
    onClick={onClick}
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.7143 0.30582C11.9894 0.0849746 12.3297 -0.0222436 12.6727 0.0038489C13.0157 0.0299414 13.3384 0.187592 13.5816 0.447861C13.8247 0.708129 13.972 1.05355 13.9964 1.42069C14.0208 1.78784 13.9206 2.15208 13.7143 2.44654L8 8.5629C7.73296 8.84307 7.37393 9 7 9C6.62607 9 6.26704 8.84307 6 8.5629L0.285717 2.44654C0.0793893 2.15208 -0.0207814 1.78784 0.00359586 1.42069C0.0279731 1.05355 0.175262 0.708129 0.418421 0.447861C0.66158 0.187592 0.984289 0.0299414 1.3273 0.0038489C1.67032 -0.0222436 2.01061 0.0849746 2.28572 0.30582L7 5.33652L11.7143 0.290528V0.30582Z"
      fill={color}
    />
  </Svg>
);
