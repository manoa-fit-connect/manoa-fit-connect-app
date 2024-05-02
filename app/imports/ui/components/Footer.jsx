import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-dark">
    <Container>
      <Row>
        <Col className="text-center">
          Department of Information and Computer Sciences
          {' '}
          <br />
          University of Hawaii
          <br />
          Honolulu, HI 96822
          {' '}
          <br />
        </Col>
        <Col className="text-center">
          <h5>Resources</h5>
          <Nav.Link id="about-us-nav" as={NavLink} to="/about" key="about">About Us</Nav.Link>
          <Nav.Link id="website-nav" href="https://manoa-fit-connect.github.io/" target="_blank" rel="noopener noreferrer">User Guide</Nav.Link>
        </Col>
      </Row>

    </Container>
  </footer>
);

export default Footer;
