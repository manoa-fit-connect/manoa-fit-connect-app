import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

const Event = ({ events }) => (
  <div>
    <Image src={events.image} className="equipment-image" />
    {events.eventName}
    {events.description}
    {events.time}
    Found At: {events.locationFound}
  </div>
);

// Require a document to be passed to this component.
Event.propTypes = {
  events: PropTypes.shape({
    eventName: PropTypes.string,
    locationFound: PropTypes.string,
    image: PropTypes.string,
    time: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Event;
