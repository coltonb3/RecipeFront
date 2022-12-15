import React, {useState, useEffect} from 'react'
import {Card, Navbar,Container,Button,Row,Col, CardGroup, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './LoginForm'
import User from './NewUserForm'
import Nav from './components/nav/nav'
import MyRecipes from './components/recipes/recipe'
import Search from './components/search/search'
import axios from 'axios'
import PopOut from './components/modal/modal'

const App = () => {

  const [recipes, setRecipes] = useState ([]);
  const [newName, setNewName] = useState ('');
  const [newTime, setNewTime] = useState ('');
  const [newImage, setNewImage] = useState ('');
  const [newAllergens, setNewAllergens] = useState ('');
  const [newFeatured, setNewFeatured] = useState (false);
  const [newDetails, setNewDetails] = useState ('');
  const [toggleLogin, setToggleLogin] = useState(true)
  const [toggleError, setToggleError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [toggleLogout, setToggleLogout] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  
  const [search, setSearch] = useState('');
  const [showResults, setShowResults] = useState();



  
   

    const handleNewSearch = (event) => {
      setSearch (event.target.value);
    }

    const handleShowSearch = (event) => {
      event.preventDefault();
      setShowResults(true)
      console.log(showResults)
    }

    const handleCloseSearch = (event) => {
      event.preventDefault();
      setShowResults(false)
      console.log(showResults)
    }


  const handleCreateUser = (userObj) => {
    axios.post('https://serene-dawn-88718.herokuapp.com/createaccount', userObj).then((response) => {
      if(response.data.username){
        console.log(response);
        setToggleError(false)
        setErrorMessage('')
        setCurrentUser(response.data)
        handleToggleLogout()
      } else {
        setErrorMessage(response.data)
        setToggleError(true)
      }
    })
  }
  const handleLogin = (userObj) => {
      console.log(userObj);
    axios.post('https://serene-dawn-88718.herokuapp.com/login', userObj).then((response) => {
      if(response.data.username){
        console.log(response);
        setToggleError(false)
        setErrorMessage('')
        setCurrentUser(response.data)
        handleToggleLogout()
      } else {
        console.log(response);
        setToggleError(true)
        setErrorMessage(response.data)
      }
    })
  }
  const handleLogout = () => {
    setCurrentUser({})
    handleToggleLogout()
  }
  const handleToggleForm = () => {
    setToggleError(false)
    if(toggleLogin === true) {
      setToggleLogin(false)
    } else {
      setToggleLogin(true)
    }
  }
  const handleToggleLogout = () => {
    if(toggleLogout) {
      setToggleLogout(false)
    } else {
      setToggleLogout(true)
    }
  }
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
      'https://serene-dawn-88718.herokuapp.com/',
      {
        name: newName,
        time: newTime,
        image: newImage,
        allergens: newAllergens,
        featured: newFeatured,
        details: newDetails
      }
    ) . then(() => {
        axios.get('https://serene-dawn-88718.herokuapp.com/')
        .then(response => {
          setRecipes(response.data)
        })
    })
  }
  
  const handleEdit = (event, recipeData)=>{
    event.preventDefault();
    axios.put(`https://serene-dawn-88718.herokuapp.com/${recipeData._id}`,
        {
          name: newName,
          time: newTime,
          image: newImage,
          allergens: newAllergens,
          featured: newFeatured

      }).then(()=>{
            axios.get('https://serene-dawn-88718.herokuapp.com/').then((response)=>{
                    setRecipes(response.data)
                })
        })
  };
    const handleDelete = (recipeData) => {
      axios.delete(`https://serene-dawn-88718.herokuapp.com/${recipeData._id}`)
      .then(() =>{

          axios
            .get('https://serene-dawn-88718.herokuapp.com/')
            .then((response) => {
                setRecipes(response.data);
        })
      })
    }

useEffect(() => {
  axios.get('https://serene-dawn-88718.herokuapp.com/').then((response) => {
      setRecipes(response.data);
  })
},[])

  return ( 
   <main>
    <div class='bg-secondary text-white' className="App">
      <div className='loggedOutDiv'> 
       
        {toggleLogout ?
          <Button type="button" class="btn btn-outline-primary" onClick={handleLogout} className='logoutBtn'>Logout</Button> :
          <div className='appFormDiv'>
            {toggleLogin ?
            <Login handleLogin={handleLogin} toggleError={toggleError} errorMessage={errorMessage}/>
            :
            <User handleCreateUser={handleCreateUser} toggleError={toggleError} errorMessage={errorMessage}/>
            }
            <Button onClick={handleToggleForm} className='accountBtn'>{toggleLogin ? 'Need an account?' : 'Already have an account?'}</Button>
          </div>
        }
      </div>
      {currentUser.username ?
        <div className='loggedInDiv'>
           <Container>
           {recipes.map((recipe) =>{
                  return (
                    <React.Fragment key ={recipe._id}>  
               <Nav   
                      recipe={recipe}
                      handleEdit={handleEdit}
                      handleNewName={handleNewName}
                      handleNewTime={handleNewTime}
                      handleNewImage={handleNewImage}
                      handleNewAllergens={handleNewAllergens}
                      handleDelete={handleDelete}
                      handleLogout={handleLogout}
                      handleNewFeatured={handleNewFeatured} handleNewInput={handleNewInput} PopOut={PopOut} />
               </React.Fragment>
               )
               })}

          <Container className='search'>
          
            <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Search Recipes' onChange={handleNewSearch} />
            <Button type='button' variant='success' className='search-btn' value="Search"  onClick={handleShowSearch}> Search </Button>

          </form>
                  
          </Container>
          
         { showResults === true ?
          
          <Container className='results'>
            {recipes.map((recipe) => {
              return (
                <>
                 { search === recipe.name ? 

                 
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
               :
               
               null
                
                }

                </>
              )

            })}
           </Container>

           :

           null

          }

              <CardGroup>
              {recipes.map((recipe) =>{
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
           </Container>
           
           


        </div>
          :
          null
        }
    </div>
   </main>
 )
};

export default App;