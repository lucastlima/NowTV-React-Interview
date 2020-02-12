import React from "react";
import styled from "styled-components";

const StyledTopBar = styled.div`
  display: flex;
  width: 100%;
  box-shadow: rgba(29, 28, 29, 0.13) 0px -1px 0px 0px inset;
  padding: 0.8rem 1rem;
`;

function Topbar() {
  return (
    <StyledTopBar>
      <h3>#interview-test</h3>
    </StyledTopBar>
  );
}

export default Topbar;
