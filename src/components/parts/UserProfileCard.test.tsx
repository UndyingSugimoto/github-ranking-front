import { mount } from "enzyme";
import React from "react";
import { UserProfileCard } from "./UserProfileCard";
import { CardMedia } from "@material-ui/core";
import { UNSEARCHED } from "../../const/UtilCont";

const userDetail = {
  userName: "userName",
  userId: UNSEARCHED,
  avatarUrl: "",
  githubUrl: "",
  tier: "",
  rank: 0,
  score: 0,
  currentNumber: 0,
  followersCount: 0,
  issuesCount: 0,
  pullRequestCount: 0,
  repositoriesCount: 0,
  forksCountTotal: 0,
  stargazerCountTotal: 0,
  watchersCountTotal: 0,
  mainLanguage: "",
  lastupdateDate: new Date()
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
