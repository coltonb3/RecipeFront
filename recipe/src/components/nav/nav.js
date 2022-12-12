import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Container, Nav, NavDropdown , Button } from 'react-bootstrap'

const Nav1 = () => {
    return (
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
                <NavDropdown.Item href="#action/3.3">Add a Recipe</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Random Recipe 
                </NavDropdown.Item>
              </NavDropdown>
              <Container className="navForm">
              <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Search Recipes' aria-label='Search' />
            <Button>Search</Button>
          </form>
          </Container>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
export default Nav1



    
