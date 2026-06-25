import { InputBar } from "./InputBar";
import { Tasks } from "./Tasks";
import './HomePage.css'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function HomePage({inputText,setInputText,tasks,deleteTask}){
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('token')==null){
            navigate("/login");
        }
    });
    console.log("dsfgh");
    return(
    
        <div className='main'>
            <InputBar  inputText={inputText} setInputText={setInputText}/>
            <Tasks tasks = {tasks} deleteTask={deleteTask}/>
        </div>
    );
    
}