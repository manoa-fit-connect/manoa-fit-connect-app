import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Profiles } from '../../api/profile/Profiles';
import { Equipments } from '../../api/equipment/Equipments';
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

// Initialize the database with a default equipment document.
const addEquipment = (equipment) => {
  console.log(`  Adding: ${equipment.equipmentName} (${equipment.equipmentName})`);
  Equipments.collection.insert(equipment);
};
// Initialize the EquipmentsCollection if empty.
if (Equipments.collection.find().count() === 0) {
  if (Meteor.settings.defaultEquipments) {
    console.log('Creating default equipment.');
    Meteor.settings.defaultEquipments.forEach(equipment => addEquipment(equipment));
  }
}
