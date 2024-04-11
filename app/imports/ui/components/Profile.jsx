import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Profile = ({ profile }) => (
  <Card className="h-100">
    <Card.Header>
      <Image width={75} src={profile.image} />
      <Card.Title>{profile.firstName} {profile.lastName}</Card.Title>
      <Card.Subtitle>{profile.level}, {profile.styles}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{profile.availability}</Card.Text>
      <Card.Text>{profile.description}</Card.Text>
      <Link to={`/editprofile/${profile._id}`}>Edit</Link>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Profile.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.string,
    gender: PropTypes.string,
    position: PropTypes.string,
    level: PropTypes.string,
    roles: PropTypes.string,
    goals: PropTypes.string,
    styles: PropTypes.string,
    sports: PropTypes.string,
    hobbies: PropTypes.string,
    major: PropTypes.string,
    image: PropTypes.string,
    availability: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Profile;
