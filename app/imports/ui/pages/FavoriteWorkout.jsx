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

  // Function to generate a random workout
  const generateRandomWorkout = async () => {
    try {
      // Arrays for random workout data
      const exercises = ['Push-ups', 'Squats', 'Plank', 'Lunges', 'Burpees', 'Jumping Jacks', 'Mountain Climbers', 'Crunches', 'Leg Raises'];
      const sets = ['1 set', '2 sets', '3 sets', '4 sets', '5 sets'];
      const reps = ['5 reps', '8 reps', '10 reps', '12 reps', '15 reps'];
      const restPeriods = ['30 seconds rest', '1 minute rest', '2 minutes rest', '3 minutes rest', '5 minutes rest'];
      const motivationalNames = ['Super Strength', 'Beast Mode', 'Power Surge', 'Warrior Workout', 'Heroic Hustle', 'Mighty Moves', 'Champion Challenge', 'Epic Endurance', 'Legendary Lifts'];

      // Function to randomly select an item from an array
      const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

      // Generate random workout information
      const randomExercises = [];
      for (let i = 0; i < 3; i++) {
        const exercise = randomItem(exercises);
        const set = randomItem(sets);
        const rep = randomItem(reps);
        const restPeriod = randomItem(restPeriods);
        const motivationalName = randomItem(motivationalNames);
        randomExercises.push(`${motivationalName}: ${exercise}: ${set}, ${rep}, ${restPeriod}`);
      }

      // Construct the workout description
      const randomWorkoutDescription = `Random Workout! '
${randomExercises.join('\n')}`;

      // Add the generated workout to the favorite workouts list
      setFavoriteWorkouts([...favoriteWorkouts, { name: 'Random Workout', type: 'Random', duration: 'Unknown', description: randomWorkoutDescription }]);
    } catch (error) {
      console.error('Error generating workout:', error);
    }
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
            <Button variant="secondary" className="ml-2" onClick={generateRandomWorkout}>Generate Random Workout</Button>
          </Form>
          <hr />
          <h5>Your Favorite Workouts:</h5>
          <ul>
            {favoriteWorkouts.map((workout, index) => (
              <li key={index}>
                <strong>{workout.name}</strong> - {workout.type}, {workout.duration}
                <div>{workout.description}</div>
                <Button variant="danger" size="sm" className="ml-2" onClick={() => removeWorkout(index)}>Remove</Button>
                <Button variant={workout.isFavorite ? 'warning' : 'secondary'} size="sm" className="ml-2" onClick={() => toggleFavorite(index)}>
                  {workout.isFavorite ? 'Unfavorite' : 'Favorite'}
                </Button>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FavoriteWorkout;
