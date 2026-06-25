import './App.css'
import { useState,useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { HomePage } from './components/HomePage';
import api from './components/axiosConfig';
import { ProtectedRoute } from './components/protectedRout';
function App() {
  const [tasks,SetTasks] = useState([]);
  const [inputText,setInputText]=useState('');
  const [deleted,SetDeleted] = useState(0);
  const [isLogged,SetIsLogged] = useState(false);
  const navigate = useNavigate();
  async function deleteTask(taskId){
        await api.delete(`/tasks/${taskId}`);
        SetDeleted(pre=> pre+1);
    }
    useEffect(()=>{
       api.get(`/tasks/${(Number(localStorage.getItem('userId')))}`)
        .then((response)=>{
            SetTasks(response.data)
            console.log(response.data);
        })
    },[isLogged,inputText,deleted])
    async function login(userName,password) {
           await api.post('/auth/login',{userName,password})
            .then((response)=>{
                localStorage.setItem('token',response.data.token);
                localStorage.setItem('userId',response.data.userId);
                console.log("pre");
                SetIsLogged(pre=> !pre);
                console.log("post");
                navigate("/");
            })
            .catch((error)=>{
                console.log(error);
            })
           
            
    }

  return (
    <Routes>
      <Route path='/login' element={<Login login={login}/>}/>
      <Route path="/register" element={<Register login={login}/>}/>
      <Route path="/" element={<ProtectedRoute><HomePage inputText={inputText} setInputText={setInputText} tasks={tasks} deleteTask={deleteTask}/></ProtectedRoute>}/>
      <Route/>
    </Routes>
  );
}

export default App
