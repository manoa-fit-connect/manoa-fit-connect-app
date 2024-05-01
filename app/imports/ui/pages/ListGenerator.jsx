import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import GeneratorItem from '../components/GeneratorItem';
import { GeneratorItems } from '../../api/generator/GeneratorItems';

const ListGenerator = () => {
  const [filters, setFilters] = useState({
    category: '',
  });

  const constructQuery = () => {
    const query = {};
    if (filters.category) {
      query.category = filters.category;
    }
    return query;
  };

  const { ready, workouts } = useTracker(() => {
    const subscription = Meteor.subscribe(GeneratorItems.userPublicationName);
    const rdy = subscription.ready();
    const query = constructQuery(filters);
    const workoutItems = GeneratorItems.collection.find(query).fetch();
    return {
      workouts: workoutItems,
      ready: rdy,
    };
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    ready ? (
      <Container className="py-3" id="Generator-Page">
        <Row className="justify-content-center">
          <Col>
            <Col className="text-center">
              <h2 style={{ color: 'white', fontSize: '2.5rem' }}>Workouts</h2>
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
                  <option value="">All Categories</option>
                  <option value="Cardio">Cardio</option>
                  <option value="Strength">Strength</option>
                  <option value="Flexibility">Flexibility</option>
                  <option value="Warm-up">Warm-up</option>
                  <option value="Upper Body">Upper Body</option>
                  <option value="Lower Body">Lower Body</option>
                  <option value="Abs">Abs</option>
                </Form.Control>
              </Form.Group>
            </Form>

            <Row xs={1} md={2} lg={3} className="g-4">
              {workouts.map((workout, index) => (<Col key={index}><GeneratorItem workout={workout} /></Col>))}
            </Row>
          </Col>
        </Row>
      </Container>
    ) :
      <LoadingSpinner />
  );
};

export default ListGenerator;
