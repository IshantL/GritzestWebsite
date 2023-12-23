import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavContainer, Row, Col, Button,Container,Nav,NavDropdown,Navbar } from "react-bootstrap";
import Home from './components/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{color:"red",fontStyle:"italic"}}><h1>Gritzest</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About us</Nav.Link>
            <Nav.Link href="#About">Our team</Nav.Link>
            <Nav.Link href="#About">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <Home/>  
      </header>
    </div>
  );
}

export default App;
