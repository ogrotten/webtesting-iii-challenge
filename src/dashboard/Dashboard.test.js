// Test away

import React from "react";
// import {render} from "@testing-library/react"
import { render } from '@testing-library/react';

import Dashboard from "./Dashboard";
import { mockComponent } from "react-dom/test-utils";

test("Dashbroad renders properly", () => {
	render(<Dashboard />)
})

test("Shows Gate controls", () => {
	const { getByText } = render (<Dashboard />);
	getByText(/lock gate/i);
	getByText(/close gate/i);
})