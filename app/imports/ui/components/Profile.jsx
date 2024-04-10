import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Profile = ({ profile }) => (
  <tr>
    <td>{profile.firstName}</td>
    <td>{profile.level}</td>
    <td>{profile.styles}</td>
    <td>
      <Link to={`/edit/${profile._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
Profile.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.string,
    gender: PropTypes.string,
    position: PropTypes.string,
    level: PropTypes.string,
    roles: PropTypes.string,
    goals: PropTypes.string,
    styles: PropTypes.string,
    sports: PropTypes.string,
    hobbies: PropTypes.string,
    major: PropTypes.string,
    image: PropTypes.string,
    availability: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Profile;
