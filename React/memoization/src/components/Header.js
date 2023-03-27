import React from 'react'

function Header({number, data}) {
    console.log("Header re-rendered");
    return (
        <div>
            Header
            {number}

            <br /><br />
            <code>{JSON.stringify(data)}</code>
        </div>
    )
}
// if prev number is not same the number, Header will be rendered
export default React.memo(Header)