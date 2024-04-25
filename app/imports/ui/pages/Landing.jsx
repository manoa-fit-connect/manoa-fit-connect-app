import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { CalendarEventFill, GraphUp, PeopleFill, PersonFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

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
        <Row id="landing-page">
          <Col>
            <Link to="/Friends" style={linkStyles} id="Friends-Page">
              <div className="d-flex justify-content-center">
                <PeopleFill size={125} />
              </div>
              <h1 className="text-md-center">Your friends</h1>
              <h5 className="text-md-center">See who is online and working out and match people with similar interests</h5>
            </Link>
          </Col>
          <Col>
            <Link to="/listEquipment" style={linkStyles} id="Equipment-Page">
              <div className="d-flex justify-content-center">
                <Image width={125} className="pt-3 pb-3" src="\images\dumbbell_logo.png" />
              </div>
              <h1 className="text-md-center">Equipment</h1>
              <h5 className="text-md-center">See what equipment is available in the gym</h5>
            </Link>
          </Col>
          <Col>
            <Link to="/userprofile" style={linkStyles} id="Profile-Page">
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
            <Link to="/Progress" style={linkStyles} id="Progress-Page">
              <div className="d-flex justify-content-center">
                <GraphUp size={125} />
              </div>
              <h1 className="text-md-center">Progress Tracker</h1>
              <h5 className="text-md-center">Track personal best and how your work outs have been going</h5>
            </Link>
          </Col>
          <Col>
            <Link to="/generator" style={linkStyles} id="Generator-Page">
              <div className="d-flex justify-content-center">
                <Image width={125} src="\images\heart.png" />
              </div>
              <h1 className="text-md-center">Workout Generator</h1>
              <h5 className="text-md-center">Track and update what your favorite workout is</h5>
            </Link>
          </Col>
          <Col>
            <Link to="/Events" style={linkStyles} id="Events-Page">
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
    <Container id="landing-page">
      <Row className="justify-content-center">
        <Col md={4}>
          <Image src="/images/MFCLogo.png" className="w-100" />
        </Col>
        <Col md={4}>
          <br /> <br />
          <p className="pfpText">We are Manoa Fit Connect, a program intended to help students find partners to
            go to the gym together.
            Our goal is to reduce any hesitation for people to go to the gym, and make it fun. (if you guys want to
            change this go ahead)
          </p>
          <Button href="/about" variant="success">About Us</Button>{' '}
          <Button href="/signin" variant="success">Sign In</Button>{' '}
        </Col>
      </Row>
    </Container>
  );

};

export default Landing;
