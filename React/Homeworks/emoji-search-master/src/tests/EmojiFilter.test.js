import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import React from 'react'
import '@testing-library/jest-dom'

describe('Emoji filter tests', () => { 
    let searchEmoji;
    beforeEach(() => {
        render(<App />);
        searchEmoji = screen.getByTitle("input")
    })
    it('should filter emojis', () => {
        const emoji = "Joy"
        fireEvent.change(searchEmoji, {
            target: {value: emoji}
        })
        expect(screen.getByText(emoji)).toBeInTheDocument()
    })
    
    
})

