import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { Equipments } from '../../api/equipment/Equipments';
import Equipment from '../components/Equipment';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const EquipmentItem = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, equipments } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Equipments.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const equipmentItems = Equipments.collection.find({}).fetch();
    return {
      equipments: equipmentItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2>Equipment</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4">
            {equipments.map((equipment) => (<Col key={equipment._id}><Equipment equipment={equipment} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default EquipmentItem;
