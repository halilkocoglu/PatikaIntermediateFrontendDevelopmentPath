import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import Counter from "./index"


describe('Counter Tests', () => {
    let count, increaseButton, decreaseButton;
        
    const counterComp = () => render(<Counter />);
    beforeEach(() => {
        counterComp()
        decreaseButton = screen.getByTitle("decrease");
        increaseButton = screen.getByTitle("increase");
        count = screen.getByTitle("count");

    })

    afterEach(() => cleanup());

    // It or Test. same 
    test("increase btn", ()=> {
        fireEvent.click(increaseButton);
        expect(count).toHaveTextContent("1")
        
    })
    test("decrease btn", ()=> {
        fireEvent.click(decreaseButton);
        expect(count).toHaveTextContent("-1")
        
    })
})
