import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ProgressTracker.jsx. */

const PersonalRecords = ({ PRS }) => (
  <tr>
    <td>{PRS.lift}</td>
    <td>{PRS.weight}</td>
    <td>{PRS.reps}</td>
    <td>{PRS.date}</td>
    <td>
      <Link to={`/edit/${PRS._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
PersonalRecords.propTypes = {
  PRS: PropTypes.shape({
    lift: PropTypes.string,
    weight: PropTypes.number,
    reps: PropTypes.number,
    date: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default PersonalRecords;
