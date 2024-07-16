

import React from "react";
import { HeaderAdmin } from "../components/Navbar";
import { MenuAdmin } from "../components/Menu";
import { Content, ContentWrapper, LayoutWrapper, Sidebar } from "./style";

export const Home = ({children}) => {
    return (
        <LayoutWrapper>
        <HeaderAdmin />
        <ContentWrapper>
          <Sidebar>
            <MenuAdmin />
          </Sidebar>
          <Content>{children}</Content>
        </ContentWrapper>
      </LayoutWrapper>
    );
};