import React, { useState } from "react";
import styled from "styled-components";
import ArrowSvg from "./ArrowSvg";
import Profile from "./Profile";

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
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
    position: relative;
    display: flex;

    #logo {
      cursor: pointer;
    }

    #arrow {
      width: 0.6rem;
      margin-left: 0.2rem;

      svg {
        height: 0.6rem;
      }
    }
  }

  .sb-menu {
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
  }
`;

function Sidebar() {
  const [popup, setPopup] = useState(true);
  const handleClick = () => {
    setPopup(!popup);
  };

  return (
    <StyledSideBar>
      <div onClick={handleClick} className="sb-header">
        <h3 id="logo">NOW TV</h3>
        <div id="arrow">
          <ArrowSvg />
        </div>
        <Profile onClick={handleClick} popup={popup} />
      </div>
      <h5>
        <span className="online-status">&#9864;</span>Lucas Lima
      </h5>
      <div className="sb-menu">
        <h4>Channels</h4>
        <h5>#interview-test</h5>
      </div>
    </StyledSideBar>
  );
}

export default Sidebar;
