import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const workouts = [
  {
    location: 'home',
    difficulty: '1',
    time: '15 min',
    muscleGroup: 'upper body',
    exercises: ['Push-ups', 'Bicep Curls', 'Tricep Dips'],
  },
  {
    location: 'gym',
    difficulty: '3',
    time: '30 min',
    muscleGroup: 'lower body',
    exercises: ['Squats', 'Deadlifts', 'Leg Press'],
  },
  {
    location: 'outdoor',
    difficulty: '2',
    time: '45 min',
    muscleGroup: 'abs',
    exercises: ['Planks', 'Russian Twists', 'Leg Raises'],
  },
  {
    location: 'home',
    difficulty: '4',
    time: '1 hour',
    muscleGroup: 'full body',
    exercises: ['Burpees', 'Mountain Climbers', 'Jumping Jacks', 'Crunches'],
  },
  {
    location: 'gym',
    difficulty: '5',
    time: '45 min',
    muscleGroup: 'stretching',
    exercises: ['Hamstring Stretch', 'Quad Stretch', 'Calf Stretch', 'Shoulder Stretch'],
  },
  {
    location: 'home',
    difficulty: '2',
    time: '30 min',
    muscleGroup: 'upper body',
    exercises: ['Dumbbell Rows', 'Chest Press', 'Shoulder Press'],
  },
  {
    location: 'gym',
    difficulty: '3',
    time: '45 min',
    muscleGroup: 'lower body',
    exercises: ['Lunges', 'Leg Curl', 'Hip Thrusts'],
  },
  {
    location: 'outdoor',
    difficulty: '1',
    time: '15 min',
    muscleGroup: 'abs',
    exercises: ['Crunches', 'Russian Twists', 'Planks'],
  },
  {
    location: 'home',
    difficulty: '4',
    time: '1 hour',
    muscleGroup: 'full body',
    exercises: ['Deadlifts', 'Squats', 'Pull-ups', 'Push-ups'],
  },
  {
    location: 'gym',
    difficulty: '2',
    time: '30 min',
    muscleGroup: 'stretching',
    exercises: ['Leg Stretch', 'Arm Stretch', 'Back Stretch', 'Chest Stretch'],
  },
  {
    location: 'home',
    difficulty: '3',
    time: '45 min',
    muscleGroup: 'upper body',
    exercises: ['Tricep Extensions', 'Bicep Curls', 'Push-ups', 'Pull-ups'],
  },
  {
    location: 'gym',
    difficulty: '1',
    time: '15 min',
    muscleGroup: 'lower body',
    exercises: ['Leg Press', 'Calf Raises', 'Leg Extension'],
  },
  {
    location: 'outdoor',
    difficulty: '5',
    time: '1 hour',
    muscleGroup: 'abs',
    exercises: ['Hanging Leg Raises', 'Russian Twists', 'Planks', 'Mountain Climbers'],
  },
  {
    location: 'home',
    difficulty: '2',
    time: '30 min',
    muscleGroup: 'full body',
    exercises: ['Bodyweight Squats', 'Lunges', 'Push-ups', 'Planks'],
  },
  {
    location: 'gym',
    difficulty: '4',
    time: '45 min',
    muscleGroup: 'stretching',
    exercises: ['Hamstring Stretch', 'Quad Stretch', 'Shoulder Stretch', 'Chest Stretch'],
  },
  {
    location: 'home',
    difficulty: '3',
    time: '45 min',
    muscleGroup: 'upper body',
    exercises: ['Dumbbell Bench Press', 'Shoulder Press', 'Bent-over Rows', 'Tricep Dips'],
  },
  {
    location: 'gym',
    difficulty: '2',
    time: '30 min',
    muscleGroup: 'lower body',
    exercises: ['Leg Curl', 'Leg Press', 'Calf Raises'],
  },
  {
    location: 'outdoor',
    difficulty: '4',
    time: '1 hour',
    muscleGroup: 'abs',
    exercises: ['Planks', 'Russian Twists', 'Hanging Leg Raises', 'Mountain Climbers'],
  },
  {
    location: 'home',
    difficulty: '5',
    time: '1 hour',
    muscleGroup: 'full body',
    exercises: ['Burpees', 'Jump Squats', 'Push-ups', 'Pull-ups'],
  },
  {
    location: 'gym',
    difficulty: '1',
    time: '15 min',
    muscleGroup: 'stretching',
    exercises: ['Leg Stretch', 'Arm Stretch', 'Back Stretch', 'Chest Stretch'],
  },
  {
    location: 'home',
    difficulty: '3',
    time: '45 min',
    muscleGroup: 'upper body',
    exercises: ['Push-ups', 'Pull-ups', 'Bicep Curls', 'Tricep Dips'],
  },
  {
    location: 'gym',
    difficulty: '4',
    time: '1 hour',
    muscleGroup: 'lower body',
    exercises: ['Squats', 'Deadlifts', 'Leg Press', 'Calf Raises'],
  },
  {
    location: 'outdoor',
    difficulty: '2',
    time: '30 min',
    muscleGroup: 'abs',
    exercises: ['Planks', 'Russian Twists', 'Bicycle Crunches', 'Leg Raises'],
  },
  {
    location: 'home',
    difficulty: '5',
    time: '1 hour',
    muscleGroup: 'full body',
    exercises: ['Burpees', 'Mountain Climbers', 'Jumping Jacks', 'Squats', 'Push-ups'],
  },
  {
    location: 'gym',
    difficulty: '2',
    time: '30 min',
    muscleGroup: 'stretching',
    exercises: ['Hamstring Stretch', 'Quad Stretch', 'Calf Stretch', 'Tricep Stretch'],
  },
  {
    location: 'home',
    difficulty: '1',
    time: '15 min',
    muscleGroup: 'upper body',
    exercises: ['Dumbbell Shoulder Press', 'Bicep Curls', 'Tricep Kickbacks'],
  },
  {
    location: 'gym',
    difficulty: '4',
    time: '45 min',
    muscleGroup: 'lower body',
    exercises: ['Leg Press', 'Walking Lunges', 'Hamstring Curls', 'Calf Raises'],
  },
  {
    location: 'outdoor',
    difficulty: '3',
    time: '45 min',
    muscleGroup: 'abs',
    exercises: ['Planks', 'Russian Twists', 'Hanging Leg Raises', 'Mountain Climbers'],
  },
  {
    location: 'home',
    difficulty: '2',
    time: '30 min',
    muscleGroup: 'full body',
    exercises: ['Jump Squats', 'Push-ups', 'Bodyweight Lunges', 'Planks'],
  },
  {
    location: 'gym',
    difficulty: '5',
    time: '1 hour',
    muscleGroup: 'stretching',
    exercises: ['Hamstring Stretch', 'Quad Stretch', 'Shoulder Stretch', 'Chest Stretch', 'Tricep Stretch'],
  },
  {
    location: 'home',
    difficulty: '1',
    time: '15 min',
    muscleGroup: 'upper body',
    exercises: ['Push-ups', 'Bicep Curls', 'Tricep Dips'],
  },
  {
    location: 'gym',
    difficulty: '3',
    time: '30 min',
    muscleGroup: 'lower body',
    exercises: ['Squats', 'Deadlifts', 'Leg Press'],
  },
  {
    location: 'outdoor',
    difficulty: '2',
    time: '45 min',
    muscleGroup: 'abs',
    exercises: ['Planks', 'Russian Twists', 'Leg Raises'],
  },
  {
    location: 'home',
    difficulty: '4',
    time: '1 hour',
    muscleGroup: 'full body',
    exercises: ['Burpees', 'Mountain Climbers', 'Jumping Jacks', 'Crunches'],
  },
  {
    location: 'gym',
    difficulty: '5',
    time: '45 min',
    muscleGroup: 'stretching',
    exercises: ['Hamstring Stretch', 'Quad Stretch', 'Calf Stretch', 'Shoulder Stretch'],
  },
  {
    location: 'home',
    difficulty: '2',
    time: '30 min',
    muscleGroup: 'upper body',
    exercises: ['Dumbbell Rows', 'Chest Press', 'Shoulder Press'],
  },
  {
    location: 'gym',
    difficulty: '3',
    time: '45 min',
    muscleGroup: 'lower body',
    exercises: ['Lunges', 'Leg Curl', 'Hip Thrusts'],
  },
  {
    location: 'outdoor',
    difficulty: '1',
    time: '15 min',
    muscleGroup: 'abs',
    exercises: ['Crunches', 'Russian Twists', 'Planks'],
  },
  {
    location: 'home',
    difficulty: '4',
    time: '1 hour',
    muscleGroup: 'full body',
    exercises: ['Deadlifts', 'Squats', 'Pull-ups', 'Push-ups'],
  },
  {
    location: 'gym',
    difficulty: '2',
    time: '30 min',
    muscleGroup: 'stretching',
    exercises: ['Leg Stretch', 'Arm Stretch', 'Back Stretch', 'Chest Stretch'],
  },
  {
    location: 'home',
    difficulty: '2',
    time: '30 min',
    muscleGroup: 'upper body',
    exercises: ['Push-ups', 'Bicep Curls', 'Tricep Dips'],
  },
  {
    location: 'gym',
    difficulty: '3',
    time: '45 min',
    muscleGroup: 'lower body',
    exercises: ['Squats', 'Deadlifts', 'Leg Press'],
  },
  {
    location: 'outdoor',
    difficulty: '1',
    time: '15 min',
    muscleGroup: 'abs',
    exercises: ['Planks', 'Russian Twists', 'Leg Raises'],
  },
  {
    location: 'home',
    difficulty: '4',
    time: '1 hour',
    muscleGroup: 'full body',
    exercises: ['Burpees', 'Mountain Climbers', 'Jumping Jacks', 'Crunches'],
  },
  {
    location: 'gym',
    difficulty: '5',
    time: '45 min',
    muscleGroup: 'stretching',
    exercises: ['Hamstring Stretch', 'Quad Stretch', 'Calf Stretch', 'Shoulder Stretch'],
  },
  {
    location: 'home',
    difficulty: '3',
    time: '30 min',
    muscleGroup: 'upper body',
    exercises: ['Push-ups', 'Dumbbell Rows', 'Shoulder Press'],
  },
  {
    location: 'gym',
    difficulty: '4',
    time: '45 min',
    muscleGroup: 'lower body',
    exercises: ['Squats', 'Lunges', 'Deadlifts'],
  },
  {
    location: 'outdoor',
    difficulty: '2',
    time: '45 min',
    muscleGroup: 'abs',
    exercises: ['Planks', 'Russian Twists', 'Bicycle Crunches'],
  },
  {
    location: 'home',
    difficulty: '5',
    time: '1 hour',
    muscleGroup: 'full body',
    exercises: ['Burpees', 'Mountain Climbers', 'Jumping Jacks', 'Squats', 'Push-ups'],
  },
  {
    location: 'gym',
    difficulty: '2',
    time: '30 min',
    muscleGroup: 'stretching',
    exercises: ['Hamstring Stretch', 'Quad Stretch', 'Calf Stretch'],
  },
  {
    location: 'home',
    difficulty: '1',
    time: '15 min',
    muscleGroup: 'upper body',
    exercises: ['Push-ups', 'Bicep Curls', 'Tricep Dips'],
  },
  {
    location: 'gym',
    difficulty: '3',
    time: '45 min',
    muscleGroup: 'lower body',
    exercises: ['Squats', 'Deadlifts', 'Leg Press'],
  },
  {
    location: 'outdoor',
    difficulty: '2',
    time: '45 min',
    muscleGroup: 'abs',
    exercises: ['Planks', 'Russian Twists', 'Leg Raises'],
  },
  {
    location: 'home',
    difficulty: '4',
    time: '1 hour',
    muscleGroup: 'full body',
    exercises: ['Burpees', 'Mountain Climbers', 'Jumping Jacks', 'Crunches'],
  },
  {
    location: 'gym',
    difficulty: '5',
    time: '45 min',
    muscleGroup: 'stretching',
    exercises: ['Hamstring Stretch', 'Quad Stretch', 'Calf Stretch', 'Shoulder Stretch'],
  },
  {
    location: 'home',
    difficulty: '2',
    time: '30 min',
    muscleGroup: 'upper body',
    exercises: ['Dumbbell Rows', 'Chest Press', 'Shoulder Press'],
  },
  {
    location: 'gym',
    difficulty: '3',
    time: '45 min',
    muscleGroup: 'lower body',
    exercises: ['Lunges', 'Leg Curl', 'Hip Thrusts'],
  },
  {
    location: 'outdoor',
    difficulty: '1',
    time: '15 min',
    muscleGroup: 'abs',
    exercises: ['Crunches', 'Russian Twists', 'Planks'],
  },
  {
    location: 'home',
    difficulty: '4',
    time: '1 hour',
    muscleGroup: 'full body',
    exercises: ['Deadlifts', 'Squats', 'Pull-ups', 'Push-ups'],
  },
  {
    location: 'gym',
    difficulty: '2',
    time: '30 min',
    muscleGroup: 'stretching',
    exercises: ['Leg Stretch', 'Arm Stretch', 'Back Stretch'],
  },
];
const exerciseInstructions = {
  'Push-ups': 'Start in a plank position with your hands shoulder-width apart. Lower your body until your chest nearly touches the floor. Push back up to the starting position.',
  'Bicep Curls': 'Stand with dumbbells in each hand, palms facing forward. Curl the weights while keeping your upper arms stationary. Lower the weights back to starting position.',
  'Tricep Dips': 'Sit on a chair with your hands gripping the edge. Lift your body off the chair and lower yourself until your elbows are at a 90-degree angle. Push back up to starting position.',
  // Add instructions for other exercises...
};

