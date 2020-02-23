import { mount } from "enzyme";
import React from "react";
import { UserTierCardWrapper } from "./UserTierCardWrapper";
import { UserTierCard } from "./UserTierCard";
import {
  CHALLENGER,
  MASTER,
  DIAMOND,
  PRATINUM,
  GOLD,
  SILVER,
  BRONZE
} from "../../const/Tier";
import bronze from "../../static/bronze.png";
import silver from "../../static/silver.png";
import gold from "../../static/gold.png";
import pratinum from "../../static/pratinum.png";
import diamond from "../../static/diamond.png";
import master from "../../static/master.png";
import challenger from "../../static/challenger.png";

describe("UserTierCardWrapper", () => {
  it("レンダリングの確認", () => {
    const wrapper = mount(<UserTierCardWrapper tier={"tier"} score={0} />);
    expect(wrapper.find(UserTierCard).length).toBe(1);
  });
  it("propsをちゃんと渡せてることの確認", () => {
    const wrapper = mount(<UserTierCardWrapper tier={CHALLENGER} score={0} />);
    const card = wrapper.find(UserTierCard);
    expect(card.prop("score")).toBe(0);
  });
  it("Challengerの場合", () => {
    const wrapper = mount(<UserTierCardWrapper tier={CHALLENGER} score={0} />);
    const card = wrapper.find(UserTierCard);
    expect(card.prop("tierAbout")).toBe("Top 5%");
    expect(card.prop("imageSrc")).toBe(challenger);
  });
  it("Masterの場合", () => {
    const wrapper = mount(<UserTierCardWrapper tier={MASTER} score={0} />);
    const card = wrapper.find(UserTierCard);
    expect(card.prop("tierAbout")).toBe("Top 10%");
    expect(card.prop("imageSrc")).toBe(master);
  });
  it("Diamondの場合", () => {
    const wrapper = mount(<UserTierCardWrapper tier={DIAMOND} score={0} />);
    const card = wrapper.find(UserTierCard);
    expect(card.prop("tierAbout")).toBe("Top 15%");
    expect(card.prop("imageSrc")).toBe(diamond);
  });
  it("Pratinumの場合", () => {
    const wrapper = mount(<UserTierCardWrapper tier={PRATINUM} score={0} />);
    const card = wrapper.find(UserTierCard);
    expect(card.prop("tierAbout")).toBe("Top 20%");
    expect(card.prop("imageSrc")).toBe(pratinum);
  });
  it("Goldの場合", () => {
    const wrapper = mount(<UserTierCardWrapper tier={GOLD} score={0} />);
    const card = wrapper.find(UserTierCard);
    expect(card.prop("tierAbout")).toBe("Top 30%");
    expect(card.prop("imageSrc")).toBe(gold);
  });
  it("Silverの場合", () => {
    const wrapper = mount(<UserTierCardWrapper tier={SILVER} score={0} />);
    const card = wrapper.find(UserTierCard);
    expect(card.prop("tierAbout")).toBe("Top 40%");
    expect(card.prop("imageSrc")).toBe(silver);
  });
  it("それ以外の場合", () => {
    const wrapper = mount(<UserTierCardWrapper tier={BRONZE} score={0} />);
    const card = wrapper.find(UserTierCard);
    expect(card.prop("tierAbout")).toBe("Under 40%");
    expect(card.prop("imageSrc")).toBe(bronze);
  });
});
