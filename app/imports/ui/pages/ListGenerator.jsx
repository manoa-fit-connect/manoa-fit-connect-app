import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Form, Button, Card } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import GeneratorItem from '../components/GeneratorItem';
import { GeneratorItems } from '../../api/generator/GeneratorItems';

const ListGenerator = () => {
  const [filters, setFilters] = useState({
    category: '',
    time: '',
    search: '',
  });

  const [randomWorkout, setRandomWorkout] = useState(null);

  const constructQuery = () => {
    const query = {};
    if (filters.category) {
      query.category = filters.category;
    }
    if (filters.time) {
      query.time = filters.time;
    }
    if (filters.search) {
      query.description = { $regex: filters.search, $options: 'i' };
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

  const handleRandomWorkout = () => {
    const randomIndex = Math.floor(Math.random() * workouts.length);
    setRandomWorkout(workouts[randomIndex]);
  };

  return (
    ready ? (
      <Container className="py-3" id="Generator-Page">
        <Col className="text-center">
          <h2 style={{ color: 'white', fontSize: '2.5rem' }}>Workouts</h2>
        </Col>
        <Row className="mt-3">
          <Col md={4}>
            {randomWorkout && (
              <Card bg="danger" text="white" className="mb-4">
                <Card.Body>
                  <Card.Title>{randomWorkout.name}</Card.Title>
                  <Card.Text>
                    <strong>Category:</strong> {randomWorkout.category}<br />
                    <strong>Time:</strong> {randomWorkout.time}<br />
                    <strong>Description:</strong> {randomWorkout.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </Col>
          <Col md={8}>
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
              <Form.Group controlId="time" className="text-center mb-4">
                <Form.Label style={{ color: 'white', fontWeight: 'bold', display: 'block' }}>Select time</Form.Label>
                <Form.Control
                  as="select"
                  name="time"
                  value={filters.time || ''}
                  onChange={handleFilterChange}
                  className="mx-auto w-50"
                >
                  <option value="">All</option>
                  <option value="15 minutes">15 minutes</option>
                  <option value="30 minutes">30 minutes</option>
                  <option value="45 minutes">45 minutes</option>
                  <option value="60 minutes">60 minutes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="search" className="text-center mb-4">
                <Form.Label style={{ color: 'white', fontWeight: 'bold', display: 'block' }}>Search by description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter keyword"
                  name="search"
                  value={filters.search}
                  onChange={handleFilterChange}
                  className="mx-auto w-50"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row xs={1} md={2} lg={3} className="g-4">
          {workouts.map((workout, index) => (<Col key={index}><GeneratorItem workout={workout} /></Col>))}
        </Row>
      </Container>
    ) :
      <LoadingSpinner />
  );
};

export default ListGenerator;
