import React, {useState, useEffect} from 'react'
import CustomInput from '../Common/CustomInput/CustomInput';
import './Signup.css';
import axios from 'axios';

export default function Signup() {

  const [userInputField, setUserInputField] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const [toggle , setToggle] = useState(false)

  console.log("signup render ")
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')
//   const [name, setName] = useState('')
// // console.log("email",email, name, password, confirmPassword)
// //   const handleEmailOnChange = (e)=>{
// //     setEmail(e.target.value)
// //   }

// //   const handleNameOnChange = (e)=>{
// //     setName(e.target.value)
// //   }

// //   const handlePasswordOnChange = (e)=>{
// //     setPassword(e.target.value)
// //   }

// //   const handleConfirmPasswordOnChange = (e)=>{
// //     setConfirmPassword(e.target.value)
// //   }

console.log("userInputField", userInputField)
const handleOnChange = (e) =>{
  const {name, value} = e.target;
  console.log("e", name, value)

  //how to update state of object
  //email, password, name, confirmPassword

  // update only the field that user is entering and keep rest of the field as it is
  setUserInputField((prevState)=>({...prevState, [name]:value}))
}

const handleSubmit = (e)=>{
  e.preventDefault()
  userRegister()

}
const handleToggle = () =>{
  //true , false, 
  setToggle(!toggle)
}

// useEffect (()=>{
// console.log("running after signup render")
// },[userInputField, toggle])


// useEffect(()=>{

// })


const userRegister = async()=>{
  const payload = userInputField
  const response =  await axios.post('http://localhost:8000/user/register', userInputField )
  console.log("response",response)
}



  return (
   <React.Fragment>
    <button className={toggle?'toggle-bg': 'toggle'} onClick={handleToggle}>Toggle Me</button>
 <div className= {toggle?'toggle-bg signup-container': 'toggle signup-container'}>
 <div className='form-heading'> User Signup Form</div>
   <form onSubmit={handleSubmit} className="form-field-wrapper">
  <CustomInput name="name" type="text" value ={userInputField.name} placeholder="Please Enter name" handleChange={handleOnChange} />
  <CustomInput name="email" type="email" value ={userInputField.email} placeholder="Please Enter email" handleChange={handleOnChange}/>
  <CustomInput name="password" type="password" value ={userInputField.password} placeholder="Please Enter password" handleChange={handleOnChange}/>
  <CustomInput name="confirmPassword" type="password" value ={userInputField.confirmPassword} placeholder="Please Enter confirmPassword" handleChange={handleOnChange}/>
  <button type='submit'> Submit</button>
   </form>
 </div>

   </React.Fragment>
  )
}
