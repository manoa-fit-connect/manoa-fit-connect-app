import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';

const EventItem = ({ event }) => (
  <div>
    <Card>
      <Card.Body>
        <Row>
          <Col xs={4}>
            <Card.Img src={event.image} alt="Card image" />
          </Col>
          <Col xs={8}>
            <Card.Title>{event.eventName}</Card.Title>
            <Card.Text className="my-0">{event.date.toDateString()} from {event.time}</Card.Text>
            <Card.Text>{event.locationFound}</Card.Text>
            <hr />
            <Card.Text>{event.description}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </div>
);

// PropTypes definition remains the same
EventItem.propTypes = {
  event: PropTypes.shape({
    eventName: PropTypes.string,
    locationFound: PropTypes.string,
    image: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    interest: PropTypes.number,
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default EventItem;
