import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user, setUser} = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const handleLogin = () =>{
        setLoading(true)
        setTimeout(() => {
            setUser({id: 1, username:"halil", bio:"lorem ipsum dolor"})
            setLoading(false);
        }, 1500);
    }
    const handleLogout = () =>{
        setLoading(true)
        setTimeout(() => {
            setUser(null)
            setLoading(false);
        }, 1500);
    }
    return (
        <div>
            {
                !user && (
                    <button onClick={handleLogin}>{loading ? "Loading.." : "Login"}</button>
                )
            }
            {
                user && (
                    <div>
                        <h3>
                            User Details
                        </h3>
                    <button onClick={handleLogout}>
                        {loading ? "Loading.." : "Logout"}
                    </button>
                    </div>
                )
            }
            <br /><br />
            {
                !(user === null) && (
                    JSON.stringify(user)
                )
            }
        </div>
    )
}

export default Profile