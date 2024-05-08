import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { Profiles } from '../../api/profile/Profiles';
import Profile from '../components/Profile';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ProfileUser = () => {
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
    <Container className="py-3 justify-content-center" id="Profile-Page">
      <Row className="g-4">
        {profiles.map((profile) => (<Col key={profile._id}><Profile profile={profile} /></Col>))}
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ProfileUser;
