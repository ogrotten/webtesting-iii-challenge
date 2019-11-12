import React from "react";
import { render } from "@testing-library/react";

import Display from "./Display";

test("Display renders properly", () => {
  render(<Display />);
});

// displays if gate is open/closed and if it is locked/unlocked
test("Gate Open if $locked == false", () => {
  let { getByText } = render(<Display locked={false} closed={false} />);
  expect(getByText(/open/i));
  expect(getByText(/unlocked/i));
});

// displays 'Closed' if the closed prop is true and 'Open' if otherwise
test("Closed if $closed == true", () => {
  let trueTog = true;
  const { getByText } = render(<Display closed={trueTog} />);
  expect(getByText(/closed/i));

  // let { getByText } = render(<Display closed={false} />);
  // trueTog = !trueTog;
  // expect(getByText(/open/i));
});
test("Open if $closed == false", () => {
  let { getByText } = render(<Display closed={false} />);
  expect(getByText(/open/i));
});

// displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
test("Locked if $locked == true", () => {
  let { getByText } = render(<Display locked={true} />);
  expect(getByText(/locked/i));
});
test("UN-locked if $locked == false", () => {
  let { getByText } = render(<Display locked={false} />);
  expect(getByText(/unlocked/i));
});

// when locked or closed use the red-led class
test("red-led class if $locked == true", () => {
  let { getByText } = render(<Display locked={true} />);
  // expect(getByText.firstChild.classList.contains("red-led"));
  // expect(document.querySelector("led").parentElement.classList.contains("red-led"))
  const locked = getByText("Locked");
  expect(locked.className).toMatch(/\bred-led\b/);
  //   expect(document.querySelector("red-led"));
});
test("red-led class if $closed == true", () => {
	let { getByText } = render(<Display closed={true} />);
	const locked = getByText("Closed");
	expect(locked.className).toMatch(/\bred-led\b/);
//   expect(document.querySelector("red-led"));
});

// when unlocked or open use the green-led class
test("green-led class if $locked == false", () => {
  let { getByText } = render(<Display locked={false} />);
  expect(document.querySelector("green-led"));
});
test("green-led class if $closed == false", () => {
  let { getByText } = render(<Display closed={false} />);
  expect(document.querySelector("green-led"));
});
