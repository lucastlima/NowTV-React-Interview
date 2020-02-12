import React from "react";
import styled from "styled-components";

const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: auto;

  .dummyDiv {
    min-height: 2rem;
  }
`;

const Chat = React.forwardRef(({ children }, ref) => {
  return (
    <StyledChat id="chat">
      {children}
      <div className="dummyDiv" ref={ref}></div>
    </StyledChat>
  );
});

export default Chat;
