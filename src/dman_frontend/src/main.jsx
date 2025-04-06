import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AuthClient } from "@dfinity/auth-client";

const init = async ()=>{
  const authClient = await AuthClient.create();

  // expiry time is -> 8 days
  if(await authClient.isAuthenticated()){
    handleAuthenticated(authClient)
  }
  else{
    //Using the existing nns authenticator.
    await authClient.login({
      identityProvider: `https://identity.ic0.app`,
      onSuccess: ()=>{ 
        handleAuthenticated(authClient)
      }
    })
  }
}

const handleAuthenticated = async (authClient) =>{
  
  const identity = await authClient.getIdentity();
  const userPrincipal = identity.getPrincipal().toString();

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App loggedInPrincipal = {userPrincipal}/>
    </React.StrictMode>,
  );

}

init();
