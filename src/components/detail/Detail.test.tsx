import { UNSEARCHED } from "../../const/UtilCont";
import { getUserData, updateUserData } from "../../external/ControllUser";
import { Detail } from "./Detail";
import { mount } from "enzyme";
import React from "react";
import { routerTestProps } from "../../util/test/RoutComponentMock";
import { createLocation, createMemoryHistory } from "history";
import { TopState } from "../top/Top";

const userDetail = {
  userName: "",
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

function setUp01() {
  const { match } = routerTestProps("/route/:userId", {
    userId: "testUserId"
  });
  const location = createLocation<TopState>(match.url);
  location.state = {
    userId: "userId",
    dialogOpen: false,
    ranking: {
      rankByLanguages: []
    }
  };
  const history = createMemoryHistory<TopState>();

  const wrapper = mount(
    <Detail
      userId={"userId"}
      match={match}
      location={location}
      history={history}
    />
  );
  return wrapper;
}

describe("Detail", () => {
  it("レンダリングの確認", () => {
    //   const wrapper = mount(
    //     <RankingList
    //       ranksByLanguage={ranksByLanguage}
    //       itemClickCallback={testMock}
    //     />
    //   );
    //   expect(wrapper.find(Grid).length).toBe(1);
  });
  it("propsをちゃんと渡せてることの確認", () => {
    //   const wrapper = mount(
    //     <RankingList
    //       ranksByLanguage={ranksByLanguage}
    //       itemClickCallback={testMock}
    //     />
    //   );
    //   expect(wrapper.prop("ranksByLanguage").language).toBe("language");
    //   expect(wrapper.prop("itemClickCallback")).toBe(testMock);
  });
  it("propsをちゃんと渡せてることの確認", () => {
    const wrapper = setUp01();
    expect(wrapper.prop("userId")).toBe("userId");
    jest.mock("../../external/ControllUser");
  });
});
