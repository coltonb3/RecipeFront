import React, { useState } from 'react'
import {Card, Navbar,Container,Button,Row,Col, CardGroup, Form} from 'react-bootstrap'
import './App.css';
import './index.css';

const User = (props) => {

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
    <>
      <div className='bg'>
        <h1>RecipeBook</h1>
            <Form class="submit" onSubmit={triggerCreateUser} className='inputForm'>
                <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label class='log'>Create New User</Form.Label>
                <Form.Control type="text" placeholder="Username" class="textInput" onChange={(event)=>{setUsername(event.target.value)}}/>
                </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label class='log'>Password</Form.Label>
                 <Form.Control type="password" placeholder="Password" className='textInput'  onChange={(event)=> {setPassword(event.target.value)}}/>
                </Form.Group>
            {props.toggleError ?
            <h5 className='errorMsg'>{props.errorMessage}</h5>
            
             :
            null
            }
     <Button input type='submit' value='Login' className='submitBtn'>Create Account</Button>
     <Button onClick={props.handleToggleForm} className='accountBtn'>{props.toggleLogin ? null : 'Already Have an Account?' }</Button>

      </Form>
      </div>
      </>
  );
}

export default User;