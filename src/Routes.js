import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


// View Components
//import Home from './components/Home';
import Signup from './Signup'
import Signin from './Signin'
import App from './App';




// Functional Components

const Routes = () => {

 


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        
        
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;