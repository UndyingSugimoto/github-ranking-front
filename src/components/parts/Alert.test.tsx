import { shallow } from "enzyme";
import { Alert } from "./Alert";
import MuiAlert from "@material-ui/lab/Alert";

import React from "react";
import renderer from "react-test-renderer";

describe("Alert", () => {
  it("snapshot", () => {
    const tree = renderer.create(<Alert />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("MuiAlertが帰ってくることの確認", () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper.find(MuiAlert).length).toBe(1);
  });
});
