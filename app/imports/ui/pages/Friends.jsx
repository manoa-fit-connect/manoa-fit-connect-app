import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { Profiles } from '../../api/profile/Profiles';
import LoadingSpinner from '../components/LoadingSpinner';
import Friend from '../components/Friend';

const Friends = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6; // You can adjust this to show more or fewer profiles per page

  // List of friend owners
  const friendOwners = ['john@foo.com', 'jane@foo.com', 'alice@foo.com'];

  const { profiles, ready } = useTracker(() => {
    const subscription = Meteor.subscribe('profiles.all');
    return {
      profiles: Profiles.collection.find({ owner: { $in: friendOwners } }).fetch(),
      ready: subscription.ready(),
    };
  }, [currentPage]);

  // Calculate total number of pages needed for pagination
  const totalPages = Math.ceil(profiles.length / usersPerPage);

  // Get current profiles to be displayed based on pagination
  const indexOfLastProfile = currentPage * usersPerPage;
  const indexOfFirstProfile = indexOfLastProfile - usersPerPage;
  const currentProfiles = profiles.slice(indexOfFirstProfile, indexOfLastProfile);

  // Generate page numbers for Pagination component
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Function to change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return ready ? (
    <Container className="py-3" id="Friends-Page">
      <Row xs={1} md={2} lg={3} className="g-4">
        {currentProfiles.map((profile, index) => (
          <Col key={index}>
            <Friend profile={profile} />
          </Col>
        ))}
      </Row>
      <Row>
        <Pagination className="justify-content-center mt-4">
          {pageNumbers.map(number => (
            <Pagination.Item key={number} active={number === currentPage} onClick={() => paginate(number)}>
              {number}
            </Pagination.Item>
          ))}
        </Pagination>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default Friends;
