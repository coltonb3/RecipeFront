import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Container, Nav, NavDropdown , Button, Form, Modal } from 'react-bootstrap'
import New from '../New/new'
import PopOut from '../modal/modal'
import Login from '../../LoginForm'
import User from '../../NewUserForm'
import axios from 'axios'

const Nav1 = (props) => {
 
  const [show, setShow] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseLogin = () => setLoginShow(false);

  const [toggleLogin, setToggleLogin] = useState(true)
  const [toggleError, setToggleError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [toggleLogout, setToggleLogout] = useState(false)
  const [currentUser, setCurrentUser] = useState({})


 

  const handleLogout = () => {
    setCurrentUser({})
    handleToggleLogout()
  }
  const handleToggleLogout = () => {
    if(toggleLogout) {
      setToggleLogout(false)
    } else {
      setToggleLogout(true)
    }
  }
  const handleShow = () => {
     setShow(true)
     console.log("click");
    }
  const handleShowLogin = () => {
    setLoginShow(true)  
    console.log("click2");
    }

  



    

    return (
      <div className='navBar'>
        
        <Navbar className="fixed-top" bg="light" expand="lg">
         <Container>
         <h2>RecipeBook</h2>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Links" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Add a Recipe</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Random Recipe 
                </NavDropdown.Item>
              </NavDropdown>

{/* ////Login Modal/// */}
              {/* <Button onClick={handleShowLogin}>Login</Button>
              <div className = 'loginModal'>
              <Modal loginShow={loginShow} onHide={handleCloseLogin}>
              <Modal.Header closeButton>
                  <Modal.Title>Login</Modal.Title>
                  </Modal.Header>
              <Modal.Body>  
                <Form className="submitForm" onSubmit={ (event)=>{props.handleNewInput(event, props.recipe)}}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Username </Form.Label>
                  <Form.Control type="text" placeholder="Name of Recipe" onChange={props.handleNewName} /><br/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Password </Form.Label>
                  <Form.Control type="text" placeholder="Cooking Time" onChange={props.handleNewTime} /><br/>
                  </Form.Group>
                </Form>
              </Modal.Body>
                   <Modal.Footer>
                        <Button variant="primary" onClick={handleShowLogin}>Login</Button>
                   </Modal.Footer>
              </Modal>
              </div> */}
{/* ////Add Recipe Modal///// */}
        <Button type="button" class="btn btn-outline-primary" className='recipeBtn' onClick={handleShow}>Add Recipe </Button> 
        <Button type="button" class="btn btn-outline-primary" onClick={props.handleLogout} className='logoutBtn'>Logout</Button> 
         
         
         
          <div className='add modal'>
                        {/* <Button onClick={handleShow}>Add Recipe </Button> */}
             <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
             <Form class="submitForm" onSubmit={ (event)=>{props.handleNewInput(event, props.recipe)}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name of Recipe" onChange={props.handleNewName} /><br/>
                </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Cooking Time </Form.Label>
               <Form.Control type="text" placeholder="Cooking Time" onChange={props.handleNewTime} /><br/>
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="text" placeholder='image' onChange={props.handleNewImage}/><br/>
                </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> 
                <Form.Control type="text" placeholder="Allergens" onChange={props.handleNewAllergens} /><br/>
               </Form.Group>

                  Change Reservation Status:  <input type="checkbox" onChange={props.handleNewFeatured}/><br/> 
                  <input type="submit" value="Add Recipe"/>
              </Form>
              </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>


          
        
        
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      </div>
    );
  }
export default Nav1



    
