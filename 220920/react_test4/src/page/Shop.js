import React from "react";
import { Header, Body } from "../com";

const Shop = () => {
  return (
    <div>
      <Header title="상점페이지" />
      <Body path="/detail/1/10/셔츠" name="1번 상품으로 이동" />
      <Body path="/detail/2/8/바지" name="2번 상품으로 이동" />
      <Body path="/detail/3/12/신발" name="3번 상품으로 이동" />
      <Body path="/detail/4/14/맨투맨" name="4번 상품으로 이동" />
      <Body path="/detail/5/20/코트" name="5번 상품으로 이동" />
    </div>
  );
};

export default Shop;
