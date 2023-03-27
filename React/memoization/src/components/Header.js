import React from 'react'

function Header({number, inc}) {
    console.log("Header re-rendered");
    return (
        <div>
            Header
            {number}

            <br /><br />
            <button onClick={ inc } > Click </button>

        </div>
    )
}
// if prev number is not same the number, Header will be rendered
export default React.memo(Header)