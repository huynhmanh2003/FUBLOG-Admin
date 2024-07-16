import React from "react";
import styled from "styled-components";


export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const Sidebar = styled.div`
  width: 250px;
`;

export const Content = styled.div`
  flex: 1;
  padding: 50px;
  padding-right: 0px;
`;