import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Clock } from 'react-bootstrap-icons';
import { Image } from 'react-bootstrap';

const Event = () => {
  // Mock data for workout events
  const [events, setEvents] = useState([
    { date: '2024-04-11', title: 'Workout Event 1' },
    { date: '2024-04-15', title: 'Workout Event 2' },
    { date: '2024-04-20', title: 'Workout Event 3' },
  ]);

  // State to manage new event form
  const [newEvent, setNewEvent] = useState({ date: '', title: '' });

  // Function to handle changes in the form inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  // Function to add a new event
  const addEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ date: '', title: '' }); // Reset form inputs
  };

  // Function to remove an event
  const removeEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };
  const months = ['January 2024', 'February 2024', 'March 2024', 'April 2024', 'May 2024', 'June 2024', 'July 2024', 'August 2024', 'September 2024', 'October 2024', 'November 2024', 'December 2024'];
  const [displayMonthIndex, setDisplayMonthIndex] = useState(new Date().getMonth());
  const filteredEvents = events.filter(event => new Date(event.date).getMonth() === displayMonthIndex);

  const prevMonth = () => {
    const newMonthIndex = (displayMonthIndex - 1 + 12) % 12;
    setDisplayMonthIndex(newMonthIndex);
  };

  const nextMonth = () => {
    const newMonthIndex = (displayMonthIndex + 1 + 12) % 12;
    setDisplayMonthIndex(newMonthIndex);
  };

  const renderEventBoxes = () => filteredEvents.map((event, index) => (
    <div key={index} className="event-box">
      <div className="event-date">{event.date}</div>
      <div className="event-title">{event.title}</div>
      <Button variant="outline-danger" size="sm" className="md-2" onClick={() => removeEvent(index)}>Remove</Button>
    </div>
  ));

  return (
    <div className="container mt-4">
      <Card>
        <Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Card.Title>Upcoming Events<Clock /></Card.Title>
            <h1>{months[displayMonthIndex]}</h1>
            <Button onClick={prevMonth} className="me-1">Previous</Button>
            <Button onClick={nextMonth}>Next</Button>
            <div className="event-container">
              {renderEventBoxes()}
            </div>
          </div>
          <Image src="images/dumbells.jpeg" />
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Title>Workout Events</Card.Title>
          <Form>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" value={newEvent.date} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" value={newEvent.title} onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" onClick={addEvent}>Add Event</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Event;
