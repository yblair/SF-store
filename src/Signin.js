import React, { useState } from 'react';
import { Redirect} from 'react-router-dom';
import Navigation from './Navigation';
import { signin, authenticate, isAuthenticated } from './apiCore';
import { API } from './config';
import "./Signin.css"


const Signin = ({setIsUser}) => {

  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false
  });

  const {email, password, loading, error, redirectToReferrer} = values;
  const {user} = isAuthenticated();

  const handleChange = nombre => event => {
    setValues({...values, error: false, [nombre]: event.target.value})
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({...values, error: false, loading: true})
     fetch(`${API}/login`, {
      method: "POST",
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json",
        
        
      },
      body: JSON.stringify({email,password})
      // user: 
    })
    .then(response => response.json())
  
       .then(data => {
        console.log('successssssssss',data)
        if (!data) {
          setValues({...values, error: error, loading:false});
          setIsUser(null)
        localStorage.removeItem("jwt")
        } else {
          if(data){        
            localStorage.setItem('jwt', JSON.stringify(data));
            
            setIsUser(data)
          }

        }
      }) .catch(e => {
        console.log('errorrrrr')
        setIsUser(null)
        localStorage.removeItem("jwt")
      })
  }


  const signInForm = () => (
    <form className="sign-box">
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange('email')}
          type="string"
          className="form-control"
          value={email}
          />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange('password')}
          type="password"
          className="form-control"
          value={password}
          />
      </div>
      <button onClick={clickSubmit} className="s-btn btn btn-primary">
        Sign In
      </button>
      
    </form>
  )

  const redirectUser = () => {
    if(redirectToReferrer) {
      if(user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />
      } else {
        return <Redirect to="/"/>
      }
    }
    if(isAuthenticated()) {
      return <Redirect to="/" />
    }
   
  }

  const showError = () => (
    <div className="alert alert-danget" style={{display: error ? '': 'none'}}>
      {error}
    </div>
  )

  const showLoading = () => (
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    )
  )

  return (
    <>
      <Navigation/>
      <div className="mt-5">
        <h4 className="text-center mb-5 text-white">Logueate para visualizar nuestro contenido </h4>
        {showError()}
        {showLoading()}
        {signInForm()}
        {redirectUser()}
      </div>
  </>
  )
}

export default Signin;
