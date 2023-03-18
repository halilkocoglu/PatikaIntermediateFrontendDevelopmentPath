import {useState, useEffect} from 'react'
import List from "./List"
import Form from "./Form"

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: 'John',
            phoneNumber: '123'
        },
        {
            fullname: 'jack',
            phoneNumber: '321'
        },
        {
            fullname: 'jade',
            phoneNumber: '546'
        },
    ]);

    useEffect(() => {
        console.log( contacts);
        
    }, [contacts])
    
    return (
        <div>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}   

export default Contacts