import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col, Container, Image, Row } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Profile = ({ profile }) => (
  <div className="h-100 text-dark" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>

    <Container className="flex-wrap container-fluid p-3">
      <Row>
        <Col sm={4} id="profile-image">
          <Image fluid width={250} src={profile.image} />
        </Col>
        <Col id="profile-details">
          <Container>
            <Row className="h4">{profile.firstName} {profile.lastName}</Row>
            <Row className="h6">Level: {profile.level}</Row>
            <Row className="h6">Goal: {profile.goals}</Row>
            <Row className="h6">Style: {profile.styles}</Row>
            <Row className="h6">Status: {profile.status}</Row>
          </Container>
        </Col>
      </Row>
    </Container>
    <Container className="p-3">
      <Link to="/friends" id="Friends-Page" className="text-dark">Go Back</Link>
    </Container>
  </div>
);

// Require a document to be passed to this component.
Profile.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    image: PropTypes.string,
    status: PropTypes.string,
    level: PropTypes.string,
    goals: PropTypes.string,
    styles: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Profile;