const WorkoutGenerator = () => {
  const [location, setLocation] = useState('home');
  const [muscleGroup, setMuscleGroup] = useState('upper body');
  const [time, setTime] = useState('15 min');
  const [generatedWorkout, setGeneratedWorkout] = useState(null);
  const [favoriteWorkouts, setFavoriteWorkouts] = useState(loadFavorites());
  const [customLocation, setCustomLocation] = useState('');
  const [customMuscleGroup, setCustomMuscleGroup] = useState('');
  const [customTime, setCustomTime] = useState('');
  const [customExercises, setCustomExercises] = useState([]);

  // Save favorite workouts to localStorage
  function saveFavorites(favorites) {
    localStorage.setItem('favoriteWorkouts', JSON.stringify(favorites));
  }

  // Load favorite workouts from localStorage
  function loadFavorites() {
    const savedFavorites = localStorage.getItem('favoriteWorkouts');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  }

  const generateRandomWorkout = () => {
    const filteredWorkouts = workouts.filter(
      workout => workout.location === location && workout.muscleGroup === muscleGroup && workout.time === time,
    );
    if (filteredWorkouts.length > 0) {
      const randomWorkout = filteredWorkouts[Math.floor(Math.random() * filteredWorkouts.length)];
      setGeneratedWorkout(randomWorkout);
    } else {
      setGeneratedWorkout(null);
    }
  };

  const addToFavorites = () => {
    if (generatedWorkout) {
      const newFavorites = [...favoriteWorkouts, generatedWorkout];
      setFavoriteWorkouts(newFavorites);
      saveFavorites(newFavorites);
    }
  };

  const removeFromFavorites = (index) => {
    const updatedFavorites = [...favoriteWorkouts];
    updatedFavorites.splice(index, 1);
    setFavoriteWorkouts(updatedFavorites);
    saveFavorites(updatedFavorites);
  };

  const addCustomWorkout = () => {
    if (customLocation && customMuscleGroup && customTime && customExercises.length > 0) {
      const customWorkout = {
        location: customLocation,
        muscleGroup: customMuscleGroup,
        time: customTime,
        exercises: customExercises,
      };
      setFavoriteWorkouts([...favoriteWorkouts, customWorkout]);
      saveFavorites([...favoriteWorkouts, customWorkout]);
      setCustomLocation('');
      setCustomMuscleGroup('');
      setCustomTime('');
      setCustomExercises([]);
    }
  };

  return (
    <div>
      <div
        className="mt-3"
        style={{
          maxWidth: '600px',
          margin: 'auto',
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: '#333',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{
          fontFamily: 'Trirong, serif',
          color: 'white',
          fontSize: '30px',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        }}
        >Workout Generator
        </h1>
        <p style={{
          fontFamily: 'Trirong, serif',
          color: 'white',
          fontSize: '18px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        }}
        >
          Welcome to the Workout Generator! This tool helps you create personalized workout
          routines based on your preferences. You can generate a random workout or add your custom exercises. Your favorite workouts are
          also saved here for easy access!
        </p>
      </div>
      <div className="container mt-4" style={{ fontFamily: 'Trirong, serif' }}>
        <div className="row">
          <div className="col-md-6">
            <Card style={{ fontFamily: 'Trirong, serif' }}>
              <Card.Body>
                <Card.Title>Workout Generator</Card.Title>
                <Form>
                  <Form.Group controlId="formLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control as="select" value={location} onChange={(e) => setLocation(e.target.value)} style={{ fontFamily: 'Trirong, serif' }}>
                      <option value="home">Home</option>
                      <option value="gym">Gym</option>
                      <option value="outdoor">Outdoor</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formMuscleGroup">
                    <Form.Label>Muscle Group</Form.Label>
                    <Form.Control as="select" value={muscleGroup} onChange={(e) => setMuscleGroup(e.target.value)} style={{ fontFamily: 'Trirong, serif' }}>
                      <option value="upper body">Upper Body</option>
                      <option value="lower body">Lower Body</option>
                      <option value="abs">Abs</option>
                      <option value="full body">Full Body</option>
                      <option value="stretching">Stretching</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formTime">
                    <Form.Label>Total Time</Form.Label>
                    <Form.Control as="select" value={time} onChange={(e) => setTime(e.target.value)} style={{ fontFamily: 'Trirong, serif' }}>
                      <option value="15 min">15 min</option>
                      <option value="30 min">30 min</option>
                      <option value="45 min">45 min</option>
                      <option value="1 hour">1 hour</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
                <Button variant="secondary" className="mb-3" onClick={generateRandomWorkout}>Generate Workout</Button>
                {generatedWorkout && (
                  <div style={{ fontFamily: 'Trirong, serif' }}>
                    <h5>Generated Workout:</h5>
                    <p>Location: {generatedWorkout.location}</p>
                    <p>Difficulty: {generatedWorkout.difficulty}</p>
                    <p>Time: {generatedWorkout.time}</p>
                    <p>Muscle Group: {generatedWorkout.muscleGroup}</p>
                    <p>Exercises:</p>
                    <ul>
                      {generatedWorkout.exercises.map((exercise, index) => (
                        <li key={index}>
                          <strong>{exercise}</strong>: {exerciseInstructions[exercise]}
                        </li>
                      ))}
                    </ul>
                    <Button variant="primary" onClick={addToFavorites}>
                      <span role="img" aria-label="heart">❤️</span> Add to Favorites
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
            <Card className="mt-3" style={{ fontFamily: 'Trirong, serif' }}>
              <Card.Body>
                <Card.Title>Add Custom Workout</Card.Title>
                <Form>
                  <Form.Group controlId="customLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" value={customLocation} onChange={(e) => setCustomLocation(e.target.value)} style={{ fontFamily: 'Trirong, serif' }} />
                  </Form.Group>
                  <Form.Group controlId="customMuscleGroup">
                    <Form.Label>Muscle Group</Form.Label>
                    <Form.Control type="text" value={customMuscleGroup} onChange={(e) => setCustomMuscleGroup(e.target.value)} style={{ fontFamily: 'Trirong, serif' }} />
                  </Form.Group>
                  <Form.Group controlId="customTime">
                    <Form.Label>Total Time</Form.Label>
                    <Form.Control type="text" value={customTime} onChange={(e) => setCustomTime(e.target.value)} style={{ fontFamily: 'Trirong, serif' }} />
                  </Form.Group>
                  <Form.Group controlId="customExercises">
                    <Form.Label>Exercises (comma-separated)</Form.Label>
                    <Form.Control type="text" value={customExercises.join(',')} onChange={(e) => setCustomExercises(e.target.value.split(','))} style={{ fontFamily: 'Trirong, serif' }} />
                  </Form.Group>
                </Form>
                <Button variant="primary" onClick={addCustomWorkout}>Add Custom Workout</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <div>
              <Card style={{ fontFamily: 'Trirong, serif' }}>
                <Card.Body>
                  <Card.Title>Favorite Workouts</Card.Title>
                  <ul>
                    {favoriteWorkouts.map((workout, index) => (
                      <li key={index}>
                        <p>Location: {workout.location}</p>
                        <p>Difficulty: {workout.difficulty}</p>
                        <p>Time: {workout.time}</p>
                        <p>Muscle Group: {workout.muscleGroup}</p>
                        <p>Exercises:</p>
                        <ul>
                          {workout.exercises.map((exercise, index) => (
                            <li key={index}>
                              <strong>{exercise}</strong>: {exerciseInstructions[exercise]}
                            </li>
                          ))}
                        </ul>
                        <Button className="mt-3" variant="danger" onClick={() => removeFromFavorites(index)}>Remove</Button>
                        <hr style={{ margin: '20px 0', borderTop: '1px solid red' }} />
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutGenerator;
