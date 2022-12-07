import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap'
import {BsBell,BsFileSpreadsheetFill} from "react-icons/bs"
import{FaMediumM } from "react-icons/fa"
import {GoHome} from "react-icons/go"
// import { NavLink} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import {MdOutlineContactSupport} from "react-icons/md"

function CollapsibleExample() {
  return (
    
    <Navbar collapseOnSelect expand="lg"  variant="light" style={{backgroundColor:"#e34f69a8"}}>
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">


            <Nav.Link href="#features">Your trial ends in 21 days</Nav.Link>
            <Button variant='light' className='recom' style={{marginLeft:"16px",marginRight:"2px"}}>Recommended features
            </Button>

            <Button variant='light' style={{marginRight:"2px",marginLeft:"20px"}}>Get started</Button>

            <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{marginLeft:"16px"}} >
        New
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <div className='header-right d-flex align-items-center ' >

    <input type="search"  placeholder= ' &nbsp;search' className='search-input'/> 
            &nbsp;
            &nbsp;
            <BsBell style={{fontSize:"23px"}}/>
            &nbsp;
            &nbsp;
            <MdOutlineContactSupport style={{fontSize:"26px"}}/>
            &nbsp;
            &nbsp;
            <BsFileSpreadsheetFill style={{fontSize:"21px"}}/>
            &nbsp;
            &nbsp;
            <GoHome style={{fontSize:"23px"}}/>
            &nbsp;
            &nbsp;
            <FaMediumM style={{fontSize:"23px"}}/>
            &nbsp;
            </div>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;