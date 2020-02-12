import React from "react";
import styled from "styled-components";
import lucas from "../images/lucas.jpg";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  visibility: ${({ popup }) => (popup ? "visible" : "hidden")};
  opacity: ${({ popup }) => (popup ? 1 : 0)};
  position: absolute;
  left: 0;
  top: 2.2rem;
  z-index: 10;
  width: 15rem;
  transition: all 0.2s ease-in;
  background-color: white;
  color: black;
  font-size: 0.6rem;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: rgba(29, 28, 29, 0.13) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.12) 0px 4px 12px 0px;

  & a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  & .pop-header {
    display: flex;
    margin-bottom: 0.5rem;
    & .pop-info {
      padding: 0 0.5rem;
      & h2 {
        line-height: 1rem;
        margin: 0;
      }
    }
    & img {
      display: block;
      width: 3rem;
      height: auto;
      border-radius: 3px;
      object-fit: cover;
    }
  }

  .pop-info {
    display: flex;
    flex-direction: column;

    & .phone {
      font-size: 0.7rem;
    }
  }

  & span,
  p {
    font-size: 0.8rem;
    color: #1d1c1db3;
  }

  & hr {
    width: 100%;
    height: 1px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  & .content {
    padding: 0.5rem 0;
  }
`;

function Profile({ popup }) {
  return (
    <StyledProfile popup={popup}>
      <div className="pop-header">
        <div className="pop-avatar">
          <img src={lucas} alt="Lucas" />
        </div>
        <div className="pop-info">
          <h2>Lucas Lima</h2>
          <span>
            <a href="mailto:lucastlima86@gmail.com">lucastlima86@gmail.com</a>
          </span>
          <span className="phone">
            <a href="tel:07495751803">07495751803</a>
          </span>
        </div>
      </div>
      <hr />
      <div className="content">
        <h2>Github:</h2>
        <p>
          <a
            href="https://github.com/lucastlima"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/lucastlima
          </a>
        </p>
        <h2>LinkedIn:</h2>
        <p>
          <a
            href="https://www.linkedin.com/in/lucas-lima-14850993/"
            target="_blank"
            rel="noopener noreferrer"
          >
            lucas-lima-14850993
          </a>
        </p>
        <h2>Project Repo:</h2>
        <p>
          <a
            href="https://github.com/lucastlima/NowTV-React-Interview"
            target="_blank"
            rel="noopener noreferrer"
          >
            NowTV-React-Interview
          </a>
        </p>
      </div>
    </StyledProfile>
  );
}

export default Profile;
