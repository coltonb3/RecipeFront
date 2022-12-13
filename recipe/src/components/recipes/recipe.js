import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Card, Navbar, Container, Button, Row, Col, CardGroup, Form, Modal} from 'react-bootstrap'

const MyRecipes = (props) => {
 
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);

  const handleShow = () => {
     setShow(true)
     console.log("click");
  }
    return (
      <>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>  <Form className="submitForm" onSubmit={ (event)=>{ props.handleEdit(event, props.recipe)}}>
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
                <Form.Control type="text" placeholder={props.recipe.image} onChange={props.handleNewImage}/><br/>
                </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> 
                <Form.Control type="text" placeholder="Allergens" onChange={props.handleNewAllergens} /><br/>
               </Form.Group>

                  Change Reservation Status:  <input type="checkbox" onChange={props.handleNewFeatured}/><br/> 
              
              </Form>       
              </Modal.Body>
        <Modal.Footer>
        <Button className="delete" onClick={ (event)=>{ props.handleDelete(props.recipe) } }>Delete</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
            <Button variant="primary" onClick={ (event) => {props.handleEdit(event,props.recipe)}}>Submit Changes</Button>
        </Modal.Footer>
      </Modal>
    
<div className='container'>
    <div className="row text-center">
        <div className="col-md-4 card-container">
            <div className="card card-flip">
                <div className="front card-block">
                <span className="card-img-top fa"></span>
                <img src={props.recipe.image} alt=''/>
          <h4 className="card-title">{props.recipe.name}</h4>
        </div>
        <div className="back card-block">
        
        <Button type='button' variant="primary" onClick={handleShow}>
        Make Changes
        </Button>
            <ul>
            <li>{props.recipe.time}</li>
            <li>{props.recipe.allergens}</li>
            </ul>

             <br/>
        </div>
      </div>
    </div>
  </div>
</div>
</>
    )
}
export default MyRecipes;
