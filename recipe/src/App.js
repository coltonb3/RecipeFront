import React, {useState, useEffect} from 'react'
import {Card, Navbar,Container,Button,Row,Col, CardGroup, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginForm from './LoginForm'
import NewUserForm from './NewUserForm'
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

  const handleCreateUser = (userObj) => {
    axios.post('http://localhost:3000/createaccount', userObj).then((response) => {
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
    axios.post('http://localhost:3000/login', userObj).then((response) => {
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
    <>
    <div className="App">
      <div>
        {toggleLogout ?
          <Button onClick={handleLogout} className='logoutBtn'>Logout</Button> :
          <div className='appFormDiv'>
            {toggleLogin ?
            <LoginForm handleLogin={handleLogin} toggleError={toggleError} errorMessage={errorMessage}/>
            :
            <NewUserForm handleCreateUser={handleCreateUser} toggleError={toggleError} errorMessage={errorMessage}/>
            }
            <Button onClick={handleToggleForm} className='accountBtn'>{toggleLogin ? 'Need an account?' : 'Already have an account?'}</Button>
          </div>
        }

      </div>
      {currentUser.username ?
        <div className='loggedInDiv'>
       <Container>
       <Nav   handleEdit={handleEdit}
              handleNewName={handleNewName}
              handleNewTime={handleNewTime}
              handleNewImage={handleNewImage}
              handleNewAllergens={handleNewAllergens}
              handleDelete={handleDelete}
              handleNewFeatured={handleNewFeatured} handleNewInput={handleNewInput} PopOut={PopOut} />
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
    </Container>
    </div>
    :
    null
  }
</div>
</>
);
}

export default App;
