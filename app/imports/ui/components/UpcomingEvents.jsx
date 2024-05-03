import React from 'react';
import PropTypes from 'prop-types';

const UpcomingEvents = ({ events }) => (
  <div>
    {events.eventName}
    {events.time}
  </div>
);

// Require a document to be passed to this component.
UpcomingEvents.propTypes = {
  events: PropTypes.shape({
    eventName: PropTypes.string,
    category: PropTypes.arrayOf(PropTypes.string),
    locationFound: PropTypes.string,
    contactEmail: PropTypes.string,
    image: PropTypes.string,
    time: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default UpcomingEvents;
