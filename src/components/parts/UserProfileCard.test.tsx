import { mount } from "enzyme";
import React from "react";
import { UserProfileCard } from "./UserProfileCard";
import { CardMedia } from "@material-ui/core";

const userDetail = {
  userName: "userName"
};

describe("UserProfileCard", () => {
  it("レンダリングの確認", () => {
    const wrapper = mount(<UserProfileCard userDetail={userDetail} />);
    expect(wrapper.find(CardMedia).length).toBe(1);
  });
  it("propsをちゃんと渡せてることの確認", () => {
    const wrapper = mount(<UserProfileCard userDetail={userDetail} />);
    expect(wrapper.prop("userDetail").userName).toBe("userName");
  });
});
