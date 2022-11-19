import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
    return (
        <>        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />


<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/" href="#home">Gordon Ramsay</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/about" href="#about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/awards" href="#awards">Awards</Nav.Link>
            <Nav.Link as={NavLink} to="/gallery" href="#gallery">Gallery</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


        </>
    );
}