import {Card, Navbar,Container,Button,Row,Col, CardGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/nav/nav'
import Recipe from './components/recipes/recipe'


function App() {

  return (
   <Container>
           <Nav/>
   
        <p> TEST</p>
<br/>
    <CardGroup>
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </CardGroup>
</Container>
  );
}

export default App;
