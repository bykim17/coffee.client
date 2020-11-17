import React from 'react'
import Sytlecss from '../assets/styles/navbar.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Nav,NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
const navbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#AA6242"}}>
  <Navbar.Brand style={{fontFamily: "Kanit, sans-serif",color:"#FFFFFF"}}>Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link style={{fontFamily: "Kanit, sans-serif",color:"#FFFFFF"}}>หน้าแรก</Nav.Link>
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button type="submit"style={{backgroundColor:"#AA6242"}}>Search</Button>
    </Form>
     
      </Nav>
    <Nav>
      <Nav.Link style={{fontFamily: "Kanit, sans-serif",color:"#FFFFFF"}}>ติดต่อ</Nav.Link>
      <Nav.Link style={{fontFamily: "Kanit, sans-serif",color:"#FFFFFF"}}>เข้าสู่ระบบ</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default navbar
