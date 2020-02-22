import React from "react";
import { Header } from "./Header";
import { shallow } from "enzyme";
import { List } from "@material-ui/core";

describe("Header", () => {
  it("レンダリングの確認", () => {
    const wrapper = shallow(<Header />);
    //子コンポーネントが返ってきてるのでレンダリング成功
    expect(wrapper.find(List).length).toBe(1);
  });
  it("メニューアイコンをクリックした時にバーが表示されることの確認", () => {});
});
