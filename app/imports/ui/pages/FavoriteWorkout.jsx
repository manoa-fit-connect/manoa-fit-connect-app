import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FavoriteWorkout = () => {
  // State to manage favorite workouts
  const [favoriteWorkouts, setFavoriteWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState({
    name: '',
    type: '',
    duration: '',
  });
  const [randomWorkout, setRandomWorkout] = useState('');
  const [spinning, setSpinning] = useState(false);

  // Function to handle changes in the input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewWorkout({ ...newWorkout, [name]: value });
  };

  // Function to add a new favorite workout
  const addWorkout = () => {
    if (newWorkout.name.trim() !== '' && newWorkout.type.trim() !== '' && newWorkout.duration.trim() !== '') {
      setFavoriteWorkouts([...favoriteWorkouts, { ...newWorkout, isFavorite: false }]);
      setNewWorkout({
        name: '',
        type: '',
        duration: '',
      });
    }
  };

  // Function to remove a workout
  const removeWorkout = (index) => {
    const updatedWorkouts = [...favoriteWorkouts];
    updatedWorkouts.splice(index, 1);
    setFavoriteWorkouts(updatedWorkouts);
  };

  // Function to star/favorite a workout
  const toggleFavorite = (index) => {
    const updatedWorkouts = [...favoriteWorkouts];
    updatedWorkouts[index].isFavorite = !updatedWorkouts[index].isFavorite;
    setFavoriteWorkouts(updatedWorkouts);
  };

  // Default list of workouts
  const defaultWorkouts = ['Push-ups', 'Squats', 'Plank', 'Lunges', 'Burpees', 'Jumping Jacks', 'Mountain Climbers', 'Crunches', 'Leg Raises'];

  // Function to generate a random workout
  const generateRandomWorkout = () => {
    setSpinning(true);
    const randomWorkoutIndex = Math.floor(Math.random() * defaultWorkouts.length);
    setTimeout(() => {
      setRandomWorkout(defaultWorkouts[randomWorkoutIndex]);
      setSpinning(false);
    }, 2000);
  };

  return (
    <div className="container mt-4">
      <Card>
        <Card.Body>
          <Card.Title>Favorite Workouts</Card.Title>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={newWorkout.name} onChange={handleInputChange} placeholder="E.g., Running" />
            </Form.Group>
            <Form.Group controlId="formType">
              <Form.Label>Type</Form.Label>
              <Form.Control type="text" name="type" value={newWorkout.type} onChange={handleInputChange} placeholder="E.g., Cardio" />
            </Form.Group>
            <Form.Group controlId="formDuration">
              <Form.Label>Duration</Form.Label>
              <Form.Control type="text" name="duration" value={newWorkout.duration} onChange={handleInputChange} placeholder="E.g., 30 minutes" />
            </Form.Group>
            <Button variant="primary" onClick={addWorkout}>Add Workout</Button>
            <Button variant="secondary" className="ml-2" onClick={generateRandomWorkout} disabled={spinning}>
              {spinning ? 'Spinning...' : 'Generate Random Workout'}
            </Button>
          </Form>
          <hr />
          <h5>Your Favorite Workouts:</h5>
          <ul>
            {favoriteWorkouts.map((workout, index) => (
              <li key={index}>
                <strong>{workout.name}</strong> - {workout.type}, {workout.duration}
                <Button variant="danger" size="sm" className="ml-2" onClick={() => removeWorkout(index)}>Remove</Button>
                <Button variant={workout.isFavorite ? 'warning' : 'secondary'} size="sm" className="ml-2" onClick={() => toggleFavorite(index)}>
                  {workout.isFavorite ? 'Unfavorite' : 'Favorite'}
                </Button>
              </li>
            ))}
          </ul>
          {randomWorkout && (
            <div className="mt-4">
              <h5>Random Workout:</h5>
              <p>{randomWorkout}</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default FavoriteWorkout;
