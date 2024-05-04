import React from 'react';
import { Col, Container, Image, Row, Card } from 'react-bootstrap';
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
                <PeopleFill className="logo" />
              </div>
              <h1 className="text-md-center">Your friends</h1>
              <h5 className="text-md-center">See who is online and working out and match people with similar interests</h5>
            </Link>
          </Col>
          <Col>
            <Link to="/listEquipment" style={linkStyles} id="Equipment-Page">
              <div className="d-flex justify-content-center">
                <Image size={125} className="logo py-4" src="\images\dumbbell_logo.png" />
              </div>
              <h1 className="text-md-center">Equipment</h1>
              <h5 className="text-md-center">See what equipment is available in the gym and get tips on how to use them</h5>
            </Link>
          </Col>
          <Col>
            <Link to="/userprofile" style={linkStyles} id="Profile-Page">
              <div className="d-flex justify-content-center">
                <PersonFill className="logo" />
              </div>
              <h1 className="text-md-center">Profile</h1>
              <h5 className="text-md-center">View or edit your profile</h5>
            </Link>
          </Col>
        </Row>
        <Row className="py-5">
          <Col>
            <Link to="/Progress" style={linkStyles} id="Progress-Page">
              <div className="d-flex justify-content-center">
                <GraphUp className="logo" />
              </div>
              <h1 className="text-md-center">Progress Tracker</h1>
              <h5 className="text-md-center">Track personal best and how your work outs have been going</h5>
            </Link>
          </Col>
          <Col>
            <Link to="/listGenerator" style={linkStyles} id="ListGenerator-Page">
              <div className="d-flex justify-content-center">
                <Image className="logo" src="\images\heart.png" />
              </div>
              <h1 className="text-md-center">Workouts</h1>
              <h5 className="text-md-center">Choose from an array of workouts, perfectly organized by category and difficulty with option to randomly select a workout</h5>
            </Link>
          </Col>
          <Col>
            <Link to="/event" style={linkStyles} id="Event-Page">
              <div className="d-flex justify-content-center">
                <CalendarEventFill className="logo" />
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
    <div id="landing-page">
      <Row className="justify-content-center">
        <Col md={4}>
          <Image src="/images/MFCLogo.png" className="w-100" />
        </Col>
        <Col md={4}>
          <br /> <br />
          <p className="pfpText">We are Manoa Fit Connect, a program intended to help students find partners to
            go to the gym together. Our goal is to reduce any hesitation for people to go to the gym and make it fun. Please join our program if you are interested!
          </p>
          <Button href="/about" variant="success">About Us</Button>{' '}
          <Button href="/signin" variant="success">Sign In</Button>{' '}
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col sm={3}>
          <Card>
            <Card.Img className="landing-image" variant="top" src="/images/landing1.png" />
            <Card.Body>
              <Card.Text className="text-center">
                Our goal is to encourage health and wellness by offering unique workout routines that build memorable experiences, shared goals, and foster the spirit of community.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <Card.Img className="landing-image" variant="top" src="/images/landing4.png" />
            <Card.Body>
              <Card.Text className="text-center">
                We are reinventing the fitness experience, our aim is to engage people within our community, using our Warrior Recreation Center by creating an atmosphere of understanding.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <Card.Img className="landing-image" variant="top" src="/images/landing2.png" />
            <Card.Body>
              <Card.Text className="text-center">
                Let us accompany every member in their journey towards improved health and fitness, providing guidance and motivation in a supportive, community-based experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );

};

export default Landing;
