import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Button, Pagination } from 'react-bootstrap';
import User from '../components/User';

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

/** Render Users Page */
const WorkoutBuddy = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers] = useState(31);
  const [usersPerPage] = useState(6);

  // Generates fake users for testing purposes
  // TODO: this should be replaced with a call to the database
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${totalUsers}&inc=name,picture,login&id`)
      .then(response => response.json())
      .then(data => {
        const formattedUsers = data.results.map(user => {
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
        setUsers(formattedUsers);
      });
  }, [totalUsers]);

  // Calculate the number of pages
  const totalPages = Math.ceil(users.length / usersPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Get current users to be displayed based on pagination
  const indexOfLastFriend = currentPage * usersPerPage;
  const indexOfFirstFriend = indexOfLastFriend - usersPerPage;
  const currentUsers = users.slice(indexOfFirstFriend, indexOfLastFriend);

  // Function to change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container className="py-3" id="Users-Page">
      <Row>
        {currentUsers.map(friend => (
          <Col xs={12} md={4} key={friend._id}>
            <User friend={friend} />
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

export default WorkoutBuddy;
