import React from "react";
import { Header, HeaderState } from "./Header";
import { shallow } from "enzyme";
import { List, IconButton } from "@material-ui/core";
import renderer from "react-test-renderer";

describe("Header", () => {
  it("snapshot", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("レンダリングの確認", () => {
    const wrapper = shallow(<Header />);
    //子コンポーネントが返ってきてるのでレンダリング成功
    expect(wrapper.find(List).length).toBe(1);
  });

  it("メニューアイコンをクリックした時にバーが表示されることの確認", () => {
    const wrapper = shallow(<Header />);
    let state = wrapper.state() as HeaderState;
    // 初期値の確認
    expect(state.left).toBe(false);

    wrapper.find(IconButton).simulate("click");
    state = wrapper.state() as HeaderState;
    // stateの変更を確認
    expect(state.left).toBe(true);
  });
});
