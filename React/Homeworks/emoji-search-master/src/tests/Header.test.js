import { render, screen } from "@testing-library/react";
import React from 'react';
import '@testing-library/jest-dom'

import App from "../App";


describe('Header tests', () => { 
    let header;
    beforeEach(() => {
        render(<App />)
        header = screen.getByText('Emoji Search')
    })

    it('should have a header', () => {
        expect(header).toBeInTheDocument()
    })
})