import React from "react";
import "./RegisterForm.css";

export default function RegisterForm() {
  const [userInputValues, setUserInputValues] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //sending data to backend server 
  };

  const handleInputOnChange = (e) => {
    // console.log("event", e.target.value)
    //password: 'a123b'
    setUserInputValues((prevState) => ({...prevState, [e.target.name]: e.target.value }));
  };

  console.log("userInputValues", userInputValues);
  return (
    <React.Fragment>
      <form className='form-container' onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='enter your email'
          value={userInputValues?.email}
          name='email'
          onChange={handleInputOnChange}
        />
        <input
          type='text'
          placeholder='enter your name'
          value={userInputValues?.name}
          name='name'
          onChange={handleInputOnChange}
        />
        <input
          type='password'
          placeholder='enter your password'
          value={userInputValues?.password}
          name='password'
          onChange={handleInputOnChange}
        />
        <input
          type='password'
          placeholder='enter your password'
          value={userInputValues?.confirmPassword}
          name='confirmPassword'
          onChange={handleInputOnChange}
        />
        <input type='submit' />
      </form>
    </React.Fragment>
  );
}
