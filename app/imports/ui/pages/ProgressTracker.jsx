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
  const quotes = [
    "The only bad workout is the one that didn't happen.",
    'The only way to define your limits is by going beyond them.',
    'Wake up. Work out. Kick ass. Repeat.',
    'Sweat is just fat crying.',
    'Strive for progress, not perfection.',
    "Your body can stand almost anything. It's your mind that you have to convince.",
    "The only workout you'll regret is the one you didn't do.",
    "Don't wish for a good body, work for it.",
    "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't.",
    'The pain you feel today will be the strength you feel tomorrow.',
  ];
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
      <div className="d-flex justify-content-center" id="middle">
        <h3>
          {_.sample(quotes)}
        </h3>
      </div>
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

        </Col>
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
      <Row className="justify-content-center">
        <div className="d-flex justify-content-center" id="middle">
          <h2>Previous Workouts</h2>
        </div>
        <Row xs={1} md={2} lg={3} className="justify-content-center">
          {workouts.map((session) => <Col key={session._id}><Workout workout={session} /></Col>)}
        </Row>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default ProgressTracker;
