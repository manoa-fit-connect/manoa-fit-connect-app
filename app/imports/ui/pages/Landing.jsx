import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { CalendarEventFill, GraphUp, PeopleFill, PersonFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

/* A simple static component to render some text for the landing page. */
const Landing = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  const linkStyles = {
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
  };

  if (currentUser) {
    return (
      <Container className="align-items-center-center" id="middle">
        <Row>
          <Col>
            <Link to="/Friends" style={linkStyles}>
              <div className="d-flex justify-content-center">
                <PeopleFill size={125} />
              </div>
              <h1 className="text-md-center">Your friends</h1>
              <h5 className="text-md-center">See who is online and working out and match people with similar interests</h5>
            </Link>
          </Col>
          <Col>
            <Link to="/Equipment" style={linkStyles}>
              <div className="d-flex justify-content-center">
                <Image width={125} className="pt-3 pb-3" src="\images\dumbbell_logo.png" />
              </div>
              <h1 className="text-md-center">Equipment</h1>
              <h5 className="text-md-center">See what equipment is available in the gym</h5>
            </Link>
          </Col>
          <Col>
            <Link to="/userprofile" style={linkStyles}>
              <div className="d-flex justify-content-center">
                <PersonFill size={125} />
              </div>
              <h1 className="text-md-center">Profile</h1>
              <h5 className="text-md-center">View or edit your profile</h5>
            </Link>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col>
            <Link to="/Progress" style={linkStyles}>
              <div className="d-flex justify-content-center">
                <GraphUp size={125} />
              </div>
              <h1 className="text-md-center">Progress Tracker</h1>
              <h5 className="text-md-center">Track personal best and how your work outs have been going</h5>
            </Link>
          </Col>
          <Col>
            <Link to="/Favorite" style={linkStyles}>
              <div className="d-flex justify-content-center">
                <Image width={125} src="\images\heart.png" />
              </div>
              <h1 className="text-md-center">Favorite Workout</h1>
              <h5 className="text-md-center">Track and update what your favorite workout is</h5>
            </Link>
          </Col>
          <Col>
            <Link to="/Events" style={linkStyles}>
              <div className="d-flex justify-content-center">
                <CalendarEventFill size={125} />
              </div>
              <h1 className="text-md-center">Events</h1>
              <h5 className="text-md-center">See what events are happening</h5>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="align-items-center-center" id="middle">
      <Row>
        <Col>
          <div className="d-flex justify-content-center">
            <PeopleFill size={125} />
          </div>
          <h1 className="text-md-center">Your friends</h1>
          <h5 className="text-md-center">See who is online and working out</h5>
        </Col>
        <Col>
          <div className="d-flex justify-content-center">
            <Image width={125} className="pt-3 pb-3" src="/images/dumbbell_logo.png" />
          </div>
          <h1 className="text-md-center">Equipment</h1>
          <h5 className="text-md-center">See what equipment is available in the gym</h5>
        </Col>
        <Col>
          <div className="d-flex justify-content-center">
            <PersonFill size={125} />
          </div>
          <h1 className="text-md-center">Profile</h1>
          <h5 className="text-md-center">View or edit your profile</h5>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col>
          <div className="d-flex justify-content-center">
            <GraphUp size={125} />
          </div>
          <h1 className="text-md-center">Progress Tracker</h1>
          <h5 className="text-md-center">Track personal best and how your work outs have been going</h5>
        </Col>
        <Col>
          <div className="d-flex justify-content-center">
            <Image width={125} className="pt-3" src="\images\heart.png" />
          </div>
          <h1 className="text-md-center">Favorite Workout</h1>
          <h5 className="text-md-center">Track and update your favorite workouts</h5>
        </Col>
        <Col>
          <div className="d-flex justify-content-center">
            <CalendarEventFill size={125} />
          </div>
          <h1 className="text-md-center">Events</h1>
          <h5 className="text-md-center">See what events are happening</h5>
        </Col>
      </Row>
    </Container>
  );

};

export default Landing;
