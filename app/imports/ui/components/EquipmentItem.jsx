import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';
/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const EquipmentItem = ({ item }) => (
  <Card className="h-100 equipment-card">
    <div className="equipment-header">
      <Image src={item.image} className="equipment-image" />
    </div>
    <Card.Body className="equipment-details">
      <Card.Title className="equipment-name">{item.itemName}</Card.Title>
      <Card.Text className="equipment-category">Category: {item.category}</Card.Text>
      <Card.Text className="equipment-description">Description: {item.description}</Card.Text>
      <Card.Text className="equipment-location">Found At: {item.locationFound}</Card.Text>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
EquipmentItem.propTypes = {
  item: PropTypes.shape({
    itemName: PropTypes.string,
    category: PropTypes.arrayOf(PropTypes.string),
    locationFound: PropTypes.string,
    contactEmail: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default EquipmentItem;
