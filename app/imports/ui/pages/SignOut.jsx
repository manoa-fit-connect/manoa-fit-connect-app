import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/* After the user clicks the "SignOut" link in the NavBar, log them out and display this page. */
const SignOut = () => {
  Meteor.logout();

  const [showHearts, setShowHearts] = useState(false);

  const handleShowHearts = () => {
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 10000); // Hide hearts after 10 seconds
  };

  const getRandomPosition = () => ({
    left: Math.random() * window.innerWidth,
    animationDuration: `${Math.random() * 15 + 5}s`, // Random duration between 5 to 20 seconds (slower)
  });

  const renderHearts = () => {
    const hearts = [];
    for (let i = 0; i < 100; i++) {
      hearts.push(
        <img
          key={i}
          src="/images/heart.png"
          alt="heart"
          className="heart-fall"
          style={{ ...getRandomPosition(), width: '80px', height: 'auto' }} // Adjust size here
        />,
      );
    }
    return hearts;
  };

  return (
    <Col id="signout-page" className="d-flex justify-content-center align-items-center vh-100">
      <div className="message-box">
        <h2>You are signed out. Thank you for visiting!</h2>
        <Button variant="primary" onClick={handleShowHearts} disabled={showHearts} className="mt-3">
          Generate Goodbye Hearts
        </Button>
        <div className="heart-container mt-3">
          {showHearts && renderHearts()}
        </div>
        <Link to="/" className="btn btn-link mt-3">
          Back to Home
        </Link>
      </div>
    </Col>
  );
};

export default SignOut;
