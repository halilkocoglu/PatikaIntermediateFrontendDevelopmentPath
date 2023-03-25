import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function User() {
    const {id}  = useParams()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setUser(res.data))
        .finally(() => setLoading(false))
    }, [id])
    
  return (
    <div>
        <h1>User Details</h1>
        {loading && <div>Loading..</div>}
        {!loading && 
        <div>
            <div>
            {JSON.stringify(user)}
            </div>
            <h2>UserName:</h2>
            <div>
                {JSON.stringify(user.username)}
            </div>
            <br />
            <br />
            <Link to={`users/${parseInt(id) + 1}`}>{`Next User(${parseInt(id) + 1})`} </Link>
            <Link to={`users/${parseInt(id) - 1}`}>{`Prev User(${parseInt(id) - 1})`} </Link>
            <Outlet/>
        </div>
        }
    </div>
  )
}

export default User