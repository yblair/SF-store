import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation'

import "./Signup.css"
import { signup } from './apiCore';

const Signup = () => {
  const [values, setValues] = useState({
    nombre: '',
    email: '',
    password: '',
    error: '',
    success: false
  })
  

  const { nombre, email, password, success, error } = values

  const handleChange = nombre => event => {
    setValues({...values, error: false, [nombre]: event.target.value }) 
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false })
    signup({ nombre, email, password }).then(data => { 
      if (!data) {
        setValues({ ...values, error:error, success: false })
      } else {
        setValues({
          ...values,
          nombre: '',
          email: '',
          password: '',
          error: '',
          success: true
        })
      }
    })
  }

  const signUpForm = () => (
    <form className="sign-box">
      <div className='form-group'>
        <label className='text-muted'>Nombre</label>
        <input
          onChange={handleChange('nombre')}
          value={nombre}
          type='string'
          className='form-control'/>
      </div>
      <div className='form-group'>
        <label className='text-muted'>email</label>
        <input
          onChange={handleChange('email')}
          type='string'
          value={email}
          className='form-control'/>
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          onChange={handleChange('password')}
          value={password}
          type='password'
          className='form-control'/>
      </div>
      <button onClick={clickSubmit} className='btn btn-primary'>
        Sign Up
      </button>
    </form>
  );

  const showError = () => (
    <div className='alert alert-danger' style={{ display: error ? '' : 'none' }}>
      {error}
    </div>
  )

  const showSuccess = () => (
    <div className='alert alert-info' style={{display: success ? '':'none'}}>  New Account Successfully Created You can now
      <Link to='/signin'>Sign in</Link>
    </div>
  )

  return (
    <>
      <Navigation/>
      <div className="mt-5">
        <h4 className="text-center mb-5">Signup form</h4>
        {showError()}
        {showSuccess()}
        {signUpForm()}
      </div>
    </>
  )
}

export default Signup;
