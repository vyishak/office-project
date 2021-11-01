import React , {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Context } from '../Context/UserContext'

function Login () {
    const [name , setName] = useState("")
    const [password, setPassword] = useState("")

    function login() {
     window.location.replace("/")
    }

    return ( 
        <div className = "Login" >
            <TextField onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Username"/>
            <TextField onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Password"/>
            <Button variant="contained" onClick={login}>Log In</Button>
        </div>
    )
}

export default Login