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
      <Container className="py-3" id="Generator-Page">
        <Row className="justify-content-center">
          <Col xs={12} md={9} className="text-center">
            <Card bg="light" className="mb-4 equipment-card" style={{ fontFamily: 'Trirong, serif' }}>
              <Card.Body className="equipment-details">
                <Card.Text className="equipment-title" style={{ fontSize: '1.2rem' }}>
                  <h>Welcome to the Workout Generator!</h>
                  <p>This tool helps you create personalized workout routines based on your preferences. You can generate a random workout or add your custom exercises. Your favorite workouts are also saved here for easy access!</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={3} className="mb-4">
            <Button variant="primary" onClick={handleRandomWorkout} className="mb-3" style={{ fontFamily: 'Trirong, serif' }}>
              Generate Random Workout
            </Button>
          </Col>

          <Col xs={12} md={9} className="mb-4">
            {randomWorkout && (
              <Card bg="light" className="mb-4 equipment-card" style={{ fontFamily: 'Trirong, serif' }}>
                <Card.Body className="equipment-details">
                  <Card.Text className="equipment-name">{randomWorkout.name}</Card.Text>
                  <Card.Text className="equipment-description">{randomWorkout.description}</Card.Text>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>

        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {workouts.map((workout, index) => (
            <Col key={index}>
              <GeneratorItem workout={workout} />
            </Col>
          ))}
        </Row>
      </Container>
    ) : <LoadingSpinner />
  );
};

export default ListGenerator;
