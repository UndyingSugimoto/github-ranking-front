import { mount } from "enzyme";
import { Top, TopState } from "./Top";
import { routerTestProps } from "../../util/test/RoutComponentMock";
import { createLocation, createMemoryHistory } from "history";
import React from "react";
import { Snackbar } from "@material-ui/core";
import GetRanks from "../../external/GetRanks";
import renderer from "react-test-renderer";

function setUp(state: TopState) {
  const { match } = routerTestProps("/top/", {});
  const location = createLocation<TopState>(match.url);
  location.state = state;
  const history = createMemoryHistory<TopState>();

  const wrapper = mount<Top>(
    <Top
      match={match}
      location={location}
      history={history}
      screenName={"top"}
    />
  );

  return wrapper;
}

describe("Top", () => {
  it("snapshot", () => {
    const { match } = routerTestProps("/top/", {});
    const location = createLocation<TopState>(match.url);
    location.state = {
      userId: "userId",
      dialogOpen: true,
      ranking: {
        rankByLanguages: []
      }
    };
    const history = createMemoryHistory<TopState>();
    const tree = renderer
      .create(
        <Top
          match={match}
          location={location}
          history={history}
          screenName={"top"}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("レンダリングの確認", () => {
    const wrapper = setUp({
      userId: "userId",
      dialogOpen: true,
      ranking: {
        rankByLanguages: []
      }
    });
    expect(wrapper.find(Snackbar).length).toBe(1);
  });

  test("componentDidMountの確認", () => {
    const getRanking = jest.spyOn(Top.prototype, "getRanking");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const wrapper = setUp({
      userId: "userId",
      dialogOpen: true,
      ranking: {
        rankByLanguages: []
      }
    });
    expect(getRanking).toHaveBeenCalled();
  });

  test("dialogCloseの確認", () => {
    const wrapper = setUp({
      userId: "userId",
      dialogOpen: true,
      ranking: {
        rankByLanguages: []
      }
    });
    const comp: Top = wrapper.instance();
    comp.dialogClose();
    expect(comp.state.dialogOpen).toBe(false);
  });

  test("getRankingの確認", () => {
    const getRanksMock = jest
      .fn()
      .mockImplementation(() => Promise.resolve({}));
    GetRanks.getRanks = getRanksMock;
    const wrapper = setUp({
      userId: "userId",
      dialogOpen: true,
      ranking: {
        rankByLanguages: []
      }
    });
    const comp: Top = wrapper.instance();
    comp.getRanking();
    expect(getRanksMock).toHaveBeenCalled();
  });

  test("handleClickの確認", () => {
    const moveDetailLogic = jest.spyOn(Top.prototype, "moveDetailLogic");
    const wrapper = setUp({
      userId: "userId",
      dialogOpen: true,
      ranking: {
        rankByLanguages: []
      }
    });
    const comp: Top = wrapper.instance();
    comp.setState({ userId: "userId" });
    comp.handleClick();
    expect(moveDetailLogic).toHaveBeenCalled();
  });

  test("moveDetailLogicの確認", () => {
    const mock = jest.fn();
    const wrapper = setUp({
      userId: "userId",
      dialogOpen: true,
      ranking: {
        rankByLanguages: []
      }
    });
    const comp: Top = wrapper.instance();
    comp.props.history.push = mock;
    comp.moveDetailLogic("userId");
    expect(mock).toHaveBeenCalled();
  });

  test("handleChangeの確認", () => {
    const wrapper = setUp({
      userId: "userId",
      dialogOpen: true,
      ranking: {
        rankByLanguages: []
      }
    });
    const comp: Top = wrapper.instance();
    wrapper.find("input").simulate("change", { target: { value: "hogehoge" } });

    expect(comp.state.userId).toBe("hogehoge");
  });
});
