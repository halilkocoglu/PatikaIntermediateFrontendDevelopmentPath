import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "./index";


describe("ToDo tests",()=>{
    let button, input;

    beforeEach(() => {
        render (<Todo/>)

        button = screen.getByText("Add")
        input = screen.getByTitle("text-input")

    })
    it("should have render 3 object as default",()=>{
        const items = screen.getAllByText(/Item/i)
        expect (items.length).toEqual(3)
    })
    it("should have add button and ınput",()=>{
        expect(button).toBeInTheDocument()
        expect(input).toBeInTheDocument()
    })
    it("should have add button click",()=>{
        //add an input 
        const name = "Joe"
        fireEvent.change(input, {
            target: { value: "Joe" },
        })
        // click the add button
        fireEvent.click(button)
        //assertion
        expect(screen.getByText(name)).toBeInTheDocument()
    })
})
