import React, {useState, useEffect} from 'react'
import axios from 'axios';
function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(res => res.json())
        axios("https://jsonplaceholder.typicode.com/users")
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
        .finally (() => setIsLoading(false))
    }, [])
    
    return (
        <div>
            <h1>Users</h1>
            {isLoading && <div>Loading..</div>}
            {users.map((user) => (
                <div key={user.id}> {user.name} </div>
            ))}
        </div>
    );
}

export default Users;