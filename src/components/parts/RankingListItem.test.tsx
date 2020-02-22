import { Alert } from "./Alert";
import { shallow } from "enzyme";
import React from "react";
import { RankingListItem } from "./RankingListItem";
import { ListItem } from "@material-ui/core";

describe("RankingListItem", () => {
  it("レンダリングの確認", () => {});
  it("propsをちゃんと渡せてることの確認", () => {});
  it("クリック時にコールバックが実行されることを確認", () => {
    const testMock = jest.fn();
    const user = {
      userId: "userId",
      score: 0,
      mainLanguage: "mainLanguage",
      avatarUrl: "avatarUrl",
      githubUrl: "githubUrl"
    };

    const wrapper = shallow(
      <RankingListItem rank={1} user={user} itemClickCallback={testMock} />
    );
    wrapper.find(ListItem).simulate("click");
    expect(testMock).toHaveBeenCalled();
  });
});
