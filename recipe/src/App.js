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
    { (event.target.checked === true) ? setNewFeatured(true) : setNewFeatured(false)}
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
  

  const handleEdit = (event, recipeData)=>{
    event.preventDefault();
    axios.put(`http://localhost:3000/${recipeData._id}`,
        {
          name: newName,
          time: newTime,
          image: newImage,
          allergens: newAllergens,
          featured: newFeatured

      }).then(()=>{
            axios.get('http://localhost:3000/').then((response)=>{
                    setRecipes(response.data)
                })
        })
  };

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

              

              <MyRecipes recipe={recipe}
              handleEdit={handleEdit}
              handleNewName={handleNewName}
              handleNewTime={handleNewTime}
              handleNewImage={handleNewImage}
              handleNewAllergens={handleNewAllergens}
              handleDelete={handleDelete}
              handleNewFeatured={handleNewFeatured} /> 
                            </React.Fragment>


          )})
        }
         </CardGroup>

       <Search />
       <section className='form'>
        
       </section>


<br/>

</Container>
  );
}

export default App;
