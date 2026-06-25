import { Navigate } from "react-router-dom";

export const Protected=({child})=>{
    const token = localStorage.getItem('token');
    return token ? child : <Navigate to= "/login" /> 
}