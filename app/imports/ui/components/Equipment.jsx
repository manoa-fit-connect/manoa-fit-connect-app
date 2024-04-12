import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Image, Row } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Equipment = ({ equipment }) => (
  <Card className="h-100">
    <Card.Header>
      <Row className="align-items-center">
        <Col xs={4} md={3} lg={2}> {/* Adjust size and breakpoints as needed */}
          <Image src={equipment.equipmentImage} fluid />
        </Col>
        <Col xs={8} md={9} lg={10}>
          <Card.Title>{equipment.equipmentName}</Card.Title>
          <Card.Subtitle>{equipment.equipmentTag}</Card.Subtitle>
        </Col>
      </Row>
    </Card.Header>
    <Card.Body className="border-bottom">
      <Card.Text>{equipment.equipmentLocation}</Card.Text>
    </Card.Body>
    <Card.Body>
      <Card.Text>{equipment.equipmentDescription}</Card.Text>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Equipment.propTypes = {
  equipment: PropTypes.shape({
    equipmentName: PropTypes.string,
    equipmentLocation: PropTypes.string,
    equipmentTag: PropTypes.string,
    equipmentImage: PropTypes.string,
    equipmentDescription: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Equipment;
