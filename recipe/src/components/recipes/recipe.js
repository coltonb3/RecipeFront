import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-bootstrap'

const MyRecipes = (props) => {
  
    return (
        
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
            <ul>
            <li>{props.recipe.time}</li>
            <li>{props.recipe.allergens}</li>
            </ul>
        {/* delete button works within the flip card show more works to trigger modal can not push data  */}
        {/* <button onClick={ () =>{props.handleDelete(props.location)}}>Delete</button>
        <button className='showMore' onClick={() =>{handleShowModal()}}>Show More</button>
        {showModal ? <Modal location={props.location} setLocation={props.setLocation} showModal={showModal} handleCloseModal={handleCloseModal} handleForm={props.handleForm} />: ''} */}
      <>  </>
        {/* <Edit location={props.location} setLocation={props.setLocation}/>  */}
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
export default MyRecipes;
