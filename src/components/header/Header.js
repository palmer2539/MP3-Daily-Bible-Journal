import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"


const Header = () => {
  return (
   <Navbar className="all_navbar navbar navbar-expand-lg navbar-dark bg-primary">
      <Container fluid>
        <Navbar.Brand href="/">Daily Bible Journal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/bible">The Bible</Nav.Link>
            <Nav.Link href="/dailyverse">Today's Daily Verse</Nav.Link>
            <Nav.Link href="/aboutus">About us</Nav.Link>
          </Nav>
          {/* {this.state.auth === 1 && (

          )} */}
          <Nav>
            <NavDropdown className="me-5" title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="/journalentries">
                Journal Entries
              </NavDropdown.Item>
              <NavDropdown.Item href="/accountinfo">
                Account Info
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header