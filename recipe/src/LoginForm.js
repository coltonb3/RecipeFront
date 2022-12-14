import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap' 
import './index.css';

import './App.css';

function App(props) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const triggerLogin = (event) => {
    event.preventDefault()
    let userObj = {
      username: username,
      password: password
    }
    props.handleLogin(userObj)
  }


  return (
    <>
     <div className="bg">
    <Form class="submit" onSubmit={triggerLogin} className='inputForm'>
    <Form.Group className="mb-3" controlId="formBasic">
      <Form.Label>Login</Form.Label>
      <Form.Control type="text" placeholder="Username" class="textInput" onChange={(event)=>{setUsername(event.target.value)}}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" className='textInput'  onChange={(event)=> {setPassword(event.target.value)}}/>
    </Form.Group>

      {/* <form onSubmit={triggerLogin} className='inputForm'> */}
        {/* <input type='text' placeholder='username' className='textInput' onChange={(event)=> {setUsername(event.target.value)}}/> */}
        {/* <input type='password' placeholder='password' className='textInput' onChange={(event)=> {setPassword(event.target.value)}}/> */}
        {props.toggleError ?
          <h5 className='errorMsg'>{props.errorMessage}</h5>
          :
          null
        }
        <Button input type='submit' value='Login' className='submitBtn'>Login</Button>
        </Form>
      {/* </form> */}
      </div>
    </>
  );
}


export default App;