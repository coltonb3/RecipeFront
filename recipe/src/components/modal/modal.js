// 

// importing through the recipe component was not working for now will move to the recipe component 
// import React, {useState, useEffect} from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
// import {Card, Navbar, Container, Button, Row, Col, CardGroup, Form, Modal} from 'react-bootstrap'


// const PopOut = (props) => {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);

//     return (
//         <div>
//              <Modal show={props.show} onHide={props.handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Recipe</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>  <Form class="submitForm" onSubmit={ (event)=>{ props.handleEdit(event, props.recipe)}}>
//                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control type="text" placeholder="Name of Recipe" onChange={props.handleNewName} /><br/>
//                </Form.Group>
//                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                 <Form.Label>Cooking Time </Form.Label>
//                 <Form.Control type="text" placeholder="Cooking Time" onChange={props.handleNewTime} /><br/>
//                </Form.Group>
//                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                 <Form.Label>Photo</Form.Label>
//                 <Form.Control type="text" placeholder={props.recipe.image} onChange={props.handleNewImage}/><br/>
//                 </Form.Group>
//                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> 
//                 <Form.Control type="text" placeholder="Allergens" onChange={props.handleNewAllergens} /><br/>
//                </Form.Group>

//                   Change Reservation Status:  <input type="checkbox" onChange={props.handleNewFeatured}/><br/> 
//                   <input type="submit" value="submit edits"/>
//               </Form>
                
//               <button class="delete" onClick={ (event)=>{ props.handleDelete(props.recipe) } }>Delete</button></Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={props.handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={props.handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//         </div>
//     )
// }

// export default PopOut;
