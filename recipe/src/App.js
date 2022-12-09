import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/nav/nav'
import Button from 'react-bootstrap/Button';
import {Navbar} from 'react-bootstrap'
function App() {

  return (
    <div className="App">
        <Nav/>

        <p> TEST</p>
        <Button>Test</Button>
        <Button>Test</Button>

    </div>
  );
}

export default App;
