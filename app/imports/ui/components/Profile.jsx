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
      <Link to={`/editprofile/${profile._id}`} id="EditProfile-Page">Edit</Link>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Profile.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number,
    gender: PropTypes.string,
    position: PropTypes.string,
    level: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string),
    goals: PropTypes.arrayOf(PropTypes.string).isRequired,
    styles: PropTypes.arrayOf(PropTypes.string).isRequired,
    sports: PropTypes.arrayOf(PropTypes.string),
    hobbies: PropTypes.arrayOf(PropTypes.string),
    major: PropTypes.string,
    image: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }),
};

Profile.defaultProps = {
  profile: {
    gender: '',
    age: 0,
    position: '',
    roles: [],
    sports: [],
    hobbies: [],
    major: '',
  },
};

export default Profile;
