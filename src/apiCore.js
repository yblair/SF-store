import { API } from './config';




export const signin = async (user) => {
   await fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Accept": 'application/json',
      "Content-Type": "application/json",
     
      
    },
    body: JSON.stringify(user)
    // user: 
  })
    .then(response => {
      
       console.log(response);
    })
    .catch(err => {
      console.log(err);
    })
};

export const signup = async (user) => {
    await fetch(`${API}/registrarse`, { 
    method: "POST",
    headers: {
      "Accept": 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
 
  })
    .then(response => {
      
      console.log(response)
      
    })
    
    .catch(err => {
      console.log(err);
    })
  };


export const authenticate = (data, next) => {
  if(typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    
  }
}



export const isAuthenticated = () => {
  if(typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
    // return localStorage.getItem('jwt')
  }
    return false;
}
//  add this to route later



// ${userId}
