import { UNSEARCHED } from "../../const/UtilCont";
import ControllUser from "../../external/ControllUser";
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

function setUp(state: TopState) {
  const { match } = routerTestProps("/route/:userId", {
    userId: "testUserId"
  });
  const location = createLocation<TopState>(match.url);
  location.state = state;
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
  it("propsをちゃんと渡せてることの確認、componentDidMountの確認", () => {
    const getUserDetailspy = jest.spyOn(Detail.prototype, "getUserDetail");
    const wrapper = setUp({
      userId: "userId",
      dialogOpen: false,
      ranking: {
        rankByLanguages: []
      }
    });
    // propsの確認
    expect(wrapper.prop("userId")).toBe("userId");
    // componentDidMount の確認
    expect(getUserDetailspy).toHaveBeenCalled();
  });

  it("getUserDetailの確認", () => {
    jest.mock("../../external/ControllUser");
    const getUser = jest.fn().mockImplementation(() => Promise.resolve({}));
    ControllUser.getUserData = getUser;

    const wrapper = setUp({
      userId: "userId",
      dialogOpen: false,
      ranking: {
        rankByLanguages: []
      }
    });
    expect(wrapper.prop("userId")).toBe("userId");
    expect(getUser).toHaveBeenCalled();
  });
});
