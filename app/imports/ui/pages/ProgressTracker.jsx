import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import PersonalRecords from '../components/PersonalRecords';
import LoadingSpinner from '../components/LoadingSpinner';
import Workout from '../components/Workout';
import { Workouts } from '../../api/Workouts/Workout';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */

const PRS = [{
  exercise: 'Bench', repsOrDist: '4 reps', date: '3/25/2024', weight: '220',
},
{
  exercise: 'Squat', repsOrDist: '3 reps', date: '4/6/2024', weight: '395',
},
{
  exercise: 'Deadlift', repsOrDist: '4 reps', date: '3/25/2024', weight: '455',

},
];

const ProgressTracker = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, workouts } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Workouts.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const workoutItems = Workouts.collection.find({}).fetch();
    return {
      workouts: workoutItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col className="text-center" id="middle">
          <h2>Previous Workouts</h2>
        </Col>
        <Row>
          {workouts.map((session) => <Col key={session._id}><Workout workout={session} /></Col>)}
        </Row>
      </Row>
      <Row className="justify-content-center">
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
              {PRS.map((PR, index) => <PersonalRecords key={index} PRS={PR} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ProgressTracker;
