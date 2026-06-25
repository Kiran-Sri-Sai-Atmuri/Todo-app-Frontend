import { useState } from "react"
import api from "./axiosConfig";
export function Register({login}){
    const [userName,SetUserName] = useState('');
    const [password,SetPassword] = useState('');
    function usernameset(event){
        SetUserName(event.target.value);
    }
    function passwordset(event){
        SetPassword(event.target.value);
    }
    async function register(userName,password) {
        console.log(userName,password);
        await api.post('/users/register',{userName,password})
        login(userName,password)
    }
    return(
        <form onSubmit={(e)=>{
                e.preventDefault();
                register(userName,password)
            }}>
            <input placeholder="username" onChange={usernameset}/>
            <input type="password" onChange={passwordset}/>
            <button type="submit">Sign up</button>
        </form>
    )
}