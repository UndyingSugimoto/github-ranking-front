import { Alert } from "./Alert";
import { shallow, mount } from "enzyme";
import React from "react";
import { UserUpdateCard } from "./UserUpdateCard";
import { Card, Button } from "@material-ui/core";

const date = new Date();
const testMock = jest.fn();

describe("UserUpdateCard", () => {
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
