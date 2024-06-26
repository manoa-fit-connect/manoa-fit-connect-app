import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Form, Card } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import EquipmentItem from '../components/EquipmentItem';
import { EquipmentItems } from '../../api/item/EquipmentItems';

const ListEquipment = () => {
  const [filters, setFilters] = useState({
    category: '',
    location: '',
  });

  const constructQuery = () => {
    const query = {};
    if (filters.name) {
      query.name = { $regex: `^${filters.name}`, $options: 'i' };
    }
    if (filters.category) {
      query.category = filters.category;
    }
    if (filters.location) {
      query.locationFound = filters.location;
    }
    return query;
  };

  const { ready, equipmentitems } = useTracker(() => {
    const subscription = Meteor.subscribe(EquipmentItems.userPublicationName);
    const rdy = subscription.ready();
    const query = constructQuery(filters);
    const equipmentItems1 = EquipmentItems.collection.find(query).fetch();
    return {
      equipmentitems: equipmentItems1,
      ready: rdy,
    };
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    ready ? (
      <Container className="py-3" id="Equipment-Page">
        <Row className="justify-content-center">
          <Col xs={12} md={9} className="text-center">
            <Card bg="light" className="mb-4">
              <Card.Body>
                <Card.Text>
                  <strong>Welcome to the Equipment Page!</strong>
                  <p> Explore gym equipment categorized by type and location.
                    Filter by equipment type or its location within the gym to learn how to use them effectively.
                    Get ready to elevate your workout experience!
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Form className="g-4 text-center">
            <Form.Group controlId="category" className="text-center mb-4">
              <Form.Label style={{ color: 'white', fontWeight: 'bold', display: 'block' }}>Select a category</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={filters.category || ''}
                onChange={handleFilterChange}
                className="mx-auto w-50"
              >
                <option value="">All Items</option>
                <option value="Cardio">Cardio</option>
                <option value="Strength">Strength</option>
                <option value="Flexibility">Flexibility</option>
                <option value="Sports Equipment">Sports Equipment</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="location" className="text-center mb-4">
              <Form.Label style={{ color: 'white', fontWeight: 'bold', display: 'block' }}>Select a location</Form.Label>
              <Form.Control
                as="select"
                name="location"
                value={filters.location || ''}
                onChange={handleFilterChange}
                className="mx-auto w-50"
              >
                <option value="">All Locations</option>
                <option value="1st Floor">1st Floor</option>
                <option value="2nd Floor">2nd Floor</option>
              </Form.Control>
            </Form.Group>
          </Form>

          <Row xs={1} md={2} lg={3} className="g-4">
            {equipmentitems.map((item, index) => (<Col key={index}><EquipmentItem item={item} /></Col>))}
          </Row>
        </Row>
      </Container>
    ) :
      <LoadingSpinner />
  );
};

export default ListEquipment;
