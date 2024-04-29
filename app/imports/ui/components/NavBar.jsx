import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Col, Container, Image, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/" id="Home-Page">
          <Row className="align-items-center">
            <Col xs="auto">
              <Image roundedCircle src="/images/MFCLogo.png" width="150px"/>
            </Col>
            <Col xs="auto" className="pt-3">
              <h4 className="mb-0">Manoa Fit Connect</h4>
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start ms-auto">
            {currentUser ? ([
              <Nav.Link id="my-profile-nav" as={NavLink} to="/userprofile" key="user-profile" className="me-3">My Profile</Nav.Link>,
              <Nav.Link id="progress-tracker-nav" as={NavLink} to="/progress" key="progress" className="me-3">Progress Tracker</Nav.Link>,
              <Nav.Link id="friends-nav" as={NavLink} to="/friends" key="friends" className="me-3">Friends</Nav.Link>,
              <Nav.Link id="list-equipment-nav" as={NavLink} to="/listEquipment" key="listEquipment" className="me-3">Equipment</Nav.Link>,
              <Nav.Link id="generator-nav" as={NavLink} to="/generator" key="generator" className="me-3">Generator</Nav.Link>,
            ]) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Nav.Link id="list-stuff-admin-nav" as={NavLink} to="/admin" key="admin">Admin</Nav.Link>
            ) : ''}
          </Nav>
          <Nav className="justify-content-end">
            {currentUser === '' ? (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                  <PersonFill />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup">
                  <PersonPlusFill />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="navbar-current-user" title={currentUser}>
                <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout">
                  <BoxArrowRight />
                  {' '}
                  Sign out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
