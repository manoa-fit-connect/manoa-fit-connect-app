import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Stuffs } from '../../api/stuff/Stuff';
import { Profiles } from '../../api/profile/Profiles';
import { Workouts } from '../../api/Workouts/Workout';
import { PRS } from '../../api/PRS/prs';
import { EquipmentItems } from '../../api/item/EquipmentItems';
import { Events } from '../../api/event/Event';
import { GeneratorItems } from '../../api/generator/GeneratorItems';

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(Stuffs.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Stuffs.collection.find({ owner: username });
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(Stuffs.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Stuffs.collection.find();
  }
  return this.ready();
});

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(Profiles.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Profiles.collection.find({ owner: username });
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(Profiles.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Profiles.collection.find();
  }
  return this.ready();
});

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.

Meteor.publish(Workouts.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Workouts.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(PRS.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return PRS.collection.find({ owner: username });
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});

Meteor.publish(EquipmentItems.userPublicationName, function () {
  if (this.userId) {
    return EquipmentItems.collection.find({});
  }
  return this.ready();
});

Meteor.publish(Events.userPublicationName, function () {
  if (this.userId) {
    return Events.collection.find({});
  }
  return this.ready();
});

Meteor.publish(GeneratorItems.userPublicationName, function () {
  if (this.userId) {
    return GeneratorItems.collection.find({});
  }
  return this.ready();
});

// General user-level publication.
// If logged in, then publish all profiles. Otherwise, publish nothing.
Meteor.publish('profiles.all', function () {
  if (this.userId) { // Checks if the user is logged in
    return Profiles.collection.find({});
  }
  return this.ready(); // If not logged in, don't publish anything.
});
