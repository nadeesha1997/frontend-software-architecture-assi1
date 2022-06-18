import React from 'react';
import { Link } from "react-router-dom";
import {Navbar,Nav,NavItem,NavbarBrand,Container} from "reactstrap";
import StudentInputForm from './InputForm';

export const Heading = () => {
  return (
    <>
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">Students Management System</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">Add Student</Link>
          </NavItem>
        </Nav>

      </Container>
    </Navbar>
    <StudentInputForm/>
    </>
  )
}