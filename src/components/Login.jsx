import { useState } from "react"
export function Login({ login }){
    const [userName,SetUserName] = useState('');
    const [password,SetPassword] = useState('');
    function usernameset(event){
        SetUserName(event.target.value);
    }
    function passwordset(event){
        SetPassword(event.target.value);
    }
    // async function login(userName,password) {
    //        await axios.post('http://localhost:8080/auth/login',{userName,password})
    //         .then((response)=>{
    //             localStorage.setItem('token',response.data.token);
    //             localStorage.setItem('userId',response.data.userId);
    //             SetIsLogged(pre=> !pre);
    //         })
    //         .catch((error)=>{
    //             console.log(error);
    //         })
           
    //         navigate("/");
    // }
    
    return(
        <form onSubmit={(e)=> {
                e.preventDefault();
                login(userName,password)
            }}>
            <input placeholder="username" onChange={usernameset}/>
            <input type="password" onChange={passwordset}/>
            <button type="submit">Submit</button>
            <a href="/register">register</a>
        </form>
    )
}