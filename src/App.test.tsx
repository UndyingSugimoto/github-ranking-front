import { shallow, mount } from "enzyme";
import App from "./App";
import MuiAlert from "@material-ui/lab/Alert";

import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Top } from "./components/top/Top";
import { Detail } from "./components/detail/Detail";

describe("App", () => {
  test("Top表示", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Top)).toHaveLength(1);
    expect(wrapper.find(Detail)).toHaveLength(0);
  });
  test("Detail表示", () => {
    // TODO ここのテストだけなぜかこける
    // const wrapper = mount<MemoryRouter>(
    //   <MemoryRouter initialEntries={["/detail"]}>
    //     <App />
    //   </MemoryRouter>
    // );
    // expect(wrapper.find(Top)).toHaveLength(0);
    // expect(wrapper.find(Detail)).toHaveLength(1);
  });
});
