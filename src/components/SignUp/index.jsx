import React, { useState } from "react";
import Button from "../Button";
import "./signup.css";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    Password: "",
  });
  // const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = () => {
  //   console.log(inputs);
  //   console.log(Object.values(inputs.phoneNumber), 'kkk')
  //   // if (Object.values(inputs.phoneNumber).length === 0){
  //   //   setErrorMessage('Phone Number is Required')
  //   // }
  // };

  return (
    <div>
      <h2>Please fill the following to get started</h2>
      <div className='fieldsWrapper'>
        <label>Full Name</label>
        <input
          type='text'
          onChange={handleInputChange}
          value={inputs.name}
          name='name'
          className='inputField'
          placeholder='Enter your full name'
        />
        <label>Phone Number</label>
        <input
          type='text'
          onChange={handleInputChange}
          value={inputs.phoneNumber}
          name='phoneNumber'
          className='inputField'
          placeholder='Enter your phone number'
          // style={{border: errorMessage && '1px solid red'}}
        />
        {/* { errorMessage && <p>{errorMessage}</p>} */}
        <label>Email Address</label>
        <input
          type='email'
          onChange={handleInputChange}
          value={inputs.email}
          name='email'
          className='inputField'
          placeholder='Enter your Email Address'
        />
        <label>Password</label>
        <input
          type='password'
          onChange={handleInputChange}
          value={inputs.Password}
          name='Password'
          placeholder='Enter your Password'
          className='inputField'
        />
      </div>
      <div className='signInTextWrapper'>
        <p>Already have an account? <span>Sign In</span></p>
      </div>
      <div className='BtnWrapper'>
        <Button
          // handleClick={handleSubmit}
          BtnWidth='100px'
          BtnText='Submit'
          BtnBg='#e8c3d1'
          // disabled={
          //   inputs.name === "" ||
          //   inputs.email === "" ||
          //   inputs.password === "" ||
          //   inputs.phoneNumber === ""
          // }
        />
      </div>
    </div>
  );
};

export default SignUp;
