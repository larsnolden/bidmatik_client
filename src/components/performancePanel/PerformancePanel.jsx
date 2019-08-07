import React from 'react';
import styled from '@emotion/styled';

import DateSelection from './DateSelection';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const PeformancePanel = () => {
  return (
    <Container>
      <DateSelection />
    </Container>
  );
};

export default PeformancePanel;
