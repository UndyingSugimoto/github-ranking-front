import { mount } from "enzyme";
import React from "react";
import { RankingListItem } from "./RankingListItem";
import { ListItem } from "@material-ui/core";
import renderer from "react-test-renderer";

const user = {
  userId: "userId",
  score: 0,
  mainLanguage: "mainLanguage",
  avatarUrl: "avatarUrl",
  githubUrl: "githubUrl"
};
const testMock = jest.fn();

describe("RankingListItem", () => {
  it("snapshot", () => {
    const tree = renderer
      .create(
        <RankingListItem rank={1} user={user} itemClickCallback={testMock} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("レンダリングの確認", () => {
    const wrapper = mount(
      <RankingListItem rank={1} user={user} itemClickCallback={testMock} />
    );
    wrapper.find(ListItem);
    expect(wrapper.find(ListItem).length).toBe(1);
  });
  it("propsをちゃんと渡せてることの確認", () => {
    const wrapper = mount(
      <RankingListItem rank={1} user={user} itemClickCallback={testMock} />
    );
    expect(wrapper.prop("rank")).toBe(1);
    expect(wrapper.prop("user").userId).toBe("userId");
    expect(wrapper.prop("itemClickCallback")).toBe(testMock);
  });
  it("クリック時にコールバックが実行されることを確認", () => {
    const wrapper = mount(
      <RankingListItem rank={1} user={user} itemClickCallback={testMock} />
    );
    wrapper.find(ListItem).simulate("click");
    expect(testMock).toHaveBeenCalled();
  });
});
