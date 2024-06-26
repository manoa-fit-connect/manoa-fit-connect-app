import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import ListStuffAdmin from '../pages/ListStuffAdmin';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import NavBar from '../components/NavBar';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import LoadingSpinner from '../components/LoadingSpinner';
import ProfileUser from '../pages/ProfileUser';
import ProfileCreate from '../pages/ProfileCreate';
import ProfileEdit from '../pages/ProfileEdit';
import ProgressTracker from '../pages/ProgressTracker';
import Friends from '../pages/Friends';
import Event from '../pages/Event';
import AboutUs from '../pages/AboutUs';
import AddWorkout from '../pages/AddWorkout';
import AddPRS from '../pages/AddPRS';
import EditPRS from '../pages/EditPRS';
import ListEquipment from '../pages/ListEquipment';
import AddStuff from '../pages/AddStuff';
import EditWorkout from '../pages/EditWorkout';
import ListGenerator from '../pages/ListGenerator';
import WorkoutBuddy from '../pages/WorkoutBuddy';
import User from '../pages/User';
/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => {
  const { ready } = useTracker(() => {
    const rdy = Roles.subscription.ready();
    return {
      ready: rdy,
    };
  });
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/home" element={<ProtectedRoute><Landing /></ProtectedRoute>} />
          <Route path="/userprofile" element={<ProtectedRoute><ProfileUser /></ProtectedRoute>} />
          <Route path="/workoutbuddy" element={<ProtectedRoute><WorkoutBuddy /></ProtectedRoute>} />
          <Route path="/createprofile" element={<ProtectedRoute><ProfileCreate /></ProtectedRoute>} />
          <Route path="/editprofile/:_id" element={<ProtectedRoute><ProfileEdit /></ProtectedRoute>} />
          <Route path="/friends" element={<ProtectedRoute><Friends /></ProtectedRoute>} />
          <Route path="/Progress" element={<ProtectedRoute><ProgressTracker /></ProtectedRoute>} />
          <Route path="/addWorkout" element={<ProtectedRoute><AddWorkout /></ProtectedRoute>} />
          <Route path="/addPR" element={<ProtectedRoute><AddPRS /></ProtectedRoute>} />
          <Route path="/editPR/:_id" element={<ProtectedRoute><EditPRS /></ProtectedRoute>} />
          <Route path="/add" element={<ProtectedRoute><AddStuff /></ProtectedRoute>} />
          <Route path="/user/:_id" element={<ProtectedRoute><User /></ProtectedRoute>} />
          <Route path="/editWorkout/:_id" element={<ProtectedRoute><EditWorkout /></ProtectedRoute>} />
          <Route path="/event" element={<ProtectedRoute><Event /></ProtectedRoute>} />
          <Route path="/admin" element={<AdminProtectedRoute ready={ready}><ListStuffAdmin /></AdminProtectedRoute>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
          <Route path="/notauthorized" element={<NotAuthorized />} />
          <Route path="/admin" element={<AdminProtectedRoute ready={ready}><ListStuffAdmin /></AdminProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
          <Route path="/listEquipment" element={<ListEquipment />} />
          <Route path="/listGenerator" element={<ListGenerator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

/*
 * ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/signin" />;
};

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ ready, children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!ready) {
    return <LoadingSpinner />;
  }
  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
  return (isLogged && isAdmin) ? children : <Navigate to="/notauthorized" />;
};

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Landing />,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  ready: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

AdminProtectedRoute.defaultProps = {
  ready: false,
  children: <Landing />,
};

export default App;
