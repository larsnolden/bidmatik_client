import React, { useState } from 'react';
import ToggleComponent from 'components/Toggle';
import styled from '@emotion/styled';

export default {
  title: 'Toggle'
};

const RobotoWrapper = styled.div`
  font-family: Roboto;
`;

export const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <RobotoWrapper>
      <ToggleComponent on={isToggled} onClick={() => setIsToggled(!isToggled)} />
    </RobotoWrapper>
  );
};
