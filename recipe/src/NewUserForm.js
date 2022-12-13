import React, { useState } from 'react'
import './App.css';

function App(props) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const triggerCreateUser = (event) => {
    event.preventDefault()
    let userObj = {
      username: username,
      password: password
    }
    props.handleCreateUser(userObj)
  }

  return (
    <div className="App formContainer">
      <h1 className='formTitle'>Create an Account</h1>
      <form onSubmit={triggerCreateUser} className='inputForm'>
        <input type='text' placeholder='username' className='textInput' onChange={(event)=> {setUsername(event.target.value)}}/>
        <input type='password' placeholder='password' className='textInput' onChange={(event)=> {setPassword(event.target.value)}}/>
        {props.toggleError ?
          <h5 className='errorMsg'>{props.errorMessage}</h5>
          :
          null
        }
        <input type='submit' value='Register' className='submitBtn'/>
      </form>
    </div>
  );
}

export default App;