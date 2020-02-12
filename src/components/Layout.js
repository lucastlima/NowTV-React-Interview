import React from "react";
import styled from "styled-components";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const LayoutStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function Layout({ children }) {
  return (
    <LayoutStyled>
      <Sidebar />
      <ContentWrapper>
        <Topbar />
        {children}
      </ContentWrapper>
    </LayoutStyled>
  );
}

export default Layout;
