import React,{useState} from 'react'
import CustomInput from '../Common/CustomInput/CustomInput'
import './Login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {
    const [loginInputValue, setLoginInputValue] = useState({email:'', password:''})
    const navigate = useNavigate()

console.log("loginInputValue",loginInputValue)
    const handleOnChange = (e) =>{
        //update state
     //e.target.value , e.target.name
     const {name, value} = e.target;

     setLoginInputValue((prevState)=>({...prevState, [name]:value}))
    }
const handleSubmit =(e)=>{
    e.preventDefault()
    userLogin()
}

const userLogin = async()=>{
  try{
    const payload = loginInputValue
    const response =  await axios.post('http://localhost:8000/user/login', payload )
    console.log("response",response)
    if(response.data.data.length>0){
        const token = response.data.data
        localStorage.setItem('token', token)
        console.log("token",token)
        navigate("/")
    }
  }catch(error){
    console.log("Error in login", error)
  }
  }


  return (
   <>
   <div className='login-form-container'>
   <h2>Login Form</h2>
   <form onSubmit={handleSubmit}>
    <CustomInput
    name="email"
    type="email"
    placeholder= "please enter email"
    value={loginInputValue.email}
    handleChange = {handleOnChange}
    />

<CustomInput
    name="password"
    type="password"
    placeholder= "please enter password"
    value={loginInputValue.password}
    handleChange = {handleOnChange}
    />

    <button type='submit'>Submit</button>
   </form>
   <div>
    are you a new user?.......Please click here to <Link to="/register">create account
    </Link>
   </div>
   </div>
   </>
  )
}
