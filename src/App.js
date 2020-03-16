import React from 'react';
import './App.css';
import Auth from './Components/Auth/Auth';
import { Button } from 'reactstrap';
import Landing from './Components/BASIC/Landing/Landing';

function App() {
  const [sessionToken, setSessionToken] = React.useState('')

  const updateToken = (token) => {
    localStorage.setItem("token", token)
    setSessionToken(token)
  }

  function findToken(){
    if(localStorage.getItem('token') != null && localStorage.getItem('token') != ''){
      setSessionToken(localStorage.getItem('token'))
    }
    else {
      localStorage.setItem('token', 'no user')
      setSessionToken('')
    }
  }

  function clearToken(){
    localStorage.setItem('token', '')
    setSessionToken('')
  }
  
  React.useEffect(() => {
    findToken()
  }, [])

  function protectedViews() {
    return sessionToken !== '' && sessionToken !== null && localStorage.getItem('token') !== 'undefined' && sessionToken == localStorage.getItem('token') ? <Landing clearToken={clearToken} /> : <Auth updateToken={updateToken} /> 
  }

  return (
    <React.Fragment>
      {protectedViews()}
    </React.Fragment>
  );
}

export default App;
