import React from 'react'
import Form from 'react-bootstrap/Form';

const New =() => { 
    
  return (
    <Form onSubmit={handleNewInput}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Name of Recipe" onChange={handleNewName} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Cooking Time </Form.Label>
      <Form.Control type="text" placeholder="Cooking Time" onChange={handleNewTime} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Allergens</Form.Label>
      <Form.Control type="text" placeholder="Allergens" onChange={handleNewAllergens} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Got any pictures of the completed meal?</Form.Label>
      <Form.Control type="text" placeholder="Image" onChange={handleNewImage} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Any additional information we should know</Form.Label>
      <Form.Control as="textarea" rows={3} onChange={handleNewDetails} />
    </Form.Group>
        <input type="submit" value="Add new recipe"/>
  </Form>
  );
}

export default New; 