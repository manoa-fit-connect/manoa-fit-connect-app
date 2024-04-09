import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ProgressTracker.jsx. */

const Workouts = ({ workout }) => (
  <Card>
    <Card.Title>
      <Row className="justify-content-center">
        <Col className="text-center">
          {workout.name}
        </Col>
      </Row>
    </Card.Title>
    <Card.Body>
      <Row>
        {workout.date}
      </Row>
      <Row>
        Rating: {workout.rating}
      </Row>
      <Row>
        Difficulty: {workout.difficulty}
      </Row>
      <Row>
        <Link to={`/edit/${workout._id}`}>Edit</Link>
      </Row>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Workouts.propTypes = {
  workout: PropTypes.shape({
    name: PropTypes.string,
    rating: PropTypes.number,
    difficulty: PropTypes.number,
    date: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Workouts;
