// Test away!

import React from "react";
import {render, fireEvent} from "@testing-library/react"

import Controls from "./Controls";

test("Controls renders properly", () => {
	render(<Controls />)
})

test("Unlocked & Not Closed", () => {
	const closed = true;
	const locked = true;
	// const disabled = 

	const toggleLockedMock = jest.fn();

	const { getByText } = render(
		<Controls toggleLocked={toggleLockedMock} disabled={!closed} />
	)

	// expect(disabled).toBe(closed)
	// fireEvent.click(getByText())
})