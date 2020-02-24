import { mount } from "enzyme";
import React from "react";
import { UserScoreDetail } from "./UserScoreDetail";
import { TableContainer } from "@material-ui/core";
import { UNSEARCHED } from "../../const/UtilCont";
import renderer from "react-test-renderer";

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

describe("UserScoreDetail", () => {
  it("snapshot", () => {
    const tree = renderer
      .create(<UserScoreDetail userDetail={userDetail} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("レンダリングの確認", () => {
    const wrapper = mount(<UserScoreDetail userDetail={userDetail} />);
    expect(wrapper.find(TableContainer).length).toBe(1);
  });
  it("propsをちゃんと渡せてることの確認", () => {
    const wrapper = mount(<UserScoreDetail userDetail={userDetail} />);
    expect(wrapper.prop("userDetail").userName).toBe("userName");
  });
});
