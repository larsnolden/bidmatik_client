import React from 'react';
import styled from '@emotion/styled';
import Settings from '../src/app/adGroup/Settings';

const RobotoWrapper = styled.div`
  font-family: Roboto;
`;

export default { title: 'Ad Group Settings' };
export const AdGroupSettings = () => (
  <RobotoWrapper>
    <Settings />
  </RobotoWrapper>
);
