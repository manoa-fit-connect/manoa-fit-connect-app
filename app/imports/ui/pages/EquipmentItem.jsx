import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { Equipments } from '../../api/equipment/Equipments';
import Equipment from '../components/Equipment';

const EquipmentItem = () => {
  const { ready, equipments } = useTracker(() => {
    const subscription = Meteor.subscribe(Equipments.userPublicationName);
    const rdy = subscription.ready();
    const equipmentItems = Equipments.collection.find({}).fetch();
    return {
      equipments: equipmentItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container className="py-3" id="Equipment-Page">
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
