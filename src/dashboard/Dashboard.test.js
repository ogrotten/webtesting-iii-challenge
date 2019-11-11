// Test away

import React from "react";
// import {render} from "@testing-library/react"
import { render } from '@testing-library/react';

import Dashboard from "./Dashboard";

test("Dashbroad renders properly", () => {
	render(<Dashboard />)
})