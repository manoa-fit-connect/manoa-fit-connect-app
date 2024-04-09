import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Stuffs } from '../../api/stuff/Stuff';
import PersonalRecords from '../components/PersonalRecords';
import LoadingSpinner from '../components/LoadingSpinner';
import Workouts from '../components/Workouts';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */

const PRS = [{
  lift: 'Bench', reps: '4', date: '3/25/2024', weight: '220',
},
{
  lift: 'Squat', reps: '3', date: '4/6/2024', weight: '395',
},
{
  lift: 'Deadlift', reps: '4', date: '3/25/2024', weight: '455',

},
];

const workouts = [{
  name: 'Bench Day', rating: '3', date: '4/8/2024', difficulty: '4',
},
{
  name: 'Squat Day', rating: '5', date: '4/6/2024', difficulty: '5',
},
{
  name: 'Deadlift Day', rating: '4', date: '4/2/2024', difficulty: '4',

},
];
const ProgressTracker = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, stuffs } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Stuffs.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const stuffItems = Stuffs.collection.find({}).fetch();
    return {
      stuffs: stuffItems,
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
          {workouts.map((workout, index) => <Col key={index}><Workouts workout={workout} /></Col>)}
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
                <th>Lift</th>
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
