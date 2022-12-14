import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Container, Nav, NavDropdown , Button, Form, Modal } from 'react-bootstrap'
import New from '../New/new'
import PopOut from '../modal/modal'

const Nav1 = (props) => {
 
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState('');

  const handleClose = () => setShow(false);
  
    const handleShow = () => {
       setShow(true)
       console.log("click");
    }

    const handleNewSearch = (event) => {
      setSearch(event.target.value);
    }

    const returnNewSearch = (event, data) =>{
      console.log(data)
      // { search === data ? setResults(data) : null}
      
    }



    

    return (
      <div>
        <Navbar className="fixed-top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Recipes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Filter" id="basic-nav-dropdown">
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
              <Button onClick={handleShow}>Add Recipe </Button>
          <div>
             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>  <Form class="submitForm" onSubmit={ (event)=>{props.handleNewInput(event, props.recipe.name)}}>
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
              <Container className="navForm">
              <form className='d-flex input-group w-auto' onSubmit={ (event)=>{returnNewSearch(event, props.recipe)}}>
            <input type='search' className='form-control' placeholder='Search Recipes' onChange={handleNewSearch} />
            <input type="submit" value="Search"/>

          </form>
          </Container>
        
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      </div>
    );
  }
export default Nav1



    
