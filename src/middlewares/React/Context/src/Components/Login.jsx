import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <>
        <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'/>
        <input type="Password"
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'/>
        <button onClick={handleSubmit}>Sumbit</button>
        </>
    )
}

export default Login