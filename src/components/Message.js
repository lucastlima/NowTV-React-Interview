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
      display: block;
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

  [data-popup] {
    position: relative;
    &:before,
    &:after {
      opacity: 0;
      transform: translate(-50%, 0);
      transition: 0.15s ease opacity, 0.15s ease transform;
      will-change: opacity transform;
      content: "";
    }
    &:hover {
      &:before,
      &:after {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -10px);
        opacity: 1;
      }
      &:before {
        bottom: 100%;
        padding: 5px 10px;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 5px;
        color: white;
        font-size: 12px;
        line-height: 12px;
        text-align: center;
        content: attr(data-popup);
        white-space: nowrap;
      }
      &:after {
        top: 0;
        height: 0;
        width: 0;
        border: solid transparent;
        border-top-color: rgba(0, 0, 0, 0.8);
        border-width: 5px;
        content: "";
      }
    }
  }

  .avatar {
    &:before,
    &:after {
      transform: none;
    }

    &:hover {
      &:before {
        left: 0;
        transform: translateY(-10px);
      }
      &:after {
        left: calc(50% - 5px);
        transform: translate(0, -10px);
      }
    }
  }
`;

const Message = ({ msg }) => {
  const { hour, min, day, month, sec } = handleDate(msg.timestamp);
  const popUpTime = `${day} ${month.slice(0, 3)} at ${hour}:${min}:${sec}`;
  return (
    <StyledMessage>
      <div data-popup={msg.email} className="avatar">
        <img src={msg.avatar} alt={msg.fullName} />
      </div>
      <div className="msg-content">
        <div className="msg-name">
          <h4>{msg.fullName}</h4>
          <small data-popup={popUpTime} id="msg-time">{`${hour}:${min}`}</small>
        </div>
        <div className="msg-message">
          <p>{msg.message}</p>
        </div>
      </div>
    </StyledMessage>
  );
};

export default Message;
