import { mount } from "enzyme";
import React from "react";
import { UserUpdateCard } from "./UserUpdateCard";
import { Card, Button } from "@material-ui/core";
import renderer from "react-test-renderer";

const date = new Date();
const testMock = jest.fn();

describe("UserUpdateCard", () => {
  it("snapshot", () => {
    const tree = renderer
      .create(
        <UserUpdateCard lastupdateDate={date} onClickUpdateButton={testMock} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("レンダリングの確認", () => {
    const wrapper = mount(
      <UserUpdateCard lastupdateDate={date} onClickUpdateButton={testMock} />
    );
    expect(wrapper.find(Card).length).toBe(1);
  });
  it("propsをちゃんと渡せてることの確認", () => {
    const wrapper = mount(
      <UserUpdateCard lastupdateDate={date} onClickUpdateButton={testMock} />
    );
    expect(wrapper.prop("lastupdateDate")).toBe(date);
    expect(wrapper.prop("onClickUpdateButton")).toBe(testMock);
  });
  it("クリック時にコールバックが実行されることを確認", () => {
    const wrapper = mount(
      <UserUpdateCard lastupdateDate={date} onClickUpdateButton={testMock} />
    );
    wrapper.find(Button).simulate("click");
    expect(testMock).toHaveBeenCalled();
  });
});
