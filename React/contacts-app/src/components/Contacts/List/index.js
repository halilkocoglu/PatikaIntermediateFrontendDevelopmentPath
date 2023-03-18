import {useState} from 'react'

function List({contacts}) {
    const [filterText, setFilterText] = useState("");
    const filtered = contacts.filter((contact) => {
        return Object.keys(contact).some((key) => 
            contact[key]
            .toString()
            .toLowerCase().includes(filterText.toLowerCase())
        )
    } )
    // console.log(`Filtered: ${JSON.stringify(filtered)}`);
    return (
        <div>
            <input placeholder='Filter Contact' value={filterText} onChange={(e) => setFilterText(e.target.value)}/>
            <ul className='list'>
                {filtered.map((contact,i) => (
                    <li key={i}> 
                        <span>{contact.fullname}</span>
                        <span>{contact.phoneNumber}</span>
                    </li>
                ))}
            </ul>
            <div> Total Contacts ({filtered.length})  </div>
            <br />
        </div>
    )
}

export default List