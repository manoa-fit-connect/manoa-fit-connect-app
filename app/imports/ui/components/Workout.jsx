import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ProgressTracker.jsx. */

const Workout = ({ workout }) => (
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
          {workout.date}
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
        <Link to={`/edit/${workout._id}`}>Edit</Link>
      </Row>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Workout.propTypes = {
  workout: PropTypes.shape({
    name: PropTypes.string,
    rating: PropTypes.number,
    difficulty: PropTypes.number,
    date: PropTypes.string,
    highlight: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Workout;
