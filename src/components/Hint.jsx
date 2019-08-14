import React, { useState } from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';

import hintIconPath from 'assets/icons/hint.svg';


const HintIcon = styled.img``;
const HintMessage = styled.div`
  background: #486581;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  color: #D9E2EC;
  opacity: 0.95;
  border-radius: 4px;
  position: absolute;
  max-width: 200px;
  z-index: 1000;
  padding: 10px;
  font-size: 14px;
`;

const Hint = ({
  message,
  className,
}) => {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div className={className}>
      <HintIcon
        onMouseEnter={() => setShowMessage(true)}
        onMouseLeave={() => setShowMessage(false)}
        src={hintIconPath}
      />
      {showMessage && (
        <HintMessage>
          {message}
        </HintMessage>
      )}
    </div>
  );
};

export default Hint;

Hint.defaultProps = {
  className: '',
};

Hint.propTypes = {
  message: propTypes.string.isRequired,
  className: propTypes.string,
};
