import React, {useState, useEffect} from 'react'
import {Card, Navbar,Container,Button,Row,Col, CardGroup, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Nav from './components/nav/nav'
import MyRecipes from './components/recipes/recipe'
import Search from './components/search/search'
import axios from 'axios'

const App = () => {

  const [recipes, setRecipes] = useState ([]);
  const [newName, setNewName] = useState ('');
  const [newTime, setNewTime] = useState ('');
  const [newImage, setNewImage] = useState ('');
  const [newAllergens, setNewAllergens] = useState ('');
  const [newFeatured, setNewFeatured] = useState (false);
  const [newDetails, setNewDetails] = useState ('');

const handleNewRecipe = (event) => {
      setRecipes (event.target.value);
  }

  const handleNewName = (event) => {
    setNewName(event.target.value);
}
const handleNewDetails = (event) => {
    setNewDetails(event.target.value);
}

  const handleNewTime = (event) => {
  setNewTime (event.target.value);
}

  const handleNewImage  = (event) => {
  setNewImage (event.target.value);
}

  const handleNewAllergens = (event) => {
  setNewAllergens (event.target.value);
}

  const handleNewFeatured = (event) => {
  setNewFeatured (event.target.value);
}

  const handleNewInput = (event) => {
    event.preventDefault();
    axios.post(
      'http://localhost:3000/',
      {
        name: newName,
        time: newTime,
        image: newImage,
        allergens: newAllergens,
        featured: newFeatured,
        details: newDetails
      }
    ) . then(() => {
        axios.get('http://localhost:3000/')
        .then(response => {
          setRecipes(response.data)
        })
    })
  }
  const handleForm = (event) => {
    event.preventDefault();
    axios.put(
      `https://localhost:3000//${recipes._id}`,
           {
                 name: newName,
                 species: newTime,
                 breed: newAllergens,
                 image: newImage,
                 details: newDetails
             }
         )

     .then(() => {
      newName('');
      newTime('');
      newAllergens('');
      newImage('');
      newDetails('');
     })
    }
  

    const handleDelete = (recipeData) => {
      axios.delete(`http://localhost:3000/${recipeData._id}`)
      .then(() =>{

          axios
            .get('http://localhost:3000/')
            .then((response) => {
                setRecipes(response.data);
        })
      })
    }


useEffect(() => {
  axios.get('http://localhost:3000/').then((response) => {
      setRecipes(response.data);
  })
},[])



  return ( 
   <Container>
           <Nav/>
           <CardGroup>
      {
        recipes.map((recipe) =>{
          return (
            <React.Fragment key ={recipe._id}>
              <MyRecipes recipe={recipe}/>
               
              </React.Fragment>
          )})
        }
          </CardGroup>
       <Search />

       <section className='form'>
        <h3>Share your favorite Recipe</h3>
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

       </section>


<br/>

</Container>
  );
}

export default App;
