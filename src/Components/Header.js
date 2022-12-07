import React from 'react'
import { Button } from 'react-bootstrap'
import {BsBell,BsFileSpreadsheetFill} from "react-icons/bs"
import{FaMediumM } from "react-icons/fa"
import {GoHome} from "react-icons/go"
import { NavLink} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import {MdOutlineContactSupport} from "react-icons/md"

function Header() {
  return (
    <div  className='header-wrapper d-flex align-items-center'style={{height:"65px",padding:"0 10px",fontSize:"20px",backgroundColor:"rgb(255 87 116 / 34%)",justifyContent:"space-between"}} >

        <div className="header-logo">Dashboard</div>

        <div className='header-right d-flex align-items-center ' >
            <div> <NavLink to="/signup"  style={{fontSize:"14px",textDecoration:"none",color:"red"}}> Your trial ends in 21 days</NavLink></div>

            <Button variant='light' className='recom' style={{marginLeft:"16px",marginRight:"2px"}}>Recommended features
            </Button>

            <Button variant='light' style={{marginRight:"2px",marginLeft:"20px"}}>Get started</Button>




            {/* <Button variant='light' style={{marginLeft:"16px",marginRight:"20px"}}>New</Button> */}


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
            <FaMediumM/>
            &nbsp;
        </div>

    </div>
  )
}

export default Header