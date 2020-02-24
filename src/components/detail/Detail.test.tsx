import { UNSEARCHED } from "../../const/UtilCont";
import ControllUser from "../../external/ControllUser";
import { Detail } from "./Detail";
import { mount } from "enzyme";
import React from "react";
import { routerTestProps } from "../../util/test/RoutComponentMock";
import { createLocation, createMemoryHistory } from "history";
import { TopState } from "../top/Top";
import { CircularProgress } from "@material-ui/core";
import { NOTFOUND } from "dns";
import { UserProfileCard } from "../parts/UserProfileCard";
import renderer from "react-test-renderer";

function setUp(state: TopState) {
  const { match } = routerTestProps("/route/:userId", {
    userId: "testUserId"
  });
  const location = createLocation<TopState>(match.url);
  location.state = state;
  const history = createMemoryHistory<TopState>();

  const wrapper = mount<Detail>(
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
  it("snapshot", () => {
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
    const tree = renderer
      .create(
        <Detail
          userId={"userId"}
          match={match}
          location={location}
          history={history}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("レンダリングの確認", () => {
    const wrapper = setUp({
      userId: "userId",
      dialogOpen: false,
      ranking: {
        rankByLanguages: []
      }
    });

    //ロード中
    expect(wrapper.find(CircularProgress).length).toBe(1);

    wrapper.setState({
      userDetail: {
        userName: "",
        userId: NOTFOUND,
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
        lastupdateDate: new Date("2019/01/01")
      }
    });

    // Not Found
    expect(wrapper.find(".backToTopButton").length).toBeGreaterThan(1);

    wrapper.setState({
      userDetail: {
        userName: "",
        userId: "userId",
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
        lastupdateDate: new Date("2019/01/01")
      }
    });

    // 見つかった場合
    expect(wrapper.find(UserProfileCard).length).toBe(1);
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

  it("onClickUpdateButtonの確認", () => {
    // メソッド呼び出しのモック化
    const updateUserDetail = jest.spyOn(Detail.prototype, "updateUserDetail");

    const wrapper = setUp({
      userId: "userId",
      dialogOpen: false,
      ranking: {
        rankByLanguages: []
      }
    });
    const comp: Detail = wrapper.instance();
    comp.setState({
      userDetail: {
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
        lastupdateDate: new Date("2019/01/01")
      }
    });
    // 異なる日ならコールされる
    comp.onClickUpdateButton();
    expect(updateUserDetail).toHaveBeenCalled();

    comp.setState({
      userDetail: {
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
      }
    });
    // 同日ならopenする
    comp.onClickUpdateButton();
    expect(comp.state.openDialog).toBe(true);
  });

  it("updateUserDetailの確認", () => {
    const updateUser = jest.fn().mockImplementation(() => Promise.resolve({}));
    ControllUser.updateUserData = updateUser;

    const wrapper = setUp({
      userId: "userId",
      dialogOpen: false,
      ranking: {
        rankByLanguages: []
      }
    });
    const comp: Detail = wrapper.instance();
    comp.updateUserDetail("userId");
    expect(updateUser).toHaveBeenCalled();
  });

  it("backTopの確認", () => {
    const mock = jest.fn();

    const wrapper = setUp({
      userId: "userId",
      dialogOpen: false,
      ranking: {
        rankByLanguages: []
      }
    });
    const comp: Detail = wrapper.instance();
    comp.props.history.push = mock;
    comp.backTop();
    expect(mock).toHaveBeenCalled();
  });

  it("backTopの確認", () => {
    const wrapper = setUp({
      userId: "userId",
      dialogOpen: false,
      ranking: {
        rankByLanguages: []
      }
    });
    const comp: Detail = wrapper.instance();

    comp.setState({
      openDialog: true
    });

    comp.dialogClose();
    expect(comp.state.openDialog).toBe(false);
  });
});
