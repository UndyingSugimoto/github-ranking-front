import { shallow, mount, render } from "enzyme";
import { Alert } from "./Alert";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

import React from "react";

const wrapper = shallow(<Alert />);

describe("Alert", () => {
  test("MuiAlertが帰ってくることの確認", () => {
    expect(wrapper.find(MuiAlert).length).toBe(1);
  });
});
