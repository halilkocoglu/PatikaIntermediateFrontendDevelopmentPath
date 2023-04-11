import { render, screen } from "@testing-library/react"
import App from "../App"
import emojiList from "../emojiList.json"
import React from 'react'
import '@testing-library/jest-dom'

describe('Emoji Result test', () => { 
    beforeEach(() => {
        render(<App/>)
    })
    it('should renders the emoji result', () => {
        const result = emojiList.slice(0,20)
        result.map((emoji) => {
            expect(screen.getByText(emoji.title)).toBeInTheDocument()
        })
    })
})