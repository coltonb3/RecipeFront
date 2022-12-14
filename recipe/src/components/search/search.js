import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

const Search = () => {
    const [newName, setNewName] = useState ('');
    const [newTime, setNewTime] = useState ('');
    const [newImage, setNewImage] = useState ('');
    const [newAllergens, setNewAllergens] = useState ('');
    const [newFeatured, setNewFeatured] = useState (false);
    const handleNewName = (event) => {
        setNewName(event.target.value);
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
    
const [randomRecipe, setRandomRecipe] = useState();

const handleRandomRecipe = (event) =>{
    setRandomRecipe(event.target.value);
}
///calling 3rd party api..limited on amount of times can call per day// 
// const random = (event) => {
// method: 'GET',
// url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
// params: {tags: '' , number: '1'},
// headers: {
//   'X-RapidAPI-Key': '8b82edbe8cmsh897fc11d9dc323dp109647jsn5e02d5535f43',
//   'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'        }
// }
//       axios.request(random).then(function (response) {
//         handleRandomRecipe([])
//         console.log(response.data);
//     }).catch(function (error) {
//         console.error(error);
//     });
//     const handleNewInput = (event) => {
//         event.preventDefault();
//         axios.post(
//           'http://localhost:3000/',
//           {
//             title: newName,
//             readyInMinutes: newTime,
//             image: newImage,
//             allergens: newAllergens,
//             featured: newFeatured
//           }
//         ) . then(() => {
//             axios.get('http://localhost:3000/')
//             .then(response => {
//               setRandomRecipe(response.data)
//             })
//         })
//       }
    
    
 return (
 <div className='random'>
    <h1> Not sure what to make?</h1>
    <h3> Let us decide for you! </h3>

    <Button>Random Recipe </Button>
    <div className='container'>
    <div className="row text-center">
        <div className="col-md-4 card-container">
            <div className="card card-flip">
                <div className="front card-block">
                <span className="card-img-top fa"></span>
                <img src='#' alt=''/>
          <h4 className="card-title"></h4>
        </div>
        <div className="back card-block">
            <ul>
            <li></li>
            <li></li>
            </ul>
            </div>
      </div>
    </div>
  </div>
  </div>
 </div>
    )
}

export default Search
