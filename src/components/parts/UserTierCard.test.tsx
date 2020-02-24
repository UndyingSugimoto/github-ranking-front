import { mount } from "enzyme";
import React from "react";
import { UserTierCard } from "./UserTierCard";
import { CardMedia } from "@material-ui/core";
import renderer from "react-test-renderer";

describe("UserTierCard", () => {
  it("snapshot", () => {
    const tree = renderer
      .create(
        <UserTierCard
          tierName={"tierName"}
          tierAbout={"tierAbout"}
          imageSrc={"imageSrc"}
          score={0}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("レンダリングの確認", () => {
    const wrapper = mount(
      <UserTierCard
        tierName={"tierName"}
        tierAbout={"tierAbout"}
        imageSrc={"imageSrc"}
        score={0}
      />
    );
    expect(wrapper.find(CardMedia).length).toBe(1);
  });
  it("propsをちゃんと渡せてることの確認", () => {
    const wrapper = mount(
      <UserTierCard
        tierName={"tierName"}
        tierAbout={"tierAbout"}
        imageSrc={"imageSrc"}
        score={0}
      />
    );
    expect(wrapper.prop("tierName")).toBe("tierName");
  });
});
