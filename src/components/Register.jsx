import { useState } from "react";
export function Register({register}){
    const [userName,SetUserName] = useState('');
    const [password,SetPassword] = useState('');
    function usernameset(event){
        SetUserName(event.target.value);
    }
    function passwordset(event){
        SetPassword(event.target.value);
    }
    
    console.log("in register");
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