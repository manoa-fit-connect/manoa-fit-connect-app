import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { Profiles } from '../../api/profile/Profiles';
import FriendProfile from '../components/FriendProfile';

const User = () => {
  // Retrieve the user ID from URL parameters
  const { _id } = useParams();
  const { profile, ready } = useTracker(() => {
    const subscription = Meteor.subscribe('profiles.all'); // Ensure your publication supports fetching by ID if needed
    return {
      profile: Profiles.collection.findOne(_id),
      ready: subscription.ready(),
    };
  }, [_id]);

  return ready ? (
    <Container className="py-3 justify-content-center" id="Profile-Page">
      <Row className="g-4">
        {profile ? (
          <Col><FriendProfile profile={profile} /></Col>
        ) : (
          <Col>No profile found</Col>
        )}
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default User;
