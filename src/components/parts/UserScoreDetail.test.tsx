import { mount } from "enzyme";
import React from "react";
import { UserScoreDetail } from "./UserScoreDetail";
import { TableContainer } from "@material-ui/core";

const userDetail = {
  userName: "userName"
};

describe("UserScoreDetail", () => {
  it("レンダリングの確認", () => {
    const wrapper = mount(<UserScoreDetail userDetail={userDetail} />);
    expect(wrapper.find(TableContainer).length).toBe(1);
  });
  it("propsをちゃんと渡せてることの確認", () => {
    const wrapper = mount(<UserScoreDetail userDetail={userDetail} />);
    expect(wrapper.prop("userDetail").userName).toBe("userName");
  });
});
