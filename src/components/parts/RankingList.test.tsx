import { mount } from "enzyme";
import React from "react";
import { RankingList } from "./RankingList";
import { RanksByLanguage } from "../../external/data/RanksByLanguage";
import { Grid } from "@material-ui/core";
import renderer from "react-test-renderer";

const ranksByLanguage: RanksByLanguage = {
  language: "language",
  userInfomations: []
};
const testMock = jest.fn();

describe("RankingList", () => {
  it("snapshot", () => {
    const tree = renderer
      .create(
        <RankingList
          ranksByLanguage={ranksByLanguage}
          itemClickCallback={testMock}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("レンダリングの確認", () => {
    const wrapper = mount(
      <RankingList
        ranksByLanguage={ranksByLanguage}
        itemClickCallback={testMock}
      />
    );
    expect(wrapper.find(Grid).length).toBe(1);
  });
  it("propsをちゃんと渡せてることの確認", () => {
    const wrapper = mount(
      <RankingList
        ranksByLanguage={ranksByLanguage}
        itemClickCallback={testMock}
      />
    );
    expect(wrapper.prop("ranksByLanguage").language).toBe("language");
    expect(wrapper.prop("itemClickCallback")).toBe(testMock);
  });
});
