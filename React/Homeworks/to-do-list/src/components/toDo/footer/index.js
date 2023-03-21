import React, { useState } from 'react'
import "./footer.css"
function Footer(props) {
    
    const uncompleteItemCount = props.items.filter(
        (item) => !item.completed)
        .length;

    const completedItemCount = props.items.filter(
        (item) => item.completed)
        .length;
    const [itemAmount, setItemAmount] = useState()
    const [itemMessage, setItemMessage] = useState("")
    
    function clearCompleted() {
        props.setItems((prevState) => prevState.filter((item) => !item.completed));
    }
    
    function handleClick(status) {
        document.querySelectorAll(".itemContainer").forEach((item) => {
        if (status === "All") item.style.display = "flex";
        else if (status === "Active")
            item.classList.contains("checkedItems")
            ? (item.style.display = "none")
            : (item.style.display = "flex");
        else if (status === "Completed")
            item.classList.contains("uncheckedItems")
            ? (item.style.display = "none")
            : (item.style.display = "flex");
        });
    }
    
    
    return (
        <div>
            <div className="footerContainer">
        <ul>
            <li>{itemAmount} {itemMessage}</li>
            <li>
            <a
                href="#/"
                onClick={() => {
                    setItemAmount(props.items.length)
                    setItemMessage("uncompleted and completed")
                    return (
                        handleClick("All")
                        
                        )}}
                className="footerButton"
            >
                All
            </a>
            <a
                href="#/Active"
                onClick={() => {
                    setItemAmount(uncompleteItemCount)
                    setItemMessage("uncompleted")
                    return(
                    handleClick("Active")
                    )}}
                className="footerButton"
            >
                Active
            </a>
            <a
                href="#/Completed"
                onClick={() => {
                    setItemMessage("completed")
                    setItemAmount(completedItemCount)
                    return( 
                    handleClick("Completed")
                    
                    )}}
                className="footerButton"
            >
                Completed
            </a>
            </li>
            <li
            id="clearCompleted"
            className="clearCompleted"
            onClick={() => {
                setItemAmount(uncompleteItemCount)
                    setItemMessage("uncompleted")
                return (
                    clearCompleted(),
                    handleClick("All")
                    )}}
            >
            Clear Completed
            </li>
        </ul>
        <div className="footerText">
            <p>Click to edit todo</p>
            <p>Created by Halil Kocoglu</p>
            <p>2023</p>
        </div>
    </div>
        </div>
    )
}

export default Footer