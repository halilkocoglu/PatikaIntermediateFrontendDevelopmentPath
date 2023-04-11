import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import React from 'react'
import '@testing-library/jest-dom'

describe('Copy Emoji tests', () => { 
    let copyEmoji;
    beforeEach(() => {
        render(<App />)
        copyEmoji = screen.getByText("Joy")
    })
    it('should copy emoji', () => {
        const clicks = screen.getAllByTestId("row");
        expect(clicks[0]).toHaveAttribute("data-clipboard-text");
    })
})