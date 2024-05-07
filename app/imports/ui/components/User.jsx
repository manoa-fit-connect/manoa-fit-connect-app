import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

/** Renders a single friend in a card format. */
const User = ({ friend }) => (
  <Card className="h-200 m-1">
    <Card.Img variant="top" src={friend.image} style={{ width: '100px' }} />
    <Card.Body>
      <Card.Title>{friend.firstName} {friend.lastName}</Card.Title>
      <ListGroup variant="flush">
        <ListGroup.Item>Favorite Workout: {friend.favoriteWorkout}</ListGroup.Item>
        <ListGroup.Item>Workout Times: {friend.workoutTimes.join(', ')}</ListGroup.Item>
        <ListGroup.Item>Fitness Goals: {friend.fitnessGoals}</ListGroup.Item>
      </ListGroup>
      <Link to={`/profile/${friend._id}`}>Add</Link>
    </Card.Body>
  </Card>
);

User.propTypes = {
  friend: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    image: PropTypes.string,
    favoriteWorkout: PropTypes.string,
    workoutTimes: PropTypes.arrayOf(PropTypes.string),
    fitnessGoals: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default User;
