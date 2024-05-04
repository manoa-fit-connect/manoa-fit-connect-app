import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import Card from 'react-bootstrap/Card';
import { CardBody, Button } from 'react-bootstrap';
import { Events } from '../../api/event/Event';
import EventItem from '../components/EventItem';
import AddEvent from './AddEvent';

const Event = () => {
  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const [selectedMonth, setSelectedMonth] = useState(currentMonthIndex);

  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { events, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Events.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const items = Events.collection.find({}).fetch();
    return {
      events: items,
      ready: rdy,
    };
  }, []);

  // Function to handle clicking the previous month button
  const handlePrevMonth = () => {
    setSelectedMonth(prevMonth => (prevMonth === 0 ? 11 : prevMonth - 1)); // Loop back to December if current month is January
  };

  // Function to handle clicking the next month button
  const handleNextMonth = () => {
    setSelectedMonth(prevMonth => (prevMonth === 11 ? 0 : prevMonth + 1)); // Loop back to January if current month is December
  };

  const filteredEvents = events.filter(event => new Date(event.date).getMonth() === selectedMonth);

  return (
    ready ? (
      <div id="Event-Page">
        <Card className="py-3 mx-5">
          <CardBody>
            <h1> {monthList[selectedMonth]} {currentYear}</h1>
            <Button onClick={handlePrevMonth}>{'<'}</Button> <Button onClick={handleNextMonth}>{'>'}</Button>
            <h4>Upcoming Events:</h4>
            <hr />
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => <EventItem key={event._id} event={event} />)
            ) : (
              <h5>There are no upcoming events this month</h5>
            )}
          </CardBody>
        </Card>
        <AddEvent />
      </div>
    ) : null
  );

};

export default Event;
