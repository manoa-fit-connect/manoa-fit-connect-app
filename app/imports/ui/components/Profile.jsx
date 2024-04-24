import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Col, Image, Row } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Profile = ({ profile }) => (
  <Card className="h-100">
    <Card.Header>
      <Row>
        <Col>
          <Image width={100} src={profile.image} />
        </Col>
        <Col>
          <Card.Title>{profile.firstName} {profile.lastName}</Card.Title>
          <Card.Subtitle>Level: {profile.level}</Card.Subtitle>
          <Card.Subtitle>Goals: {profile.goals}</Card.Subtitle>
          <Card.Subtitle>Styles: {profile.styles}</Card.Subtitle>
        </Col>
      </Row>
    </Card.Header>
    <Card.Body>
      <Card.Text>Availability: MTWRF 12-1:30pm</Card.Text>
      <Card.Text>Routine: Chest, Legs, Shoulders, Back, Arms and Legs</Card.Text>
      <Link to={`/editprofile/${profile._id}`}>Edit</Link>
    </Card.Body>
  </Card>
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
