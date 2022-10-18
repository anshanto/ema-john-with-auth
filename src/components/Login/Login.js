import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='title'>LOGIN</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input name='email' type="email" placeholder='email' required />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='password' required />
            </form>
        </div>
    );
};

export default Login;