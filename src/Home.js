import React, { useEffect, useState } from 'react';
import Main from './App';
import Signin from './Signin';






const Home = () => {

  const [isUser,setIsUser] = useState(null)
  useEffect(()=>{
   const user =  localStorage.getItem("jwt")
   
   if(user){
    setIsUser(JSON.parse(user))
   }

     
   
  }, [])

 


  return (
    <div>
    {
      isUser ? <Main isUser={isUser} setIsUser= {setIsUser} /> : <Signin setIsUser={setIsUser}/>
    }
    </div>
  )
 
}

export default Home;