import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ProgressTracker.jsx. */

const PersonalRecords = ({ PRS }) => (
  <tr>
    <td>{PRS.exercise}</td>
    <td>{PRS.weight}</td>
    <td>{PRS.repsOrDist}</td>
    <td>{PRS.date.toLocaleDateString('en-US')}</td>
    <td>
      <Link to={`/editPR/${PRS._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
PersonalRecords.propTypes = {
  PRS: PropTypes.shape({
    exercise: PropTypes.string,
    weight: PropTypes.number,
    repsOrDist: PropTypes.string,
    date: Date,
    _id: PropTypes.string,
  }).isRequired,
};

export default PersonalRecords;
