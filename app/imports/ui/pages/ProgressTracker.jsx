import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import Button from 'react-bootstrap/Button';
import PersonalRecords from '../components/PersonalRecords';
import LoadingSpinner from '../components/LoadingSpinner';
import Workout from '../components/Workout';
import { Workouts } from '../../api/Workouts/Workout';
import { PRS } from '../../api/PRS/prs';

const ProgressTracker = () => {
  const { ready, workouts, prs } = useTracker(() => {
    const subscription = Meteor.subscribe(Workouts.userPublicationName);
    const subscription2 = Meteor.subscribe(PRS.userPublicationName);
    const rdy = subscription.ready() && subscription2.ready();
    const workoutItems = Workouts.collection.find({}).fetch();
    const prItems = PRS.collection.find({}).fetch();
    return {
      ready: rdy,
      workouts: workoutItems,
      prs: prItems,
    };
  }, []);

  return ready ? (
    <Container className="py-3" id="Progress-Page">
      <Row className="justify-content-center">
        <Col className="text-center" id="middle">
          <Row className="justify-content-center">
            <Col xs={5}>
              <Button href="/addworkout" id="AddWorkout-Page">Add Workout</Button>
            </Col>
            <Col xs={5}>
              <Button href="/addPR" id="AddPR-Page">Add PRS</Button>
            </Col>
          </Row>
          <h2>Previous Workouts</h2>
        </Col>
        <Row xs={1} md={2} lg={3} className="justify-content-center">
          {workouts.map((session) => <Col key={session._id}><Workout workout={session} /></Col>)}
        </Row>
      </Row>
      <Row className="justify-content-center p-2">
        <Col md={7}>
          <Col className="text-center" id="middle">
            <h2>Personal Records</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Lift/Exercise</th>
                <th>Weight</th>
                <th>Reps/Distance</th>
                <th>Date</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {prs.map((pr) => <PersonalRecords key={pr._id} PRS={pr} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default ProgressTracker;
