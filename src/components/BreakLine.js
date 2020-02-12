import React from "react";
import styled from "styled-components";

const StyledBreakLine = styled.div`
  display: flex;
  align-items: center;
  min-height: 3rem;
  & hr {
    width: 100%;
    height: 1px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  & span {
    font-size: 0.8rem;
    font-weight: bold;
    margin: 0 1rem;
    white-space: nowrap;
  }
`;

const BreakLine = ({ date }) => (
  <StyledBreakLine>
    <hr />
    <span>{`${date.weekDay}, ${date.day} ${date.month} ${date.year}`}</span>
    <hr />
  </StyledBreakLine>
);

export default BreakLine;
