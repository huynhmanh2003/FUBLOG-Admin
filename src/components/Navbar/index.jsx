import React from "react";
import { Header, HeaderWrapper } from "./style";
import { Button } from "antd";

export const HeaderAdmin = () => {
  return (
    <>
      <Header>
        <HeaderWrapper>
        <Button type="primary" shape="round" >
            Đăng Xuất
          </Button>
        </HeaderWrapper>
      </Header>
    </>
  );
};
