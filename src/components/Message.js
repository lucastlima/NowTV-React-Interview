import React from "react";
import styled from "styled-components";
import { handleDate } from "../utils/utils";

const StyledMessage = styled.div`
  display: flex;
  padding: 0.5rem 0;

  .avatar {
    width: 2rem;
    min-width: 2rem;
    cursor: pointer;

    img {
      width: 100%;
      height: auto;
      border-radius: 3px;
      object-fit: cover;
    }
  }
  .msg-content {
    display: flex;
    flex-direction: column;
    padding: 0 0.5rem;
    .msg-name {
      display: flex;
      & h4 {
        margin-top: 0;
        line-height: 1rem;
      }
      & small {
        margin-left: 0.5rem;
        color: #616061;
        cursor: pointer;
      }
    }
    .msg-message {
      display: flex;
    }
  }
`;

const Message = ({ msg }) => {
  const date = handleDate(msg.timestamp);
  return (
    <StyledMessage>
      <div className="avatar">
        <img src={msg.avatar} alt={msg.fullName} />
      </div>
      <div className="msg-content">
        <div className="msg-name">
          <h4>{msg.fullName}</h4>
          <small>{`${date.hour}:${date.min}`}</small>
        </div>
        <div className="msg-message">
          <p>{msg.message}</p>
        </div>
      </div>
    </StyledMessage>
  );
};

export default Message;
