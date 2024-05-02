import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

const GeneratorItem = ({ workout }) => (
  <Card className="h-100 generator-card" style={{ fontFamily: 'Trirong, serif' }}>
    <div className="generator-header">
      <Image src={workout.image} className="generator-image" />
    </div>
    <Card.Body className="generator-details">
      <Card.Title className="generator-name">{workout.name}</Card.Title>
      <Card.Text className="generator-category" style={{ fontFamily: 'Trirong, serif' }}>Category: {workout.category}</Card.Text>
      <Card.Text className="generator-time" style={{ fontFamily: 'Trirong, serif' }}>Time: {workout.time}</Card.Text>
      <Card.Text className="generator-description" style={{ fontFamily: 'Trirong, serif' }}>Description: {workout.description}</Card.Text>
    </Card.Body>
  </Card>
);

GeneratorItem.propTypes = {
  workout: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default GeneratorItem;
