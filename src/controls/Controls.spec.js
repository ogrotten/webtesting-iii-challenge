// Test away!

import React from "react";
import {render, fireEvent} from "@testing-library/react"

import Controls from "./Controls";

// provide buttons to toggle the closed and locked states.
// buttons' text changes to reflect the state the door will be in if clicked
// the closed toggle button is disabled if the gate is locked
// the locked toggle button is disabled if the gate is open


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