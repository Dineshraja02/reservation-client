import React from 'react';
import "./login.css";
import useLoginForm from "./useLoginForm";
import validateInfo from './validate';
import {Icon} from "@iconify/react";

const Login = () => {
    const {values,handleChange,handleSubmit,errors}=useLoginForm(validateInfo);
    return (
        <div className='login_page'>
                <h1 className="login_Header1">RAILWAY TOURISM CORPORATION</h1>
                <form className='login' onSubmit={handleSubmit}>
                <Icon icon="emojione-monotone:train" className='logo' />             
                <h1 className="login_Header">Welcome to RTC</h1>
                <div className='login_Input'>
                <input
                className='login_Inputfields'
                placeholder='Username'
                name='email'
                type="email"
                value={values.username}
                onChange={handleChange}
                >
                </input>
                <label htmlFor='username' className='label_Icon'>
                <Icon icon="ant-design:user-outlined" />
                </label>
                {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='login_Input'>
                <input
                 className='login_Inputfields'
                name="password"
                placeholder='Password'
                type='password'
                value={values.password}
                onChange={handleChange}>
                </input >
                <label className='label_Icon'>
                <Icon icon="bytesize:lock" />
                </label>
                {errors.password && <p>{errors.password}</p>}
                </div>
                <button type="submit"
                className="login_Submit">Sign In</button>
                <p className='register_Switch'>Dont have a Account?<a href="/Register">Register</a></p>
                </form>
        </div>
    )
}

export default Login;
