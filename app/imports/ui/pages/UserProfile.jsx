import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Profiles } from '../../api/profile/Profiles';
import StuffItem from '../components/StuffItem';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const UserProfile = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, profiles } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Profiles.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const profileItems = Profiles.collection.find({}).fetch();
    return {
      profiles: profileItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>List Stuff</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Condition</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {stuffs.map((stuff) => <StuffItem key={stuff._id} stuff={stuff} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default UserProfile;
