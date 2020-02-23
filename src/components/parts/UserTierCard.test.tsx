import { mount } from "enzyme";
import React from "react";
import { UserTierCard } from "./UserTierCard";
import { CardMedia } from "@material-ui/core";

describe("UserTierCard", () => {
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
