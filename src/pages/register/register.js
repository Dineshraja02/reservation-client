import React from 'react';
import {Icon} from "@iconify/react";
import "./register.css";
import validateInfo from './validateForm';
import useRegisterForm from './useRegisterForm';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
    const navigate=useNavigate();
    const {handleChange,handleSubmit,errors,values}=useRegisterForm(validateInfo,props)
    return (
        <div className='register_page'>
            <h1 className="register_Header1">RAILWAY TOURISM CORPORATION</h1>
                <form className='register' onSubmit={handleSubmit}>
                <Icon icon="emojione-monotone:train" className='logo' />       
                <h1 className="register_Header">Welcome to RTC</h1>
                <div className='register_Input'>
                    <input
                    className='register_Inputfields'
                    name='username'
                    value={values.username}
                    onChange={handleChange}
                    type="text"
                    placeholder='Username'>
                    </input>
                    <label htmlFor='username' className='label_Icon'>
                    <Icon icon="ant-design:user-outlined" />  
                    </label>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='register_Input'>
                    <input
                    className='register_Inputfields'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    type="email"
                    placeholder='Email'>
                    </input >
                    <label className='label_Icon'>
                    <Icon icon="carbon:email" />
                    </label>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='register_Input'>
                    <input
                    className='register_Inputfields'
                    name='password'
                    value={values.password}
                    type="password"
                    onChange={handleChange}
                    placeholder='Enter Password'>
                    </input >
                    <label className='label_Icon'>
                    <Icon icon="codicon:key" />
                    </label>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className='register_Input'>
                    <input
                    className='register_Inputfields'
                    name='password2'
                    value={values.password2}
                    type="password"
                    onChange={handleChange}
                    placeholder='Re-Enter Password'>
                    </input >
                    <label className='label_Icon'>
                    <Icon icon="codicon:key" />
                    </label>
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button type="submit"
                className="register_Submit">Sign Up</button>
                <p className='register_Switch'>Already have a Account?<button onClick={()=>navigate("/")}>Register</button></p>
                </form>
    </div>
    )
}

export default Register
