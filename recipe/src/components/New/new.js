import React, {useState} from 'react'
import {Form, Modal, Button} from 'react-bootstrap';

const New =(props) => { 
  const [show, setShow] = useState(false);
const handleClose = () => setShow(false);

  const handleShow = () => {
     setShow(true)
     console.log("click");
  }
    
  return (
   
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Recipe</Modal.Title>
    </Modal.Header>
    <Modal.Body>  <Form class="submitForm" onSubmit={ (event)=>{ props.handleEdit(event, props.recipe)}}>
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
    <Button class="delete" onClick={ (event)=>{ props.handleDelete(props.recipe) } }>Delete</Button>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
        <Button variant="primary" onClick={ (event) => {props.handleEdit(event,props.recipe)}}>Submit Changes</Button>
    </Modal.Footer>
  </Modal>
  );
}

export default New; 