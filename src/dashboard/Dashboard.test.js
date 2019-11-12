// Test away

import React from "react";
// import {render} from "@testing-library/react"
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";
import Controls from "../controls/Controls"
import { mockComponent } from "react-dom/test-utils";

test("Dashbroad renders properly", () => {
  render(<Dashboard />);
});

test("Shows Gate controls", () => {
  const { getByText } = render(<Dashboard />);
  getByText(/lock gate/i);
  getByText(/close gate/i);
});

// cannot be closed or opened if it is locked
// fire the locked button once

test("if $locked", () => {
  const toggleLockedMock = jest.fn();
  render(
    <Controls toggleLocked={toggleLockedMock} locked={false} closed={false} />
  );
  expect(toggleLockedMock).not.toHaveBeenCalled();
  // let { getByText } = render(<Display locked={true} />);
  // expect(document.querySelector("green-led"));
  // expect(locked.className).toMatch(/\bred-led\b/);
  // const locked = getByText("Locked");
});
