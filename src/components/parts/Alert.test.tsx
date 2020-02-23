import { shallow } from "enzyme";
import { Alert } from "./Alert";
import MuiAlert from "@material-ui/lab/Alert";

import React from "react";

describe("Alert", () => {
  test("MuiAlertが帰ってくることの確認", () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper.find(MuiAlert).length).toBe(1);
  });
});
