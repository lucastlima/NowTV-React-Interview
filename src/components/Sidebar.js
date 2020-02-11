import React from 'react';
import styled from 'styled-components';

const StyledSideBar = styled.div`
  width: 16rem;
  background-color: #3f0e40;
  padding: 1rem;
  color: white;

  & h5,
  h4 {
    color: #bcabbc;
  }

  .online-status {
    color: #2bac76;
    margin-right: 0.2rem;
  }

  .sb-header {
    display: flex;
    flex-direction: column;

    #logo {
      cursor: pointer;
    }
  }
  .sb-menu {
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
  }
`;

function Sidebar() {
  return (
    <StyledSideBar>
      <div className="sb-header">
        <h3 id="logo">NOW TV</h3>
        <h5>
          <span className="online-status">&#9864;</span>Lucas Lima
        </h5>
      </div>
      <div className="sb-menu">
        <h4>Channels</h4>
        <h5>#interview-test</h5>
      </div>
    </StyledSideBar>
  );
}

export default Sidebar;
