import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Button, Pagination } from 'react-bootstrap';
import Friend from '../components/Friend';

const favoriteWorkouts = [
  'Circuit Training',
  'Powerlifting',
  'CrossFit',
  'Yoga',
  'Cardio',
  'Bodybuilding',
  'Pilates',
  'Aerobics',
];

const workoutTimes = [
  'Morning',
  'Midday',
  'Evening',
  'Late Night',
];

const fitnessGoals = [
  'Increase muscle mass',
  'Improve cardiovascular health',
  'Weight loss',
  'Improve flexibility',
  'Enhance endurance',
  'Train for a marathon',
  'General wellness',
];

// Function to generate a random element from an array
const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

/** Render Friends Page */
const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalFriends] = useState(31);
  const [friendsPerPage] = useState(6);

  // Generates fake friends for testing purposes
  // TODO: this should be replaced with a call to the database
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${totalFriends}&inc=name,picture,login&id`)
      .then(response => response.json())
      .then(data => {
        const formattedFriends = data.results.map(user => {
          const randomWorkoutTimes = [getRandomElement(workoutTimes)];
          return {
            _id: user.login.uuid,
            firstName: user.name.first,
            lastName: user.name.last,
            image: user.picture.large,
            favoriteWorkout: getRandomElement(favoriteWorkouts),
            workoutTimes: randomWorkoutTimes,
            fitnessGoals: getRandomElement(fitnessGoals),
          };
        });
        setFriends(formattedFriends);
      });
  }, [totalFriends]);

  // Calculate the number of pages
  const totalPages = Math.ceil(friends.length / friendsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Get current friends to be displayed based on pagination
  const indexOfLastFriend = currentPage * friendsPerPage;
  const indexOfFirstFriend = indexOfLastFriend - friendsPerPage;
  const currentFriends = friends.slice(indexOfFirstFriend, indexOfLastFriend);

  // Function to change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container className="py-3">
      <Row>
        {currentFriends.map(friend => (
          <Col xs={12} md={4} key={friend._id}>
            <Friend friend={friend} />
          </Col>
        ))}
      </Row>
      <Row>
        <Pagination className="justify-content-center mt-4">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <Button onClick={() => paginate(number)} className="page-link">
                {number}
              </Button>
            </li>
          ))}
        </Pagination>
      </Row>
    </Container>
  );
};

export default Friends;
