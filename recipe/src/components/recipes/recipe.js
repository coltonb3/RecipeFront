import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-bootstrap'

const Recipe = () => {
    return (
        
<div className='container'>
    <div className="row text-center">
        <div className="col-md-4 card-container">
            <div className="card card-flip">
                <div className="front card-block">
                <span className="card-img-top fa"></span>
                <img src="https://www.amtrak.com/content/dam/projects/dotcom/english/public/images/heros/Route_SunsetLimited_HeroBanner_2_0,.jpg/_jcr_content/renditions/cq5dam.web.2125.1195.jpeg" alt=''/>
          <h4 className="card-title">Title</h4>
        </div>
        <div className="back card-block">
            <ul>
            <small>Test</small>
            <small>Test</small>
            <small>Test</small>
            <small>Test</small>
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
export default Recipe
