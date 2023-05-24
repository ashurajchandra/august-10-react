
import Counter from './Component/Counter/Counter';
import Login from './Component/Login/Login';
import Signup from './Component/SignupForm/Signup';
import {Routes, Route, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import {checkingUserAuthentication} from "./verifyToken1";
import Post from './Component/Post/Post';

function App() {
  const {isAuthenticated, setIsAuthenticated} = useState(checkingUserAuthentication())
  const navigate = useNavigate()

  useEffect(()=>{
   if(isAuthenticated){
    navigate("/")
   }
  //  else{
  //   navigate("/")
  //  }
  },[isAuthenticated])

  console.log("checkingUserAuthentication",checkingUserAuthentication())
  return (
    <div className="App">
    {/* <h1>Hello react</h1> */}
    {/* <RegisterForm/> */}
      {/* <Counter/> */}
      {isAuthenticated ? <Post/>:
      <Routes>
        <Route exact  path='/register' element={<Signup/>}/>  
        <Route  exact  path='/login' element={<Login/>} />
        {/* <Route  exact  path='/'  element={<h1>Welcome to home page</h1>}/> */}
      </Routes>
}
      
      {/* <Login/> */}
    </div>
  );
}

export default App;
