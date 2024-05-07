import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ProgressTracker.jsx. */
const Workout = ({ workout }) => {
  // Ensure date is a Date object
  const date = workout.date instanceof Date ? workout.date : new Date(workout.date);

  return (
    <Card>
      <Card.Title>
        <Row className="justify-content-center">
          <Col className="text-center pt-2">
            {workout.name}
          </Col>
        </Row>
      </Card.Title>
      <Card.Body>
        <Row className="pb-3">
          <Col>
            <p className="fw-lighter">{date.toLocaleDateString('en-US', { timeZone: 'GMT', day: 'numeric', month: 'numeric', year: 'numeric' })}</p>
          </Col>
          <Col>
            Rating: {workout.rating}
          </Col>
          <Col>
            Difficulty: {workout.difficulty}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h5>Highlight of the workout</h5>
          </Col>
        </Row>
        {workout.highlight}
        <Row>
          <Link to={`/editWorkout/${workout._id}`} id="EditWorkout-Page">Edit</Link>
        </Row>
      </Card.Body>
    </Card>
  );
};

// Require a document to be passed to this component.
Workout.propTypes = {
  workout: PropTypes.shape({
    name: PropTypes.string,
    rating: PropTypes.number,
    difficulty: PropTypes.number,
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]), // Allow string to accommodate serialized date strings
    highlight: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Workout;
