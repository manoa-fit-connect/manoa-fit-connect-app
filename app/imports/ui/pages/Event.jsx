import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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

  // Render events as boxes
  const renderEventBoxes = () => {
    return events.map((event, index) => (
      <div key={index} className="event-box">
        <div className="event-date">{event.date}</div>
        <div className="event-title">{event.title}</div>
        <Button variant="outline-danger" size="sm" className="mt-2" onClick={() => removeEvent(index)}>Remove</Button>
      </div>
    ));
  };

  return (
    <div className="container mt-4">
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
          <div className="event-container">
            {renderEventBoxes()}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Event;
