import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Profiles } from '../../api/profile/Profiles';
import { PRS } from '../../api/PRS/prs';
import { EquipmentItems } from '../../api/item/EquipmentItems';
import { Workouts } from '../../api/Workouts/Workout';
/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

// Initialize the database with a default profile document.
const addProfile = (profile) => {
  console.log(`  Adding: ${profile.owner} (${profile.owner})`);
  Profiles.collection.insert(profile);
};

// Initialize the ProfilesCollection if empty.
if (Profiles.collection.find().count() === 0) {
  if (Meteor.settings.defaultProfiles) {
    console.log('Creating default profile.');
    Meteor.settings.defaultProfiles.forEach(profile => addProfile(profile));
  }
}

const addPRS = (PR) => {
  console.log(`  Adding: ${PR.exercise} (${PR.owner})`);
  PRS.collection.insert(PR);
};

// Initialize the StuffsCollection if empty.
if (PRS.collection.find().count() === 0) {
  if (Meteor.settings.defaultPRS) {
    console.log('Creating default PRS.');
    Meteor.settings.defaultPRS.forEach(PR => addPRS(PR));
  }
}

const addEquipmentItem = (item) => {
  console.log(` Adding: ${item.itemName} (${item.owner})`);
  EquipmentItems.collection.insert(item);
};

if (EquipmentItems.collection.find().count() === 0) {
  if (Meteor.settings.defaultItems) {
    console.log('Creating default Items.');
    Meteor.settings.defaultItems.forEach(itemfound => addEquipmentItem(itemfound));
  }
}

const addWorkouts = (workouts) => {
  console.log(`  Adding: ${workouts.name} (${workouts.owner})`);
  Workouts.collection.insert(workouts);
};

// Initialize the StuffsCollection if empty.
if (Workouts.collection.find().count() === 0) {
  if (Meteor.settings.defaultWorkouts) {
    console.log('Creating default workouts.');
    Meteor.settings.defaultWorkouts.forEach(workout => addWorkouts(workout));
  }
}
