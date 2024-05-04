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
    if (workouts.length > 0) {
      const randomIndex = Math.floor(Math.random() * workouts.length);
      setRandomWorkout(workouts[randomIndex]);
    } else {
      setRandomWorkout({ name: 'Press Me!', description: 'No workouts found. Press to generate a random workout.' });
    }
  };

  return (
    ready ? (
      <Container className="py-3" id="ListGenerator-Page">

        <Row className="justify-content-center">
          <Col xs={12} md={9} className="text-center">
            <Card bg="light" className="mb-4">
              <Card.Body>
                <Card.Text>
                  <strong>Welcome to the Workout Generator!</strong>
                  <p> Explore exercises ranked 1-5 by difficulty.
                    Filter by category or select a random workout. If you filter by category, only random workouts from that category will be generated.
                    Get ready to sweat and challenge yourself!
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={9}>
            <Form className="g-4 text-center mb-4">
              <Form.Group controlId="category">
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
                  <option value="Warm-Up">Warm-up</option>
                  <option value="Upper Body">Upper Body</option>
                  <option value="Lower Body">Lower Body</option>
                  <option value="Abs">Abs</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="time">
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
              <Form.Group controlId="search">
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
            <Row className="justify-content-center">
              <Col xs={12} md={3} className="mb-4">
                <Button variant="primary" onClick={handleRandomWorkout} className="mb-3">
                  Generate Random Workout
                </Button>
              </Col>

              <Col xs={12} md={9} className="mb-4">
                {randomWorkout && (
                  <Card bg="danger" text="white">
                    <Card.Body>
                      <Card.Title>{randomWorkout.name}</Card.Title>
                      <Card.Text>
                        {randomWorkout.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )}
              </Col>
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4">
              {workouts.map((workout, index) => (
                <Col key={index}>
                  <GeneratorItem workout={workout} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    ) : <LoadingSpinner />
  );
};

export default ListGenerator;
