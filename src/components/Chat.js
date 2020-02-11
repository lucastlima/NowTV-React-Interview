import React from 'react';
import styled from 'styled-components';

const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: auto;
`;

function Chat({ children }) {
  return <StyledChat>{children}</StyledChat>;
}

export default Chat;
