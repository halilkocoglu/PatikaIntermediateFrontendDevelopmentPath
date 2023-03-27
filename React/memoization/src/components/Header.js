import React from 'react'

function Header({number}) {
    console.log("Header re-rendered");
    return (
        <div>
            Header
            {number}
        </div>
    )
}
// if prev number is not same the number, Header will be rendered
export default React.memo(Header)