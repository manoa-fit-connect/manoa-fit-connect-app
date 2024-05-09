import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Image, Row, Button } from 'react-bootstrap';

const User = ({ profile }) => {
  const [requestSent, setRequestSent] = useState(false);

  const handleAddFriendClick = () => {
    setRequestSent(true);
  };

  return (
    <Card className="h-100">
      <Card.Header>
        <Row>
          <Col>
            <Image width={100} src={profile.image} />
          </Col>
          <Col>
            <Card.Title>{profile.firstName} {profile.lastName}</Card.Title>
            <Card.Subtitle>Level: {profile.level}</Card.Subtitle>
            <Card.Subtitle>Styles: {profile.styles}</Card.Subtitle>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Text>Status: {profile.status}</Card.Text>
        <Card.Text>Goals: {profile.goals}</Card.Text>
        <Button variant="primary" onClick={handleAddFriendClick} disabled={requestSent}>
          {requestSent ? 'Request Sent!' : 'Add Friend'}
        </Button>
      </Card.Body>
    </Card>
  );
};

User.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    image: PropTypes.string,
    status: PropTypes.string,
    level: PropTypes.string,
    goals: PropTypes.string,
    styles: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default User;
